// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTParameterExprBaseProto as _zetasql_ASTParameterExprBaseProto, ASTParameterExprBaseProto__Output as _zetasql_ASTParameterExprBaseProto__Output } from '../zetasql/ASTParameterExprBaseProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { Long } from '@grpc/proto-loader';

export interface ASTParameterExprProto {
  'parent'?: (_zetasql_ASTParameterExprBaseProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'position'?: (number | string | Long);
}

export interface ASTParameterExprProto__Output {
  'parent': (_zetasql_ASTParameterExprBaseProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'position': (Long);
}
