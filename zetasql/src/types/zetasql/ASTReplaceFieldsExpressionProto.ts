// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTReplaceFieldsArgProto as _zetasql_ASTReplaceFieldsArgProto, ASTReplaceFieldsArgProto__Output as _zetasql_ASTReplaceFieldsArgProto__Output } from '../zetasql/ASTReplaceFieldsArgProto';

export interface ASTReplaceFieldsExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
  'arguments'?: (_zetasql_ASTReplaceFieldsArgProto)[];
}

export interface ASTReplaceFieldsExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
  'arguments': (_zetasql_ASTReplaceFieldsArgProto__Output)[];
}
