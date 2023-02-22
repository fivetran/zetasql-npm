// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTFunctionParametersProto as _zetasql_ASTFunctionParametersProto, ASTFunctionParametersProto__Output as _zetasql_ASTFunctionParametersProto__Output } from '../zetasql/ASTFunctionParametersProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTScriptProto as _zetasql_ASTScriptProto, ASTScriptProto__Output as _zetasql_ASTScriptProto__Output } from '../zetasql/ASTScriptProto';
import type { ASTWithConnectionClauseProto as _zetasql_ASTWithConnectionClauseProto, ASTWithConnectionClauseProto__Output as _zetasql_ASTWithConnectionClauseProto__Output } from '../zetasql/ASTWithConnectionClauseProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';

export interface ASTCreateProcedureStatementProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'parameters'?: (_zetasql_ASTFunctionParametersProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'body'?: (_zetasql_ASTScriptProto | null);
  'withConnectionClause'?: (_zetasql_ASTWithConnectionClauseProto | null);
  'language'?: (_zetasql_ASTIdentifierProto | null);
  'code'?: (_zetasql_ASTStringLiteralProto | null);
}

export interface ASTCreateProcedureStatementProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'parameters': (_zetasql_ASTFunctionParametersProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'body': (_zetasql_ASTScriptProto__Output | null);
  'withConnectionClause': (_zetasql_ASTWithConnectionClauseProto__Output | null);
  'language': (_zetasql_ASTIdentifierProto__Output | null);
  'code': (_zetasql_ASTStringLiteralProto__Output | null);
}
