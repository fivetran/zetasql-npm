// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { _zetasql_ASTGeneratedColumnInfoEnums_StoredMode, _zetasql_ASTGeneratedColumnInfoEnums_StoredMode__Output } from '../zetasql/ASTGeneratedColumnInfoEnums';

export interface ASTGeneratedColumnInfoProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'storedMode'?: (_zetasql_ASTGeneratedColumnInfoEnums_StoredMode);
}

export interface ASTGeneratedColumnInfoProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'storedMode': (_zetasql_ASTGeneratedColumnInfoEnums_StoredMode__Output);
}
