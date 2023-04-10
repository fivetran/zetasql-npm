// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateFunctionStmtBaseProto as _zetasql_ASTCreateFunctionStmtBaseProto, ASTCreateFunctionStmtBaseProto__Output as _zetasql_ASTCreateFunctionStmtBaseProto__Output } from '../zetasql/ASTCreateFunctionStmtBaseProto';
import type { ASTTVFSchemaProto as _zetasql_ASTTVFSchemaProto, ASTTVFSchemaProto__Output as _zetasql_ASTTVFSchemaProto__Output } from '../zetasql/ASTTVFSchemaProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';

export interface ASTCreateTableFunctionStatementProto {
  'parent'?: (_zetasql_ASTCreateFunctionStmtBaseProto | null);
  'returnTvfSchema'?: (_zetasql_ASTTVFSchemaProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
}

export interface ASTCreateTableFunctionStatementProto__Output {
  'parent': (_zetasql_ASTCreateFunctionStmtBaseProto__Output | null);
  'returnTvfSchema': (_zetasql_ASTTVFSchemaProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
}
