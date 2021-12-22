// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';
import type { TypeKind as _zetasql_TypeKind } from '../zetasql/TypeKind';

export interface ASTDateOrTimeLiteralProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'stringLiteral'?: (_zetasql_ASTStringLiteralProto | null);
  'typeKind'?: (_zetasql_TypeKind | keyof typeof _zetasql_TypeKind);
}

export interface ASTDateOrTimeLiteralProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'stringLiteral': (_zetasql_ASTStringLiteralProto__Output | null);
  'typeKind': (_zetasql_TypeKind);
}
