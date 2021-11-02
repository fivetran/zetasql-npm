// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateStatementProto as _zetasql_ResolvedCreateStatementProto, ResolvedCreateStatementProto__Output as _zetasql_ResolvedCreateStatementProto__Output } from '../zetasql/ResolvedCreateStatementProto';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';
import type { ResolvedColumnDefinitionProto as _zetasql_ResolvedColumnDefinitionProto, ResolvedColumnDefinitionProto__Output as _zetasql_ResolvedColumnDefinitionProto__Output } from '../zetasql/ResolvedColumnDefinitionProto';
import type { ResolvedPrimaryKeyProto as _zetasql_ResolvedPrimaryKeyProto, ResolvedPrimaryKeyProto__Output as _zetasql_ResolvedPrimaryKeyProto__Output } from '../zetasql/ResolvedPrimaryKeyProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedForeignKeyProto as _zetasql_ResolvedForeignKeyProto, ResolvedForeignKeyProto__Output as _zetasql_ResolvedForeignKeyProto__Output } from '../zetasql/ResolvedForeignKeyProto';
import type { ResolvedCheckConstraintProto as _zetasql_ResolvedCheckConstraintProto, ResolvedCheckConstraintProto__Output as _zetasql_ResolvedCheckConstraintProto__Output } from '../zetasql/ResolvedCheckConstraintProto';
import type { TableRefProto as _zetasql_TableRefProto, TableRefProto__Output as _zetasql_TableRefProto__Output } from '../zetasql/TableRefProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedCreateTableStmtBaseProto {
  'parent'?: (_zetasql_ResolvedCreateStatementProto | null);
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'columnDefinitionList'?: (_zetasql_ResolvedColumnDefinitionProto)[];
  'primaryKey'?: (_zetasql_ResolvedPrimaryKeyProto | null);
  'pseudoColumnList'?: (_zetasql_ResolvedColumnProto)[];
  'isValueTable'?: (boolean);
  'foreignKeyList'?: (_zetasql_ResolvedForeignKeyProto)[];
  'checkConstraintList'?: (_zetasql_ResolvedCheckConstraintProto)[];
  'likeTable'?: (_zetasql_TableRefProto | null);
  'collationName'?: (_zetasql_AnyResolvedExprProto | null);
}

export interface ResolvedCreateTableStmtBaseProto__Output {
  'parent': (_zetasql_ResolvedCreateStatementProto__Output | null);
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'columnDefinitionList': (_zetasql_ResolvedColumnDefinitionProto__Output)[];
  'primaryKey': (_zetasql_ResolvedPrimaryKeyProto__Output | null);
  'pseudoColumnList': (_zetasql_ResolvedColumnProto__Output)[];
  'isValueTable': (boolean);
  'foreignKeyList': (_zetasql_ResolvedForeignKeyProto__Output)[];
  'checkConstraintList': (_zetasql_ResolvedCheckConstraintProto__Output)[];
  'likeTable': (_zetasql_TableRefProto__Output | null);
  'collationName': (_zetasql_AnyResolvedExprProto__Output | null);
}
