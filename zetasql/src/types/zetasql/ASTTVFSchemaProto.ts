// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTTVFSchemaColumnProto as _zetasql_ASTTVFSchemaColumnProto, ASTTVFSchemaColumnProto__Output as _zetasql_ASTTVFSchemaColumnProto__Output } from '../zetasql/ASTTVFSchemaColumnProto';

export interface ASTTVFSchemaProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'columns'?: (_zetasql_ASTTVFSchemaColumnProto)[];
}

export interface ASTTVFSchemaProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'columns': (_zetasql_ASTTVFSchemaColumnProto__Output)[];
}
