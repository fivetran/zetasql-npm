// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTTypeProto as _zetasql_ASTTypeProto, ASTTypeProto__Output as _zetasql_ASTTypeProto__Output } from '../zetasql/ASTTypeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTTypeParameterListProto as _zetasql_ASTTypeParameterListProto, ASTTypeParameterListProto__Output as _zetasql_ASTTypeParameterListProto__Output } from '../zetasql/ASTTypeParameterListProto';

export interface ASTSimpleTypeProto {
  'parent'?: (_zetasql_ASTTypeProto | null);
  'typeName'?: (_zetasql_ASTPathExpressionProto | null);
  'typeParameters'?: (_zetasql_ASTTypeParameterListProto | null);
}

export interface ASTSimpleTypeProto__Output {
  'parent': (_zetasql_ASTTypeProto__Output | null);
  'typeName': (_zetasql_ASTPathExpressionProto__Output | null);
  'typeParameters': (_zetasql_ASTTypeParameterListProto__Output | null);
}
