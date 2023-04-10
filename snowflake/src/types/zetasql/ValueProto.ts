// Original file: src/zetasql-snowflake/protos/zetasql/public/value.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../zetasql/ValueProto';
import type { Long } from '@grpc/proto-loader';

export interface _zetasql_ValueProto_Array {
  'element'?: (_zetasql_ValueProto)[];
}

export interface _zetasql_ValueProto_Array__Output {
  'element': (_zetasql_ValueProto__Output)[];
}

export interface _zetasql_ValueProto_Datetime {
  'bitFieldDatetimeSeconds'?: (number | string | Long);
  'nanos'?: (number);
}

export interface _zetasql_ValueProto_Datetime__Output {
  'bitFieldDatetimeSeconds': (Long);
  'nanos': (number);
}

export interface _zetasql_ValueProto_Range {
  'start'?: (_zetasql_ValueProto | null);
  'end'?: (_zetasql_ValueProto | null);
}

export interface _zetasql_ValueProto_Range__Output {
  'start': (_zetasql_ValueProto__Output | null);
  'end': (_zetasql_ValueProto__Output | null);
}

export interface _zetasql_ValueProto_Struct {
  'field'?: (_zetasql_ValueProto)[];
}

export interface _zetasql_ValueProto_Struct__Output {
  'field': (_zetasql_ValueProto__Output)[];
}

export interface ValueProto {
  'int32Value'?: (number);
  'int64Value'?: (number | string | Long);
  'uint32Value'?: (number);
  'uint64Value'?: (number | string | Long);
  'boolValue'?: (boolean);
  'floatValue'?: (number | string);
  'doubleValue'?: (number | string);
  'stringValue'?: (string);
  'bytesValue'?: (Buffer | Uint8Array | string);
  'dateValue'?: (number);
  'enumValue'?: (number);
  'arrayValue'?: (_zetasql_ValueProto_Array | null);
  'structValue'?: (_zetasql_ValueProto_Struct | null);
  'protoValue'?: (Buffer | Uint8Array | string);
  'timestampValue'?: (_google_protobuf_Timestamp | null);
  'datetimeValue'?: (_zetasql_ValueProto_Datetime | null);
  'timeValue'?: (number | string | Long);
  'geographyValue'?: (Buffer | Uint8Array | string);
  'numericValue'?: (Buffer | Uint8Array | string);
  'bignumericValue'?: (Buffer | Uint8Array | string);
  'jsonValue'?: (string);
  'intervalValue'?: (Buffer | Uint8Array | string);
  'rangeValue'?: (_zetasql_ValueProto_Range | null);
  '__ValueProto_SwitchMustHaveADefault'?: (boolean);
  'value'?: "int32Value"|"int64Value"|"uint32Value"|"uint64Value"|"boolValue"|"floatValue"|"doubleValue"|"stringValue"|"bytesValue"|"dateValue"|"enumValue"|"arrayValue"|"structValue"|"protoValue"|"timestampValue"|"datetimeValue"|"timeValue"|"geographyValue"|"numericValue"|"bignumericValue"|"jsonValue"|"intervalValue"|"rangeValue"|"__ValueProto_SwitchMustHaveADefault";
}

export interface ValueProto__Output {
  'int32Value'?: (number);
  'int64Value'?: (Long);
  'uint32Value'?: (number);
  'uint64Value'?: (Long);
  'boolValue'?: (boolean);
  'floatValue'?: (number);
  'doubleValue'?: (number);
  'stringValue'?: (string);
  'bytesValue'?: (Buffer);
  'dateValue'?: (number);
  'enumValue'?: (number);
  'arrayValue'?: (_zetasql_ValueProto_Array__Output | null);
  'structValue'?: (_zetasql_ValueProto_Struct__Output | null);
  'protoValue'?: (Buffer);
  'timestampValue'?: (_google_protobuf_Timestamp__Output | null);
  'datetimeValue'?: (_zetasql_ValueProto_Datetime__Output | null);
  'timeValue'?: (Long);
  'geographyValue'?: (Buffer);
  'numericValue'?: (Buffer);
  'bignumericValue'?: (Buffer);
  'jsonValue'?: (string);
  'intervalValue'?: (Buffer);
  'rangeValue'?: (_zetasql_ValueProto_Range__Output | null);
  '__ValueProto_SwitchMustHaveADefault'?: (boolean);
  'value': "int32Value"|"int64Value"|"uint32Value"|"uint64Value"|"boolValue"|"floatValue"|"doubleValue"|"stringValue"|"bytesValue"|"dateValue"|"enumValue"|"arrayValue"|"structValue"|"protoValue"|"timestampValue"|"datetimeValue"|"timeValue"|"geographyValue"|"numericValue"|"bignumericValue"|"jsonValue"|"intervalValue"|"rangeValue"|"__ValueProto_SwitchMustHaveADefault";
}
