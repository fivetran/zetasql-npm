// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTColumnSchemaProto as _zetasql_AnyASTColumnSchemaProto, AnyASTColumnSchemaProto__Output as _zetasql_AnyASTColumnSchemaProto__Output } from '../zetasql/AnyASTColumnSchemaProto';
import type { ASTCollateProto as _zetasql_ASTCollateProto, ASTCollateProto__Output as _zetasql_ASTCollateProto__Output } from '../zetasql/ASTCollateProto';

export interface ASTAlterColumnTypeActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'columnName'?: (_zetasql_ASTIdentifierProto | null);
  'schema'?: (_zetasql_AnyASTColumnSchemaProto | null);
  'collate'?: (_zetasql_ASTCollateProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTAlterColumnTypeActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'columnName': (_zetasql_ASTIdentifierProto__Output | null);
  'schema': (_zetasql_AnyASTColumnSchemaProto__Output | null);
  'collate': (_zetasql_ASTCollateProto__Output | null);
  'isIfExists': (boolean);
}
