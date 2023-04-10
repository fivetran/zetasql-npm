// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTSystemVariableExprProto as _zetasql_ASTSystemVariableExprProto, ASTSystemVariableExprProto__Output as _zetasql_ASTSystemVariableExprProto__Output } from '../zetasql/ASTSystemVariableExprProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTSystemVariableAssignmentProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'systemVariable'?: (_zetasql_ASTSystemVariableExprProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTSystemVariableAssignmentProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'systemVariable': (_zetasql_ASTSystemVariableExprProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
}
