// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTParameterExprProto as _zetasql_ASTParameterExprProto, ASTParameterExprProto__Output as _zetasql_ASTParameterExprProto__Output } from '../zetasql/ASTParameterExprProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';

export interface ASTParameterAssignmentProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'parameter'?: (_zetasql_ASTParameterExprProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
}

export interface ASTParameterAssignmentProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'parameter': (_zetasql_ASTParameterExprProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
}
