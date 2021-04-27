// Original file: protos/zetasql/proto/function.proto

import type { _zetasql_FunctionEnums_WindowOrderSupport } from '../zetasql/FunctionEnums';
import type { _zetasql_FunctionEnums_Volatility } from '../zetasql/FunctionEnums';
import type { LanguageFeature as _zetasql_LanguageFeature } from '../zetasql/LanguageFeature';

export interface FunctionOptionsProto {
  'supportsOverClause'?: (boolean);
  'windowOrderingSupport'?: (_zetasql_FunctionEnums_WindowOrderSupport | keyof typeof _zetasql_FunctionEnums_WindowOrderSupport);
  'supportsWindowFraming'?: (boolean);
  'argumentsAreCoercible'?: (boolean);
  'isDeprecated'?: (boolean);
  'aliasName'?: (string);
  'sqlName'?: (string);
  'allowExternalUsage'?: (boolean);
  'volatility'?: (_zetasql_FunctionEnums_Volatility | keyof typeof _zetasql_FunctionEnums_Volatility);
  'supportsOrderBy'?: (boolean);
  'requiredLanguageFeature'?: (_zetasql_LanguageFeature | keyof typeof _zetasql_LanguageFeature)[];
  'supportsLimit'?: (boolean);
  'supportsNullHandlingModifier'?: (boolean);
  'supportsSafeErrorMode'?: (boolean);
  'supportsHavingModifier'?: (boolean);
  'supportsClampedBetweenModifier'?: (boolean);
  'usesUpperCaseSqlName'?: (boolean);
}

export interface FunctionOptionsProto__Output {
  'supportsOverClause': (boolean);
  'windowOrderingSupport': (keyof typeof _zetasql_FunctionEnums_WindowOrderSupport);
  'supportsWindowFraming': (boolean);
  'argumentsAreCoercible': (boolean);
  'isDeprecated': (boolean);
  'aliasName': (string);
  'sqlName': (string);
  'allowExternalUsage': (boolean);
  'volatility': (keyof typeof _zetasql_FunctionEnums_Volatility);
  'supportsOrderBy': (boolean);
  'requiredLanguageFeature': (keyof typeof _zetasql_LanguageFeature)[];
  'supportsLimit': (boolean);
  'supportsNullHandlingModifier': (boolean);
  'supportsSafeErrorMode': (boolean);
  'supportsHavingModifier': (boolean);
  'supportsClampedBetweenModifier': (boolean);
  'usesUpperCaseSqlName': (boolean);
}
