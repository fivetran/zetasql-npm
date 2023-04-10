// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { ASTIntoAliasProto as _zetasql_ASTIntoAliasProto, ASTIntoAliasProto__Output as _zetasql_ASTIntoAliasProto__Output } from '../zetasql/ASTIntoAliasProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { _zetasql_ASTImportStatementEnums_ImportKind, _zetasql_ASTImportStatementEnums_ImportKind__Output } from '../zetasql/ASTImportStatementEnums';

export interface ASTImportStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'stringValue'?: (_zetasql_ASTStringLiteralProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
  'intoAlias'?: (_zetasql_ASTIntoAliasProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'importKind'?: (_zetasql_ASTImportStatementEnums_ImportKind);
}

export interface ASTImportStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'stringValue': (_zetasql_ASTStringLiteralProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
  'intoAlias': (_zetasql_ASTIntoAliasProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'importKind': (_zetasql_ASTImportStatementEnums_ImportKind__Output);
}
