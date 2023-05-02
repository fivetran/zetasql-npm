// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { _zetasql_ASTSetOperationEnums_ColumnMatchMode, _zetasql_ASTSetOperationEnums_ColumnMatchMode__Output } from '../zetasql/ASTSetOperationEnums';

export interface ASTSetOperationColumnMatchModeProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'value'?: (_zetasql_ASTSetOperationEnums_ColumnMatchMode);
}

export interface ASTSetOperationColumnMatchModeProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'value': (_zetasql_ASTSetOperationEnums_ColumnMatchMode__Output);
}
