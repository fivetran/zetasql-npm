// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';

export interface ASTSetOptionsActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
}

export interface ASTSetOptionsActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
}
