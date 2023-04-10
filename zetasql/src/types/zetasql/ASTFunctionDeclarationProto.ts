// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTFunctionParametersProto as _zetasql_ASTFunctionParametersProto, ASTFunctionParametersProto__Output as _zetasql_ASTFunctionParametersProto__Output } from '../zetasql/ASTFunctionParametersProto';

export interface ASTFunctionDeclarationProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'parameters'?: (_zetasql_ASTFunctionParametersProto | null);
}

export interface ASTFunctionDeclarationProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'parameters': (_zetasql_ASTFunctionParametersProto__Output | null);
}
