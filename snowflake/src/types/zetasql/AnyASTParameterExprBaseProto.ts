// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTParameterExprProto as _zetasql_ASTParameterExprProto, ASTParameterExprProto__Output as _zetasql_ASTParameterExprProto__Output } from '../zetasql/ASTParameterExprProto';
import type { ASTSystemVariableExprProto as _zetasql_ASTSystemVariableExprProto, ASTSystemVariableExprProto__Output as _zetasql_ASTSystemVariableExprProto__Output } from '../zetasql/ASTSystemVariableExprProto';

export interface AnyASTParameterExprBaseProto {
  'astParameterExprNode'?: (_zetasql_ASTParameterExprProto | null);
  'astSystemVariableExprNode'?: (_zetasql_ASTSystemVariableExprProto | null);
  'node'?: "astParameterExprNode"|"astSystemVariableExprNode";
}

export interface AnyASTParameterExprBaseProto__Output {
  'astParameterExprNode'?: (_zetasql_ASTParameterExprProto__Output | null);
  'astSystemVariableExprNode'?: (_zetasql_ASTSystemVariableExprProto__Output | null);
  'node': "astParameterExprNode"|"astSystemVariableExprNode";
}
