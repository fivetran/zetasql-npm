// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTWithConnectionClauseProto as _zetasql_ASTWithConnectionClauseProto, ASTWithConnectionClauseProto__Output as _zetasql_ASTWithConnectionClauseProto__Output } from '../zetasql/ASTWithConnectionClauseProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';

export interface ASTExportDataStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'withConnectionClause'?: (_zetasql_ASTWithConnectionClauseProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
}

export interface ASTExportDataStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'withConnectionClause': (_zetasql_ASTWithConnectionClauseProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
}
