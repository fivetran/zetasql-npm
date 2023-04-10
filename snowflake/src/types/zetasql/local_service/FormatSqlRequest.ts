// Original file: src/snowflake/protos/local_service.proto

import type { FormatterOptionsProto as _zetasql_FormatterOptionsProto, FormatterOptionsProto__Output as _zetasql_FormatterOptionsProto__Output } from '../../zetasql/FormatterOptionsProto';
import type { FormatterRangeProto as _zetasql_FormatterRangeProto, FormatterRangeProto__Output as _zetasql_FormatterRangeProto__Output } from '../../zetasql/FormatterRangeProto';

export interface FormatSqlRequest {
  'sql'?: (string);
  'options'?: (_zetasql_FormatterOptionsProto | null);
  'byteRanges'?: (_zetasql_FormatterRangeProto)[];
}

export interface FormatSqlRequest__Output {
  'sql': (string);
  'options': (_zetasql_FormatterOptionsProto__Output | null);
  'byteRanges': (_zetasql_FormatterRangeProto__Output)[];
}
