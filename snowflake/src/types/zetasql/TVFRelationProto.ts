// Original file: src/snowflake/protos/zetasql/proto/function.proto

import type { TVFRelationColumnProto as _zetasql_TVFRelationColumnProto, TVFRelationColumnProto__Output as _zetasql_TVFRelationColumnProto__Output } from '../zetasql/TVFRelationColumnProto';

export interface TVFRelationProto {
  'column'?: (_zetasql_TVFRelationColumnProto)[];
  'isValueTable'?: (boolean);
}

export interface TVFRelationProto__Output {
  'column': (_zetasql_TVFRelationColumnProto__Output)[];
  'isValueTable': (boolean);
}
