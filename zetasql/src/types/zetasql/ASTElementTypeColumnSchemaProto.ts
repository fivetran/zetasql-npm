// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTColumnSchemaProto as _zetasql_ASTColumnSchemaProto, ASTColumnSchemaProto__Output as _zetasql_ASTColumnSchemaProto__Output } from '../zetasql/ASTColumnSchemaProto';
import type { AnyASTColumnSchemaProto as _zetasql_AnyASTColumnSchemaProto, AnyASTColumnSchemaProto__Output as _zetasql_AnyASTColumnSchemaProto__Output } from '../zetasql/AnyASTColumnSchemaProto';

export interface ASTElementTypeColumnSchemaProto {
  'parent'?: (_zetasql_ASTColumnSchemaProto | null);
  'elementSchema'?: (_zetasql_AnyASTColumnSchemaProto | null);
}

export interface ASTElementTypeColumnSchemaProto__Output {
  'parent': (_zetasql_ASTColumnSchemaProto__Output | null);
  'elementSchema': (_zetasql_AnyASTColumnSchemaProto__Output | null);
}
