// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';

export interface ASTWithReportModifierProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
}

export interface ASTWithReportModifierProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
}
