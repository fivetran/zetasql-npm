// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { _zetasql_ASTSetOperationEnums_ColumnPropagationMode, _zetasql_ASTSetOperationEnums_ColumnPropagationMode__Output } from '../zetasql/ASTSetOperationEnums';

export interface ASTSetOperationColumnPropagationModeProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'value'?: (_zetasql_ASTSetOperationEnums_ColumnPropagationMode);
}

export interface ASTSetOperationColumnPropagationModeProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'value': (_zetasql_ASTSetOperationEnums_ColumnPropagationMode__Output);
}
