// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { _zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind, _zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind__Output } from '../zetasql/ASTTemplatedParameterTypeEnums';

export interface ASTTemplatedParameterTypeProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'kind'?: (_zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind);
}

export interface ASTTemplatedParameterTypeProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'kind': (_zetasql_ASTTemplatedParameterTypeEnums_TemplatedTypeKind__Output);
}
