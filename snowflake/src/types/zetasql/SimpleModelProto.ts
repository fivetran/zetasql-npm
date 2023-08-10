// Original file: src/snowflake/protos/zetasql/public/simple_model.proto

import type { SimpleColumnProto as _zetasql_SimpleColumnProto, SimpleColumnProto__Output as _zetasql_SimpleColumnProto__Output } from '../zetasql/SimpleColumnProto';
import type { Long } from '@grpc/proto-loader';

export interface SimpleModelProto {
  'id'?: (number | string | Long);
  'name'?: (string);
  'input'?: (_zetasql_SimpleColumnProto)[];
  'output'?: (_zetasql_SimpleColumnProto)[];
}

export interface SimpleModelProto__Output {
  'id': (Long);
  'name': (string);
  'input': (_zetasql_SimpleColumnProto__Output)[];
  'output': (_zetasql_SimpleColumnProto__Output)[];
}
