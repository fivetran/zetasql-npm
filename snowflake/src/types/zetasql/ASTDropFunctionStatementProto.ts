// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTDdlStatementProto as _zetasql_ASTDdlStatementProto, ASTDdlStatementProto__Output as _zetasql_ASTDdlStatementProto__Output } from '../zetasql/ASTDdlStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTFunctionParametersProto as _zetasql_ASTFunctionParametersProto, ASTFunctionParametersProto__Output as _zetasql_ASTFunctionParametersProto__Output } from '../zetasql/ASTFunctionParametersProto';

export interface ASTDropFunctionStatementProto {
  'parent'?: (_zetasql_ASTDdlStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'parameters'?: (_zetasql_ASTFunctionParametersProto | null);
  'isIfExists'?: (boolean);
}

export interface ASTDropFunctionStatementProto__Output {
  'parent': (_zetasql_ASTDdlStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'parameters': (_zetasql_ASTFunctionParametersProto__Output | null);
  'isIfExists': (boolean);
}
