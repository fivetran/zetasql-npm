// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { AnyASTGeneralizedPathExpressionProto as _zetasql_AnyASTGeneralizedPathExpressionProto, AnyASTGeneralizedPathExpressionProto__Output as _zetasql_AnyASTGeneralizedPathExpressionProto__Output } from '../zetasql/AnyASTGeneralizedPathExpressionProto';
import type { ASTColumnListProto as _zetasql_ASTColumnListProto, ASTColumnListProto__Output as _zetasql_ASTColumnListProto__Output } from '../zetasql/ASTColumnListProto';
import type { ASTInsertValuesRowListProto as _zetasql_ASTInsertValuesRowListProto, ASTInsertValuesRowListProto__Output as _zetasql_ASTInsertValuesRowListProto__Output } from '../zetasql/ASTInsertValuesRowListProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';
import type { ASTAssertRowsModifiedProto as _zetasql_ASTAssertRowsModifiedProto, ASTAssertRowsModifiedProto__Output as _zetasql_ASTAssertRowsModifiedProto__Output } from '../zetasql/ASTAssertRowsModifiedProto';
import type { ASTReturningClauseProto as _zetasql_ASTReturningClauseProto, ASTReturningClauseProto__Output as _zetasql_ASTReturningClauseProto__Output } from '../zetasql/ASTReturningClauseProto';
import type { _zetasql_ASTInsertStatementEnums_ParseProgress, _zetasql_ASTInsertStatementEnums_ParseProgress__Output } from '../zetasql/ASTInsertStatementEnums';
import type { _zetasql_ASTInsertStatementEnums_InsertMode, _zetasql_ASTInsertStatementEnums_InsertMode__Output } from '../zetasql/ASTInsertStatementEnums';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';

export interface ASTInsertStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'targetPath'?: (_zetasql_AnyASTGeneralizedPathExpressionProto | null);
  'columnList'?: (_zetasql_ASTColumnListProto | null);
  'rows'?: (_zetasql_ASTInsertValuesRowListProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
  'assertRowsModified'?: (_zetasql_ASTAssertRowsModifiedProto | null);
  'returning'?: (_zetasql_ASTReturningClauseProto | null);
  'parseProgress'?: (_zetasql_ASTInsertStatementEnums_ParseProgress);
  'insertMode'?: (_zetasql_ASTInsertStatementEnums_InsertMode);
  'hint'?: (_zetasql_ASTHintProto | null);
}

export interface ASTInsertStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'targetPath': (_zetasql_AnyASTGeneralizedPathExpressionProto__Output | null);
  'columnList': (_zetasql_ASTColumnListProto__Output | null);
  'rows': (_zetasql_ASTInsertValuesRowListProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
  'assertRowsModified': (_zetasql_ASTAssertRowsModifiedProto__Output | null);
  'returning': (_zetasql_ASTReturningClauseProto__Output | null);
  'parseProgress': (_zetasql_ASTInsertStatementEnums_ParseProgress__Output);
  'insertMode': (_zetasql_ASTInsertStatementEnums_InsertMode__Output);
  'hint': (_zetasql_ASTHintProto__Output | null);
}
