// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTFunctionParametersProto as _zetasql_ASTFunctionParametersProto, ASTFunctionParametersProto__Output as _zetasql_ASTFunctionParametersProto__Output } from '../zetasql/ASTFunctionParametersProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTScriptProto as _zetasql_ASTScriptProto, ASTScriptProto__Output as _zetasql_ASTScriptProto__Output } from '../zetasql/ASTScriptProto';

export interface ASTCreateProcedureStatementProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'parameters'?: (_zetasql_ASTFunctionParametersProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'body'?: (_zetasql_ASTScriptProto | null);
}

export interface ASTCreateProcedureStatementProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'parameters': (_zetasql_ASTFunctionParametersProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'body': (_zetasql_ASTScriptProto__Output | null);
}
