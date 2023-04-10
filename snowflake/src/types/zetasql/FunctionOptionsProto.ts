// Original file: src/snowflake/protos/zetasql/proto/function.proto

import type { _zetasql_FunctionEnums_WindowOrderSupport, _zetasql_FunctionEnums_WindowOrderSupport__Output } from '../zetasql/FunctionEnums';
import type { _zetasql_FunctionEnums_Volatility, _zetasql_FunctionEnums_Volatility__Output } from '../zetasql/FunctionEnums';
import type { LanguageFeature as _zetasql_LanguageFeature, LanguageFeature__Output as _zetasql_LanguageFeature__Output } from '../zetasql/LanguageFeature';

export interface FunctionOptionsProto {
  'supportsOverClause'?: (boolean);
  'windowOrderingSupport'?: (_zetasql_FunctionEnums_WindowOrderSupport);
  'supportsWindowFraming'?: (boolean);
  'argumentsAreCoercible'?: (boolean);
  'isDeprecated'?: (boolean);
  'aliasName'?: (string);
  'sqlName'?: (string);
  'allowExternalUsage'?: (boolean);
  'volatility'?: (_zetasql_FunctionEnums_Volatility);
  'supportsOrderBy'?: (boolean);
  'requiredLanguageFeature'?: (_zetasql_LanguageFeature)[];
  'supportsLimit'?: (boolean);
  'supportsNullHandlingModifier'?: (boolean);
  'supportsSafeErrorMode'?: (boolean);
  'supportsHavingModifier'?: (boolean);
  'supportsClampedBetweenModifier'?: (boolean);
  'usesUpperCaseSqlName'?: (boolean);
}

export interface FunctionOptionsProto__Output {
  'supportsOverClause': (boolean);
  'windowOrderingSupport': (_zetasql_FunctionEnums_WindowOrderSupport__Output);
  'supportsWindowFraming': (boolean);
  'argumentsAreCoercible': (boolean);
  'isDeprecated': (boolean);
  'aliasName': (string);
  'sqlName': (string);
  'allowExternalUsage': (boolean);
  'volatility': (_zetasql_FunctionEnums_Volatility__Output);
  'supportsOrderBy': (boolean);
  'requiredLanguageFeature': (_zetasql_LanguageFeature__Output)[];
  'supportsLimit': (boolean);
  'supportsNullHandlingModifier': (boolean);
  'supportsSafeErrorMode': (boolean);
  'supportsHavingModifier': (boolean);
  'supportsClampedBetweenModifier': (boolean);
  'usesUpperCaseSqlName': (boolean);
}
