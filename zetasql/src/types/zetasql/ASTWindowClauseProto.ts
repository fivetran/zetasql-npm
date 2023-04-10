// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTWindowDefinitionProto as _zetasql_ASTWindowDefinitionProto, ASTWindowDefinitionProto__Output as _zetasql_ASTWindowDefinitionProto__Output } from '../zetasql/ASTWindowDefinitionProto';

export interface ASTWindowClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'windows'?: (_zetasql_ASTWindowDefinitionProto)[];
}

export interface ASTWindowClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'windows': (_zetasql_ASTWindowDefinitionProto__Output)[];
}
