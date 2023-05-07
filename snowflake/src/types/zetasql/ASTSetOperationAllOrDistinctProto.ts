// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { _zetasql_ASTSetOperationEnums_AllOrDistinct, _zetasql_ASTSetOperationEnums_AllOrDistinct__Output } from '../zetasql/ASTSetOperationEnums';

export interface ASTSetOperationAllOrDistinctProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'value'?: (_zetasql_ASTSetOperationEnums_AllOrDistinct);
}

export interface ASTSetOperationAllOrDistinctProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'value': (_zetasql_ASTSetOperationEnums_AllOrDistinct__Output);
}
