// Original file: src/zetasql/protos/zetasql/proto/options.proto

import type { LanguageOptionsProto as _zetasql_LanguageOptionsProto, LanguageOptionsProto__Output as _zetasql_LanguageOptionsProto__Output } from '../zetasql/LanguageOptionsProto';
import type { ErrorMessageMode as _zetasql_ErrorMessageMode, ErrorMessageMode__Output as _zetasql_ErrorMessageMode__Output } from '../zetasql/ErrorMessageMode';
import type { AllowedHintsAndOptionsProto as _zetasql_AllowedHintsAndOptionsProto, AllowedHintsAndOptionsProto__Output as _zetasql_AllowedHintsAndOptionsProto__Output } from '../zetasql/AllowedHintsAndOptionsProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { ParameterMode as _zetasql_ParameterMode, ParameterMode__Output as _zetasql_ParameterMode__Output } from '../zetasql/ParameterMode';
import type { StatementContext as _zetasql_StatementContext, StatementContext__Output as _zetasql_StatementContext__Output } from '../zetasql/StatementContext';
import type { ResolvedASTRewrite as _zetasql_ResolvedASTRewrite, ResolvedASTRewrite__Output as _zetasql_ResolvedASTRewrite__Output } from '../zetasql/ResolvedASTRewrite';
import type { ParseLocationRecordType as _zetasql_ParseLocationRecordType, ParseLocationRecordType__Output as _zetasql_ParseLocationRecordType__Output } from '../zetasql/ParseLocationRecordType';
import type { RewriteOptions as _zetasql_RewriteOptions, RewriteOptions__Output as _zetasql_RewriteOptions__Output } from '../zetasql/RewriteOptions';
import type { Long } from '@grpc/proto-loader';

export interface _zetasql_AnalyzerOptionsProto_QueryParameterProto {
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
}

export interface _zetasql_AnalyzerOptionsProto_QueryParameterProto__Output {
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
}

export interface _zetasql_AnalyzerOptionsProto_SystemVariableProto {
  'namePath'?: (string)[];
  'type'?: (_zetasql_TypeProto | null);
}

export interface _zetasql_AnalyzerOptionsProto_SystemVariableProto__Output {
  'namePath': (string)[];
  'type': (_zetasql_TypeProto__Output | null);
}

export interface AnalyzerOptionsProto {
  'languageOptions'?: (_zetasql_LanguageOptionsProto | null);
  'queryParameters'?: (_zetasql_AnalyzerOptionsProto_QueryParameterProto)[];
  'expressionColumns'?: (_zetasql_AnalyzerOptionsProto_QueryParameterProto)[];
  'inScopeExpressionColumn'?: (_zetasql_AnalyzerOptionsProto_QueryParameterProto | null);
  'errorMessageMode'?: (_zetasql_ErrorMessageMode);
  'defaultTimezone'?: (string);
  'pruneUnusedColumns'?: (boolean);
  'allowUndeclaredParameters'?: (boolean);
  'allowedHintsAndOptions'?: (_zetasql_AllowedHintsAndOptionsProto | null);
  'positionalQueryParameters'?: (_zetasql_TypeProto)[];
  'parameterMode'?: (_zetasql_ParameterMode);
  'statementContext'?: (_zetasql_StatementContext);
  'ddlPseudoColumns'?: (_zetasql_AnalyzerOptionsProto_QueryParameterProto)[];
  'preserveColumnAliases'?: (boolean);
  'systemVariables'?: (_zetasql_AnalyzerOptionsProto_SystemVariableProto)[];
  'targetColumnTypes'?: (_zetasql_TypeProto)[];
  'createNewColumnForEachProjectedOutput'?: (boolean);
  'enabledRewrites'?: (_zetasql_ResolvedASTRewrite)[];
  'parseLocationRecordType'?: (_zetasql_ParseLocationRecordType);
  'preserveUnnecessaryCast'?: (boolean);
  'defaultAnonFunctionReportFormat'?: (string);
  'defaultAnonKappaValue'?: (number | string | Long);
  'showFunctionSignatureMismatchDetails'?: (boolean);
  'rewriteOptions'?: (_zetasql_RewriteOptions | null);
}

export interface AnalyzerOptionsProto__Output {
  'languageOptions': (_zetasql_LanguageOptionsProto__Output | null);
  'queryParameters': (_zetasql_AnalyzerOptionsProto_QueryParameterProto__Output)[];
  'expressionColumns': (_zetasql_AnalyzerOptionsProto_QueryParameterProto__Output)[];
  'inScopeExpressionColumn': (_zetasql_AnalyzerOptionsProto_QueryParameterProto__Output | null);
  'errorMessageMode': (_zetasql_ErrorMessageMode__Output);
  'defaultTimezone': (string);
  'pruneUnusedColumns': (boolean);
  'allowUndeclaredParameters': (boolean);
  'allowedHintsAndOptions': (_zetasql_AllowedHintsAndOptionsProto__Output | null);
  'positionalQueryParameters': (_zetasql_TypeProto__Output)[];
  'parameterMode': (_zetasql_ParameterMode__Output);
  'statementContext': (_zetasql_StatementContext__Output);
  'ddlPseudoColumns': (_zetasql_AnalyzerOptionsProto_QueryParameterProto__Output)[];
  'preserveColumnAliases': (boolean);
  'systemVariables': (_zetasql_AnalyzerOptionsProto_SystemVariableProto__Output)[];
  'targetColumnTypes': (_zetasql_TypeProto__Output)[];
  'createNewColumnForEachProjectedOutput': (boolean);
  'enabledRewrites': (_zetasql_ResolvedASTRewrite__Output)[];
  'parseLocationRecordType': (_zetasql_ParseLocationRecordType__Output);
  'preserveUnnecessaryCast': (boolean);
  'defaultAnonFunctionReportFormat': (string);
  'defaultAnonKappaValue': (Long);
  'showFunctionSignatureMismatchDetails': (boolean);
  'rewriteOptions': (_zetasql_RewriteOptions__Output | null);
}
