// Original file: src/protos/zetasql/resolved_ast/serialization.proto

import type { Long } from '@grpc/proto-loader';

export interface ModelRefProto {
  'name'?: (string);
  'serializationId'?: (number | string | Long);
  'fullName'?: (string);
}

export interface ModelRefProto__Output {
  'name': (string);
  'serializationId': (Long);
  'fullName': (string);
}
