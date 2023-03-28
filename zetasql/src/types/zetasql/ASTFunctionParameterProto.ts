// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTTypeProto as _zetasql_AnyASTTypeProto, AnyASTTypeProto__Output as _zetasql_AnyASTTypeProto__Output } from '../zetasql/AnyASTTypeProto';
import type { ASTTemplatedParameterTypeProto as _zetasql_ASTTemplatedParameterTypeProto, ASTTemplatedParameterTypeProto__Output as _zetasql_ASTTemplatedParameterTypeProto__Output } from '../zetasql/ASTTemplatedParameterTypeProto';
import type { ASTTVFSchemaProto as _zetasql_ASTTVFSchemaProto, ASTTVFSchemaProto__Output as _zetasql_ASTTVFSchemaProto__Output } from '../zetasql/ASTTVFSchemaProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { _zetasql_ASTFunctionParameterEnums_ProcedureParameterMode, _zetasql_ASTFunctionParameterEnums_ProcedureParameterMode__Output } from '../zetasql/ASTFunctionParameterEnums';

export interface ASTFunctionParameterProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'type'?: (_zetasql_AnyASTTypeProto | null);
  'templatedParameterType'?: (_zetasql_ASTTemplatedParameterTypeProto | null);
  'tvfSchema'?: (_zetasql_ASTTVFSchemaProto | null);
  'alias'?: (_zetasql_ASTAliasProto | null);
  'defaultValue'?: (_zetasql_AnyASTExpressionProto | null);
  'procedureParameterMode'?: (_zetasql_ASTFunctionParameterEnums_ProcedureParameterMode);
  'isNotAggregate'?: (boolean);
}

export interface ASTFunctionParameterProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'type': (_zetasql_AnyASTTypeProto__Output | null);
  'templatedParameterType': (_zetasql_ASTTemplatedParameterTypeProto__Output | null);
  'tvfSchema': (_zetasql_ASTTVFSchemaProto__Output | null);
  'alias': (_zetasql_ASTAliasProto__Output | null);
  'defaultValue': (_zetasql_AnyASTExpressionProto__Output | null);
  'procedureParameterMode': (_zetasql_ASTFunctionParameterEnums_ProcedureParameterMode__Output);
  'isNotAggregate': (boolean);
}
