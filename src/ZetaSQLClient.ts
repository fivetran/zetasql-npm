import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { promisify } from 'util';
import { AnalyzeRequest } from '.';
import { Empty__Output } from './types/google/protobuf/Empty';
import { ProtoGrpcType } from './types/local_service';
import { LanguageOptionsProto__Output } from './types/zetasql/LanguageOptionsProto';
import { AnalyzeResponse__Output } from './types/zetasql/local_service/AnalyzeResponse';
import { ExtractTableNamesFromStatementRequest } from './types/zetasql/local_service/ExtractTableNamesFromStatementRequest';
import { ExtractTableNamesFromStatementResponse__Output } from './types/zetasql/local_service/ExtractTableNamesFromStatementResponse';
import { FormatSqlRequest } from './types/zetasql/local_service/FormatSqlRequest';
import { FormatSqlResponse__Output } from './types/zetasql/local_service/FormatSqlResponse';
import { GetBuiltinFunctionsResponse__Output } from './types/zetasql/local_service/GetBuiltinFunctionsResponse';
import { LanguageOptionsRequest } from './types/zetasql/local_service/LanguageOptionsRequest';
import { RegisterCatalogRequest } from './types/zetasql/local_service/RegisterCatalogRequest';
import { RegisterResponse__Output } from './types/zetasql/local_service/RegisterResponse';
import { UnregisterRequest } from './types/zetasql/local_service/UnregisterRequest';
import { ZetaSqlLocalServiceClient } from './types/zetasql/local_service/ZetaSqlLocalService';
import { ZetaSQLBuiltinFunctionOptionsProto } from './types/zetasql/ZetaSQLBuiltinFunctionOptionsProto';

export class ZetaSQLClient {
  public static API: ZetaSqlLocalServiceClient;

  private static readonly HOST = 'localhost';
  private static INSTANCE: ZetaSQLClient | undefined;

  static getInstance(): ZetaSQLClient {
    if (!ZetaSQLClient.INSTANCE) {
      throw new Error('You have to call init first');
    }

    return ZetaSQLClient.INSTANCE;
  }

  static init(port: number): void {
    ZetaSQLClient.INSTANCE = new ZetaSQLClient();
    const packageDefinition = protoLoader.loadSync('local_service.proto', {
      defaults: true,
      oneofs: true,
      includeDirs: [`${__dirname}/protos`],
    });

    const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

    ZetaSQLClient.API = new proto.zetasql.local_service.ZetaSqlLocalService(
      `${ZetaSQLClient.HOST}:${port}`,
      grpc.credentials.createInsecure(),
    );
  }

  private constructor() {
    // To prevent instantiation from outside
  }

  async testConnection(): Promise<boolean> {
    for (let i = 0; i < 15; i++) {
      try {
        await this.formatSql({ sql: 'SELECT 1;' });
        return true;
      } catch (e: any) {
        if (e.code !== 14) {
          return false;
        }
      }
      await this.delay(500);
    }
    return false;
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  registerCatalog(request: RegisterCatalogRequest): Promise<RegisterResponse__Output | undefined> {
    return this.promisify(request, ZetaSQLClient.API.registerCatalog.bind(ZetaSQLClient.API));
  }

  unRegisterCatalog(request: UnregisterRequest): Promise<Empty__Output | undefined> {
    return this.promisify(request, ZetaSQLClient.API.unregisterCatalog.bind(ZetaSQLClient.API));
  }

  analyze(request: AnalyzeRequest): Promise<AnalyzeResponse__Output | undefined> {
    return this.promisify(request, ZetaSQLClient.API.analyze.bind(ZetaSQLClient.API));
  }

  getLanguageOptions(
    request: LanguageOptionsRequest,
  ): Promise<LanguageOptionsProto__Output | undefined> {
    return this.promisify(request, ZetaSQLClient.API.getLanguageOptions.bind(ZetaSQLClient.API));
  }

  getBuiltinFunctions(
    request: ZetaSQLBuiltinFunctionOptionsProto,
  ): Promise<GetBuiltinFunctionsResponse__Output | undefined> {
    return this.promisify(request, ZetaSQLClient.API.getBuiltinFunctions.bind(ZetaSQLClient.API));
  }

  formatSql(request: FormatSqlRequest): Promise<FormatSqlResponse__Output | undefined> {
    return this.promisify(request, ZetaSQLClient.API.formatSql.bind(ZetaSQLClient.API));
  }

  extractTableNamesFromStatement(
    request: ExtractTableNamesFromStatementRequest,
  ): Promise<ExtractTableNamesFromStatementResponse__Output | undefined> {
    return this.promisify(
      request,
      ZetaSQLClient.API.extractTableNamesFromStatement.bind(ZetaSQLClient.API),
    );
  }

  promisify<T1, TResult>(
    request: T1,
    fn: (request: T1, callback: (err: any, result: TResult) => void) => grpc.ClientUnaryCall,
  ): Promise<TResult> {
    return promisify<T1, TResult>(fn)(request);
  }
}
