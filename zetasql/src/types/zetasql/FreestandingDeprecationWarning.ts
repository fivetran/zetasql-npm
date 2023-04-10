// Original file: src/zetasql/protos/zetasql/public/deprecation_warning.proto

import type { ErrorLocation as _zetasql_ErrorLocation, ErrorLocation__Output as _zetasql_ErrorLocation__Output } from '../zetasql/ErrorLocation';
import type { DeprecationWarning as _zetasql_DeprecationWarning, DeprecationWarning__Output as _zetasql_DeprecationWarning__Output } from '../zetasql/DeprecationWarning';

export interface FreestandingDeprecationWarning {
  'message'?: (string);
  'caretString'?: (string);
  'errorLocation'?: (_zetasql_ErrorLocation | null);
  'deprecationWarning'?: (_zetasql_DeprecationWarning | null);
}

export interface FreestandingDeprecationWarning__Output {
  'message': (string);
  'caretString': (string);
  'errorLocation': (_zetasql_ErrorLocation__Output | null);
  'deprecationWarning': (_zetasql_DeprecationWarning__Output | null);
}
