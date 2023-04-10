// Original file: src/zetasql-snowflake/protos/zetasql/public/type_parameters.proto

import type { Long } from '@grpc/proto-loader';

export interface StringTypeParametersProto {
  'maxLength'?: (number | string | Long);
  'isMaxLength'?: (boolean);
  'param'?: "maxLength"|"isMaxLength";
}

export interface StringTypeParametersProto__Output {
  'maxLength'?: (Long);
  'isMaxLength'?: (boolean);
  'param': "maxLength"|"isMaxLength";
}
