// Original file: src/protos/zetasql/public/type_parameters.proto

import type { Long } from '@grpc/proto-loader';

export interface NumericTypeParametersProto {
  'precision'?: (number | string | Long);
  'isMaxPrecision'?: (boolean);
  'scale'?: (number | string | Long);
  'roundHalfEven'?: (boolean);
  'precisionParam'?: "precision"|"isMaxPrecision";
}

export interface NumericTypeParametersProto__Output {
  'precision'?: (Long);
  'isMaxPrecision'?: (boolean);
  'scale': (Long);
  'roundHalfEven': (boolean);
  'precisionParam': "precision"|"isMaxPrecision";
}
