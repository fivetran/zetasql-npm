// Original file: src/snowflake/protos/local_service.proto

import type { AnyASTStatementProto as _zetasql_AnyASTStatementProto, AnyASTStatementProto__Output as _zetasql_AnyASTStatementProto__Output } from '../../zetasql/AnyASTStatementProto';

export interface ParseResponse {
  'parsedStatement'?: (_zetasql_AnyASTStatementProto | null);
  'result'?: "parsedStatement";
}

export interface ParseResponse__Output {
  'parsedStatement'?: (_zetasql_AnyASTStatementProto__Output | null);
  'result': "parsedStatement";
}
