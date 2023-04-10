// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTTableAndColumnInfoListProto as _zetasql_ASTTableAndColumnInfoListProto, ASTTableAndColumnInfoListProto__Output as _zetasql_ASTTableAndColumnInfoListProto__Output } from '../zetasql/ASTTableAndColumnInfoListProto';

export interface ASTAnalyzeStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'tableAndColumnInfoList'?: (_zetasql_ASTTableAndColumnInfoListProto | null);
}

export interface ASTAnalyzeStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'tableAndColumnInfoList': (_zetasql_ASTTableAndColumnInfoListProto__Output | null);
}
