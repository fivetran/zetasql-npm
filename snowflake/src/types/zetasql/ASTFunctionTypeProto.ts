// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTypeProto as _zetasql_ASTTypeProto, ASTTypeProto__Output as _zetasql_ASTTypeProto__Output } from '../zetasql/ASTTypeProto';
import type { ASTFunctionTypeArgListProto as _zetasql_ASTFunctionTypeArgListProto, ASTFunctionTypeArgListProto__Output as _zetasql_ASTFunctionTypeArgListProto__Output } from '../zetasql/ASTFunctionTypeArgListProto';
import type { AnyASTTypeProto as _zetasql_AnyASTTypeProto, AnyASTTypeProto__Output as _zetasql_AnyASTTypeProto__Output } from '../zetasql/AnyASTTypeProto';
import type { ASTTypeParameterListProto as _zetasql_ASTTypeParameterListProto, ASTTypeParameterListProto__Output as _zetasql_ASTTypeParameterListProto__Output } from '../zetasql/ASTTypeParameterListProto';
import type { ASTCollateProto as _zetasql_ASTCollateProto, ASTCollateProto__Output as _zetasql_ASTCollateProto__Output } from '../zetasql/ASTCollateProto';

export interface ASTFunctionTypeProto {
  'parent'?: (_zetasql_ASTTypeProto | null);
  'argList'?: (_zetasql_ASTFunctionTypeArgListProto | null);
  'returnType'?: (_zetasql_AnyASTTypeProto | null);
  'typeParameters'?: (_zetasql_ASTTypeParameterListProto | null);
  'collate'?: (_zetasql_ASTCollateProto | null);
}

export interface ASTFunctionTypeProto__Output {
  'parent': (_zetasql_ASTTypeProto__Output | null);
  'argList': (_zetasql_ASTFunctionTypeArgListProto__Output | null);
  'returnType': (_zetasql_AnyASTTypeProto__Output | null);
  'typeParameters': (_zetasql_ASTTypeParameterListProto__Output | null);
  'collate': (_zetasql_ASTCollateProto__Output | null);
}
