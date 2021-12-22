// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTTypeProto as _zetasql_ASTTypeProto, ASTTypeProto__Output as _zetasql_ASTTypeProto__Output } from '../zetasql/ASTTypeProto';
import type { AnyASTTypeProto as _zetasql_AnyASTTypeProto, AnyASTTypeProto__Output as _zetasql_AnyASTTypeProto__Output } from '../zetasql/AnyASTTypeProto';
import type { ASTTypeParameterListProto as _zetasql_ASTTypeParameterListProto, ASTTypeParameterListProto__Output as _zetasql_ASTTypeParameterListProto__Output } from '../zetasql/ASTTypeParameterListProto';

export interface ASTArrayTypeProto {
  'parent'?: (_zetasql_ASTTypeProto | null);
  'elementType'?: (_zetasql_AnyASTTypeProto | null);
  'typeParameters'?: (_zetasql_ASTTypeParameterListProto | null);
}

export interface ASTArrayTypeProto__Output {
  'parent': (_zetasql_ASTTypeProto__Output | null);
  'elementType': (_zetasql_AnyASTTypeProto__Output | null);
  'typeParameters': (_zetasql_ASTTypeParameterListProto__Output | null);
}
