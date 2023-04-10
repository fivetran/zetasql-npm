// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTColumnDefinitionProto as _zetasql_ASTColumnDefinitionProto, ASTColumnDefinitionProto__Output as _zetasql_ASTColumnDefinitionProto__Output } from '../zetasql/ASTColumnDefinitionProto';

export interface ASTSpannerAlterColumnActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'columnDefinition'?: (_zetasql_ASTColumnDefinitionProto | null);
}

export interface ASTSpannerAlterColumnActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'columnDefinition': (_zetasql_ASTColumnDefinitionProto__Output | null);
}
