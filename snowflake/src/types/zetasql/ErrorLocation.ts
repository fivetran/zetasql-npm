// Original file: src/snowflake/protos/zetasql/public/error_location.proto

import type { ErrorSource as _zetasql_ErrorSource, ErrorSource__Output as _zetasql_ErrorSource__Output } from '../zetasql/ErrorSource';

export interface ErrorLocation {
  'line'?: (number);
  'column'?: (number);
  'filename'?: (string);
  'errorSource'?: (_zetasql_ErrorSource)[];
}

export interface ErrorLocation__Output {
  'line': (number);
  'column': (number);
  'filename': (string);
  'errorSource': (_zetasql_ErrorSource__Output)[];
}
