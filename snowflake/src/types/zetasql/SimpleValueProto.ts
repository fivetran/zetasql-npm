// Original file: src/snowflake/protos/zetasql/public/simple_value.proto

import type { Long } from '@grpc/proto-loader';

export interface SimpleValueProto {
  'int64Value'?: (number | string | Long);
  'stringValue'?: (string);
  'boolValue'?: (boolean);
  'doubleValue'?: (number | string);
  'bytesValue'?: (Buffer | Uint8Array | string);
  '__SimpleValueProto_SwitchMustHaveADefault'?: (boolean);
  'value'?: "int64Value"|"stringValue"|"boolValue"|"doubleValue"|"bytesValue"|"__SimpleValueProto_SwitchMustHaveADefault";
}

export interface SimpleValueProto__Output {
  'int64Value'?: (Long);
  'stringValue'?: (string);
  'boolValue'?: (boolean);
  'doubleValue'?: (number);
  'bytesValue'?: (Buffer);
  '__SimpleValueProto_SwitchMustHaveADefault'?: (boolean);
  'value': "int64Value"|"stringValue"|"boolValue"|"doubleValue"|"bytesValue"|"__SimpleValueProto_SwitchMustHaveADefault";
}
