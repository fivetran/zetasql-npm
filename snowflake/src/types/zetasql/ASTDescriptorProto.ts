// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTDescriptorColumnListProto as _zetasql_ASTDescriptorColumnListProto, ASTDescriptorColumnListProto__Output as _zetasql_ASTDescriptorColumnListProto__Output } from '../zetasql/ASTDescriptorColumnListProto';

export interface ASTDescriptorProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'columns'?: (_zetasql_ASTDescriptorColumnListProto | null);
}

export interface ASTDescriptorProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'columns': (_zetasql_ASTDescriptorColumnListProto__Output | null);
}
