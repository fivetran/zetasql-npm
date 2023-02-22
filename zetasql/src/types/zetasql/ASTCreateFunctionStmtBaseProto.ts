// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTFunctionDeclarationProto as _zetasql_ASTFunctionDeclarationProto, ASTFunctionDeclarationProto__Output as _zetasql_ASTFunctionDeclarationProto__Output } from '../zetasql/ASTFunctionDeclarationProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { _zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel } from '../zetasql/ASTCreateFunctionStmtBaseEnums';
import type { _zetasql_ASTCreateStatementEnums_SqlSecurity } from '../zetasql/ASTCreateStatementEnums';

export interface ASTCreateFunctionStmtBaseProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'functionDeclaration'?: (_zetasql_ASTFunctionDeclarationProto | null);
  'language'?: (_zetasql_ASTIdentifierProto | null);
  'code'?: (_zetasql_ASTStringLiteralProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'determinismLevel'?: (_zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel | keyof typeof _zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel);
  'sqlSecurity'?: (_zetasql_ASTCreateStatementEnums_SqlSecurity | keyof typeof _zetasql_ASTCreateStatementEnums_SqlSecurity);
}

export interface ASTCreateFunctionStmtBaseProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'functionDeclaration': (_zetasql_ASTFunctionDeclarationProto__Output | null);
  'language': (_zetasql_ASTIdentifierProto__Output | null);
  'code': (_zetasql_ASTStringLiteralProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'determinismLevel': (_zetasql_ASTCreateFunctionStmtBaseEnums_DeterminismLevel);
  'sqlSecurity': (_zetasql_ASTCreateStatementEnums_SqlSecurity);
}
