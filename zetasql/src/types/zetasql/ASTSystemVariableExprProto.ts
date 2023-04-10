// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTParameterExprBaseProto as _zetasql_ASTParameterExprBaseProto, ASTParameterExprBaseProto__Output as _zetasql_ASTParameterExprBaseProto__Output } from '../zetasql/ASTParameterExprBaseProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTSystemVariableExprProto {
  'parent'?: (_zetasql_ASTParameterExprBaseProto | null);
  'path'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTSystemVariableExprProto__Output {
  'parent': (_zetasql_ASTParameterExprBaseProto__Output | null);
  'path': (_zetasql_ASTPathExpressionProto__Output | null);
}
