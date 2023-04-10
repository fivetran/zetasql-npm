// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTDdlStatementProto as _zetasql_ASTDdlStatementProto, ASTDdlStatementProto__Output as _zetasql_ASTDdlStatementProto__Output } from '../zetasql/ASTDdlStatementProto';
import type { _zetasql_ASTCreateStatementEnums_Scope, _zetasql_ASTCreateStatementEnums_Scope__Output } from '../zetasql/ASTCreateStatementEnums';

export interface ASTCreateStatementProto {
  'parent'?: (_zetasql_ASTDdlStatementProto | null);
  'scope'?: (_zetasql_ASTCreateStatementEnums_Scope);
  'isOrReplace'?: (boolean);
  'isIfNotExists'?: (boolean);
}

export interface ASTCreateStatementProto__Output {
  'parent': (_zetasql_ASTDdlStatementProto__Output | null);
  'scope': (_zetasql_ASTCreateStatementEnums_Scope__Output);
  'isOrReplace': (boolean);
  'isIfNotExists': (boolean);
}
