// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedLiteralProto as _zetasql_ResolvedLiteralProto, ResolvedLiteralProto__Output as _zetasql_ResolvedLiteralProto__Output } from '../zetasql/ResolvedLiteralProto';
import type { ResolvedParameterProto as _zetasql_ResolvedParameterProto, ResolvedParameterProto__Output as _zetasql_ResolvedParameterProto__Output } from '../zetasql/ResolvedParameterProto';
import type { ResolvedExpressionColumnProto as _zetasql_ResolvedExpressionColumnProto, ResolvedExpressionColumnProto__Output as _zetasql_ResolvedExpressionColumnProto__Output } from '../zetasql/ResolvedExpressionColumnProto';
import type { ResolvedColumnRefProto as _zetasql_ResolvedColumnRefProto, ResolvedColumnRefProto__Output as _zetasql_ResolvedColumnRefProto__Output } from '../zetasql/ResolvedColumnRefProto';
import type { AnyResolvedFunctionCallBaseProto as _zetasql_AnyResolvedFunctionCallBaseProto, AnyResolvedFunctionCallBaseProto__Output as _zetasql_AnyResolvedFunctionCallBaseProto__Output } from '../zetasql/AnyResolvedFunctionCallBaseProto';
import type { ResolvedCastProto as _zetasql_ResolvedCastProto, ResolvedCastProto__Output as _zetasql_ResolvedCastProto__Output } from '../zetasql/ResolvedCastProto';
import type { ResolvedMakeStructProto as _zetasql_ResolvedMakeStructProto, ResolvedMakeStructProto__Output as _zetasql_ResolvedMakeStructProto__Output } from '../zetasql/ResolvedMakeStructProto';
import type { ResolvedMakeProtoProto as _zetasql_ResolvedMakeProtoProto, ResolvedMakeProtoProto__Output as _zetasql_ResolvedMakeProtoProto__Output } from '../zetasql/ResolvedMakeProtoProto';
import type { ResolvedGetStructFieldProto as _zetasql_ResolvedGetStructFieldProto, ResolvedGetStructFieldProto__Output as _zetasql_ResolvedGetStructFieldProto__Output } from '../zetasql/ResolvedGetStructFieldProto';
import type { ResolvedGetProtoFieldProto as _zetasql_ResolvedGetProtoFieldProto, ResolvedGetProtoFieldProto__Output as _zetasql_ResolvedGetProtoFieldProto__Output } from '../zetasql/ResolvedGetProtoFieldProto';
import type { ResolvedSubqueryExprProto as _zetasql_ResolvedSubqueryExprProto, ResolvedSubqueryExprProto__Output as _zetasql_ResolvedSubqueryExprProto__Output } from '../zetasql/ResolvedSubqueryExprProto';
import type { ResolvedDMLDefaultProto as _zetasql_ResolvedDMLDefaultProto, ResolvedDMLDefaultProto__Output as _zetasql_ResolvedDMLDefaultProto__Output } from '../zetasql/ResolvedDMLDefaultProto';
import type { ResolvedArgumentRefProto as _zetasql_ResolvedArgumentRefProto, ResolvedArgumentRefProto__Output as _zetasql_ResolvedArgumentRefProto__Output } from '../zetasql/ResolvedArgumentRefProto';
import type { ResolvedConstantProto as _zetasql_ResolvedConstantProto, ResolvedConstantProto__Output as _zetasql_ResolvedConstantProto__Output } from '../zetasql/ResolvedConstantProto';
import type { ResolvedReplaceFieldProto as _zetasql_ResolvedReplaceFieldProto, ResolvedReplaceFieldProto__Output as _zetasql_ResolvedReplaceFieldProto__Output } from '../zetasql/ResolvedReplaceFieldProto';
import type { ResolvedSystemVariableProto as _zetasql_ResolvedSystemVariableProto, ResolvedSystemVariableProto__Output as _zetasql_ResolvedSystemVariableProto__Output } from '../zetasql/ResolvedSystemVariableProto';
import type { ResolvedFlattenProto as _zetasql_ResolvedFlattenProto, ResolvedFlattenProto__Output as _zetasql_ResolvedFlattenProto__Output } from '../zetasql/ResolvedFlattenProto';
import type { ResolvedFlattenedArgProto as _zetasql_ResolvedFlattenedArgProto, ResolvedFlattenedArgProto__Output as _zetasql_ResolvedFlattenedArgProto__Output } from '../zetasql/ResolvedFlattenedArgProto';
import type { ResolvedGetJsonFieldProto as _zetasql_ResolvedGetJsonFieldProto, ResolvedGetJsonFieldProto__Output as _zetasql_ResolvedGetJsonFieldProto__Output } from '../zetasql/ResolvedGetJsonFieldProto';
import type { ResolvedFilterFieldProto as _zetasql_ResolvedFilterFieldProto, ResolvedFilterFieldProto__Output as _zetasql_ResolvedFilterFieldProto__Output } from '../zetasql/ResolvedFilterFieldProto';
import type { ResolvedWithExprProto as _zetasql_ResolvedWithExprProto, ResolvedWithExprProto__Output as _zetasql_ResolvedWithExprProto__Output } from '../zetasql/ResolvedWithExprProto';

export interface AnyResolvedExprProto {
  'resolvedLiteralNode'?: (_zetasql_ResolvedLiteralProto | null);
  'resolvedParameterNode'?: (_zetasql_ResolvedParameterProto | null);
  'resolvedExpressionColumnNode'?: (_zetasql_ResolvedExpressionColumnProto | null);
  'resolvedColumnRefNode'?: (_zetasql_ResolvedColumnRefProto | null);
  'resolvedFunctionCallBaseNode'?: (_zetasql_AnyResolvedFunctionCallBaseProto | null);
  'resolvedCastNode'?: (_zetasql_ResolvedCastProto | null);
  'resolvedMakeStructNode'?: (_zetasql_ResolvedMakeStructProto | null);
  'resolvedMakeProtoNode'?: (_zetasql_ResolvedMakeProtoProto | null);
  'resolvedGetStructFieldNode'?: (_zetasql_ResolvedGetStructFieldProto | null);
  'resolvedGetProtoFieldNode'?: (_zetasql_ResolvedGetProtoFieldProto | null);
  'resolvedSubqueryExprNode'?: (_zetasql_ResolvedSubqueryExprProto | null);
  'resolvedDmldefaultNode'?: (_zetasql_ResolvedDMLDefaultProto | null);
  'resolvedArgumentRefNode'?: (_zetasql_ResolvedArgumentRefProto | null);
  'resolvedConstantNode'?: (_zetasql_ResolvedConstantProto | null);
  'resolvedReplaceFieldNode'?: (_zetasql_ResolvedReplaceFieldProto | null);
  'resolvedSystemVariableNode'?: (_zetasql_ResolvedSystemVariableProto | null);
  'resolvedFlattenNode'?: (_zetasql_ResolvedFlattenProto | null);
  'resolvedFlattenedArgNode'?: (_zetasql_ResolvedFlattenedArgProto | null);
  'resolvedGetJsonFieldNode'?: (_zetasql_ResolvedGetJsonFieldProto | null);
  'resolvedFilterFieldNode'?: (_zetasql_ResolvedFilterFieldProto | null);
  'resolvedWithExprNode'?: (_zetasql_ResolvedWithExprProto | null);
  'node'?: "resolvedLiteralNode"|"resolvedParameterNode"|"resolvedExpressionColumnNode"|"resolvedColumnRefNode"|"resolvedFunctionCallBaseNode"|"resolvedCastNode"|"resolvedMakeStructNode"|"resolvedMakeProtoNode"|"resolvedGetStructFieldNode"|"resolvedGetProtoFieldNode"|"resolvedSubqueryExprNode"|"resolvedDmldefaultNode"|"resolvedArgumentRefNode"|"resolvedConstantNode"|"resolvedReplaceFieldNode"|"resolvedSystemVariableNode"|"resolvedFlattenNode"|"resolvedFlattenedArgNode"|"resolvedGetJsonFieldNode"|"resolvedFilterFieldNode"|"resolvedWithExprNode";
}

export interface AnyResolvedExprProto__Output {
  'resolvedLiteralNode'?: (_zetasql_ResolvedLiteralProto__Output | null);
  'resolvedParameterNode'?: (_zetasql_ResolvedParameterProto__Output | null);
  'resolvedExpressionColumnNode'?: (_zetasql_ResolvedExpressionColumnProto__Output | null);
  'resolvedColumnRefNode'?: (_zetasql_ResolvedColumnRefProto__Output | null);
  'resolvedFunctionCallBaseNode'?: (_zetasql_AnyResolvedFunctionCallBaseProto__Output | null);
  'resolvedCastNode'?: (_zetasql_ResolvedCastProto__Output | null);
  'resolvedMakeStructNode'?: (_zetasql_ResolvedMakeStructProto__Output | null);
  'resolvedMakeProtoNode'?: (_zetasql_ResolvedMakeProtoProto__Output | null);
  'resolvedGetStructFieldNode'?: (_zetasql_ResolvedGetStructFieldProto__Output | null);
  'resolvedGetProtoFieldNode'?: (_zetasql_ResolvedGetProtoFieldProto__Output | null);
  'resolvedSubqueryExprNode'?: (_zetasql_ResolvedSubqueryExprProto__Output | null);
  'resolvedDmldefaultNode'?: (_zetasql_ResolvedDMLDefaultProto__Output | null);
  'resolvedArgumentRefNode'?: (_zetasql_ResolvedArgumentRefProto__Output | null);
  'resolvedConstantNode'?: (_zetasql_ResolvedConstantProto__Output | null);
  'resolvedReplaceFieldNode'?: (_zetasql_ResolvedReplaceFieldProto__Output | null);
  'resolvedSystemVariableNode'?: (_zetasql_ResolvedSystemVariableProto__Output | null);
  'resolvedFlattenNode'?: (_zetasql_ResolvedFlattenProto__Output | null);
  'resolvedFlattenedArgNode'?: (_zetasql_ResolvedFlattenedArgProto__Output | null);
  'resolvedGetJsonFieldNode'?: (_zetasql_ResolvedGetJsonFieldProto__Output | null);
  'resolvedFilterFieldNode'?: (_zetasql_ResolvedFilterFieldProto__Output | null);
  'resolvedWithExprNode'?: (_zetasql_ResolvedWithExprProto__Output | null);
  'node': "resolvedLiteralNode"|"resolvedParameterNode"|"resolvedExpressionColumnNode"|"resolvedColumnRefNode"|"resolvedFunctionCallBaseNode"|"resolvedCastNode"|"resolvedMakeStructNode"|"resolvedMakeProtoNode"|"resolvedGetStructFieldNode"|"resolvedGetProtoFieldNode"|"resolvedSubqueryExprNode"|"resolvedDmldefaultNode"|"resolvedArgumentRefNode"|"resolvedConstantNode"|"resolvedReplaceFieldNode"|"resolvedSystemVariableNode"|"resolvedFlattenNode"|"resolvedFlattenedArgNode"|"resolvedGetJsonFieldNode"|"resolvedFilterFieldNode"|"resolvedWithExprNode";
}
