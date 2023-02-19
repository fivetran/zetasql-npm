// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTTypeParameterListProto as _zetasql_ASTTypeParameterListProto, ASTTypeParameterListProto__Output as _zetasql_ASTTypeParameterListProto__Output } from '../zetasql/ASTTypeParameterListProto';
import type { ASTGeneratedColumnInfoProto as _zetasql_ASTGeneratedColumnInfoProto, ASTGeneratedColumnInfoProto__Output as _zetasql_ASTGeneratedColumnInfoProto__Output } from '../zetasql/ASTGeneratedColumnInfoProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTCollateProto as _zetasql_ASTCollateProto, ASTCollateProto__Output as _zetasql_ASTCollateProto__Output } from '../zetasql/ASTCollateProto';
import type { ASTColumnAttributeListProto as _zetasql_ASTColumnAttributeListProto, ASTColumnAttributeListProto__Output as _zetasql_ASTColumnAttributeListProto__Output } from '../zetasql/ASTColumnAttributeListProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';

export interface ASTColumnSchemaProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'typeParameters'?: (_zetasql_ASTTypeParameterListProto | null);
  'generatedColumnInfo'?: (_zetasql_ASTGeneratedColumnInfoProto | null);
  'defaultExpression'?: (_zetasql_AnyASTExpressionProto | null);
  'collate'?: (_zetasql_ASTCollateProto | null);
  'attributes'?: (_zetasql_ASTColumnAttributeListProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
}

export interface ASTColumnSchemaProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'typeParameters': (_zetasql_ASTTypeParameterListProto__Output | null);
  'generatedColumnInfo': (_zetasql_ASTGeneratedColumnInfoProto__Output | null);
  'defaultExpression': (_zetasql_AnyASTExpressionProto__Output | null);
  'collate': (_zetasql_ASTCollateProto__Output | null);
  'attributes': (_zetasql_ASTColumnAttributeListProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
}
