// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { _zetasql_ASTSelectAsEnums_AsMode, _zetasql_ASTSelectAsEnums_AsMode__Output } from '../zetasql/ASTSelectAsEnums';

export interface ASTSelectAsProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'typeName'?: (_zetasql_ASTPathExpressionProto | null);
  'asMode'?: (_zetasql_ASTSelectAsEnums_AsMode);
}

export interface ASTSelectAsProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'typeName': (_zetasql_ASTPathExpressionProto__Output | null);
  'asMode': (_zetasql_ASTSelectAsEnums_AsMode__Output);
}
