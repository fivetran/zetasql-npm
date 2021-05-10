import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './types/local_service';
import { ZetaSqlLocalServiceClient } from './types/zetasql/local_service/ZetaSqlLocalService';

export class Client {
  static HOST = 'localhost:50051'; // TOOD: customize port

  static INSTANCE = new Client();

  static api: ZetaSqlLocalServiceClient;

  private constructor() {
    const packageDefinition = protoLoader.loadSync('local_service.proto', {
      defaults: true,
      oneofs: true,
      includeDirs: [__dirname + '/../protos'],
    });

    const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

    Client.api = new proto.zetasql.local_service.ZetaSqlLocalService(
      Client.HOST,
      grpc.credentials.createInsecure(),
    );
  }
}
