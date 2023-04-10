// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { ASTLabelProto as _zetasql_ASTLabelProto, ASTLabelProto__Output as _zetasql_ASTLabelProto__Output } from '../zetasql/ASTLabelProto';
import type { ASTStatementListProto as _zetasql_ASTStatementListProto, ASTStatementListProto__Output as _zetasql_ASTStatementListProto__Output } from '../zetasql/ASTStatementListProto';

export interface ASTLoopStatementProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'label'?: (_zetasql_ASTLabelProto | null);
  'body'?: (_zetasql_ASTStatementListProto | null);
}

export interface ASTLoopStatementProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'label': (_zetasql_ASTLabelProto__Output | null);
  'body': (_zetasql_ASTStatementListProto__Output | null);
}
