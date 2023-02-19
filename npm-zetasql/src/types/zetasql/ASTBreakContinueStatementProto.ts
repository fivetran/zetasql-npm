// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { ASTLabelProto as _zetasql_ASTLabelProto, ASTLabelProto__Output as _zetasql_ASTLabelProto__Output } from '../zetasql/ASTLabelProto';

export interface ASTBreakContinueStatementProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'label'?: (_zetasql_ASTLabelProto | null);
}

export interface ASTBreakContinueStatementProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'label': (_zetasql_ASTLabelProto__Output | null);
}
