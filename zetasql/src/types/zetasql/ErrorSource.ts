// Original file: src/zetasql/protos/zetasql/public/error_location.proto

import type { ErrorLocation as _zetasql_ErrorLocation, ErrorLocation__Output as _zetasql_ErrorLocation__Output } from '../zetasql/ErrorLocation';

export interface ErrorSource {
  'errorMessage'?: (string);
  'errorMessageCaretString'?: (string);
  'errorLocation'?: (_zetasql_ErrorLocation | null);
}

export interface ErrorSource__Output {
  'errorMessage': (string);
  'errorMessageCaretString': (string);
  'errorLocation': (_zetasql_ErrorLocation__Output | null);
}
