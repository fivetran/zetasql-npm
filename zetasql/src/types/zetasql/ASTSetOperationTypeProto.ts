// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { _zetasql_ASTSetOperationEnums_OperationType, _zetasql_ASTSetOperationEnums_OperationType__Output } from '../zetasql/ASTSetOperationEnums';

export interface ASTSetOperationTypeProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'value'?: (_zetasql_ASTSetOperationEnums_OperationType);
}

export interface ASTSetOperationTypeProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'value': (_zetasql_ASTSetOperationEnums_OperationType__Output);
}
