// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTFunctionParameterProto as _zetasql_ASTFunctionParameterProto, ASTFunctionParameterProto__Output as _zetasql_ASTFunctionParameterProto__Output } from '../zetasql/ASTFunctionParameterProto';

export interface ASTFunctionParametersProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'parameterEntries'?: (_zetasql_ASTFunctionParameterProto)[];
}

export interface ASTFunctionParametersProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'parameterEntries': (_zetasql_ASTFunctionParameterProto__Output)[];
}
