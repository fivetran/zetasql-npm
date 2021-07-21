import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './types/local_service';
import { LanguageOptionsRequest } from './types/zetasql/local_service/LanguageOptionsRequest';
import { ZetaSqlLocalServiceClient } from './types/zetasql/local_service/ZetaSqlLocalService';
import { promisify } from 'util';
import { LanguageOptionsProto } from './types/zetasql/LanguageOptionsProto';
import { ZetaSQLBuiltinFunctionOptionsProto } from './types/zetasql/ZetaSQLBuiltinFunctionOptionsProto';
import { RegisterCatalogRequest } from './types/zetasql/local_service/RegisterCatalogRequest';
import { FormatSqlRequest } from './types/zetasql/local_service/FormatSqlRequest';
import { AnalyzeRequest } from '.';
import { ExtractTableNamesFromStatementRequest } from './types/zetasql/local_service/ExtractTableNamesFromStatementRequest';

export class ZetaSQLClient {
  static HOST = 'localhost:50051'; // TOOD: customize port

  static INSTANCE = new ZetaSQLClient();

  static api: ZetaSqlLocalServiceClient;

  getLanguageOptionsPromisify: (request: LanguageOptionsRequest) => Promise<LanguageOptionsProto>;

  private constructor() {
    const packageDefinition = protoLoader.loadSync('local_service.proto', {
      defaults: true,
      oneofs: true,
      includeDirs: [__dirname + '/../protos'],
    });

    const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

    ZetaSQLClient.api = new proto.zetasql.local_service.ZetaSqlLocalService(
      ZetaSQLClient.HOST,
      grpc.credentials.createInsecure(),
    );
  }

  async testConnection(): Promise<boolean> {
    for (let i = 0; i < 15; i++) {
      try {
        const response = await this.formatSql({ sql: 'SELECT 1;' });
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