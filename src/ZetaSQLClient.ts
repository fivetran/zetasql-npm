import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { promisify } from 'util';
import { AnalyzeRequest } from '.';
import { ProtoGrpcType } from './types/local_service';
import { LanguageOptionsProto } from './types/zetasql/LanguageOptionsProto';
import { ExtractTableNamesFromStatementRequest } from './types/zetasql/local_service/ExtractTableNamesFromStatementRequest';
import { FormatSqlRequest } from './types/zetasql/local_service/FormatSqlRequest';
import { LanguageOptionsRequest } from './types/zetasql/local_service/LanguageOptionsRequest';
import { RegisterCatalogRequest } from './types/zetasql/local_service/RegisterCatalogRequest';
import { UnregisterRequest } from './types/zetasql/local_service/UnregisterRequest';
import { ZetaSqlLocalServiceClient } from './types/zetasql/local_service/ZetaSqlLocalService';
import { ZetaSQLBuiltinFunctionOptionsProto } from './types/zetasql/ZetaSQLBuiltinFunctionOptionsProto';

export class ZetaSQLClient {
  private static readonly HOST = 'localhost';
  private static instance: ZetaSQLClient;
  private static api: ZetaSqlLocalServiceClient;

  static getInstance() {
    if (!ZetaSQLClient.instance) {
      throw new Error('You have to call init first');
    }

    return ZetaSQLClient.instance;
  }

  static init(port: number) {
    ZetaSQLClient.instance = new ZetaSQLClient();
    const packageDefinition = protoLoader.loadSync('local_service.proto', {
      defaults: true,
      oneofs: true,
      includeDirs: [__dirname + '/protos'],
    });

    const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

    ZetaSQLClient.api = new proto.zetasql.local_service.ZetaSqlLocalService(
      `${ZetaSQLClient.HOST}:${port}`,
      grpc.credentials.createInsecure(),
    );
  }

  getLanguageOptionsPromisify: (request: LanguageOptionsRequest) => Promise<LanguageOptionsProto>;

  private constructor() {
    // To prevent instantiation from outside
  }

  async testConnection(): Promise<boolean> {
    for (let i = 0; i < 15; i++) {
      try {
        await this.formatSql({ sql: 'SELECT 1;' });
        return true;
      } catch (e) {
        if (e.code !== 14) {
          return false;
        }
      }
      await this.delay(500);
    }
    return false;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  registerCatalog(request: RegisterCatalogRequest) {
    return this.promisify(request, ZetaSQLClient.api.registerCatalog);
  }

  unRegisterCatalog(request: UnregisterRequest) {
    return this.promisify(request, ZetaSQLClient.api.unregisterCatalog);
  }

  analyze(request: AnalyzeRequest) {
    return this.promisify(request, ZetaSQLClient.api.analyze);
  }

  getLanguageOptions(request: LanguageOptionsRequest) {
    return this.promisify(request, ZetaSQLClient.api.getLanguageOptions);
  }

  getBuiltinFunctions(request: ZetaSQLBuiltinFunctionOptionsProto) {
    return this.promisify(request, ZetaSQLClient.api.getBuiltinFunctions);
  }

  formatSql(request: FormatSqlRequest) {
    return this.promisify(request, ZetaSQLClient.api.formatSql);
  }

  extractTableNamesFromStatement(request: ExtractTableNamesFromStatementRequest) {
    return this.promisify(request, ZetaSQLClient.api.extractTableNamesFromStatement);
  }

  promisify<T1, TResult>(
    request: T1,
    fn: (request: T1, callback: (err: any, result: TResult) => void) => grpc.ClientUnaryCall,
  ): Promise<TResult> {
    return promisify<T1, TResult>(fn).bind(ZetaSQLClient.api)(request);
  }
}
