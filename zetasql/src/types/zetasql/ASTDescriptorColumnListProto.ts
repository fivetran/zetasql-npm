// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTDescriptorColumnProto as _zetasql_ASTDescriptorColumnProto, ASTDescriptorColumnProto__Output as _zetasql_ASTDescriptorColumnProto__Output } from '../zetasql/ASTDescriptorColumnProto';

export interface ASTDescriptorColumnListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'descriptorColumnList'?: (_zetasql_ASTDescriptorColumnProto)[];
}

export interface ASTDescriptorColumnListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'descriptorColumnList': (_zetasql_ASTDescriptorColumnProto__Output)[];
}
