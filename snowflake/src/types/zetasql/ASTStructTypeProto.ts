// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTypeProto as _zetasql_ASTTypeProto, ASTTypeProto__Output as _zetasql_ASTTypeProto__Output } from '../zetasql/ASTTypeProto';
import type { ASTStructFieldProto as _zetasql_ASTStructFieldProto, ASTStructFieldProto__Output as _zetasql_ASTStructFieldProto__Output } from '../zetasql/ASTStructFieldProto';
import type { ASTTypeParameterListProto as _zetasql_ASTTypeParameterListProto, ASTTypeParameterListProto__Output as _zetasql_ASTTypeParameterListProto__Output } from '../zetasql/ASTTypeParameterListProto';
import type { ASTCollateProto as _zetasql_ASTCollateProto, ASTCollateProto__Output as _zetasql_ASTCollateProto__Output } from '../zetasql/ASTCollateProto';

export interface ASTStructTypeProto {
  'parent'?: (_zetasql_ASTTypeProto | null);
  'structFields'?: (_zetasql_ASTStructFieldProto)[];
  'typeParameters'?: (_zetasql_ASTTypeParameterListProto | null);
  'collate'?: (_zetasql_ASTCollateProto | null);
}

export interface ASTStructTypeProto__Output {
  'parent': (_zetasql_ASTTypeProto__Output | null);
  'structFields': (_zetasql_ASTStructFieldProto__Output)[];
  'typeParameters': (_zetasql_ASTTypeParameterListProto__Output | null);
  'collate': (_zetasql_ASTCollateProto__Output | null);
}
