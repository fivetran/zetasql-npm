// Original file: src/zetasql-snowflake/protos/zetasql/resolved_ast/serialization.proto

import type { Long } from '@grpc/proto-loader';

export interface TableRefProto {
  'name'?: (string);
  'serializationId'?: (number | string | Long);
  'fullName'?: (string);
}

export interface TableRefProto__Output {
  'name': (string);
  'serializationId': (Long);
  'fullName': (string);
}
