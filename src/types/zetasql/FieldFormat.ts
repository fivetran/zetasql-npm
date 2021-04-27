// Original file: protos/zetasql/public/proto/type_annotation.proto


// Original file: protos/zetasql/public/proto/type_annotation.proto

export enum _zetasql_FieldFormat_Format {
  DEFAULT_FORMAT = 0,
  DATE = 1,
  TIMESTAMP_SECONDS = 2,
  TIMESTAMP_MILLIS = 3,
  TIMESTAMP_MICROS = 4,
  TIMESTAMP_NANOS = 5,
  DATE_DECIMAL = 6,
  TIME_MICROS = 7,
  DATETIME_MICROS = 8,
  ST_GEOGRAPHY_ENCODED = 9,
  NUMERIC = 10,
  BIGNUMERIC = 11,
  JSON = 12,
  INTERVAL = 14,
  __FieldFormat_Type__switch_must_have_a_default__ = -1,
}

export interface FieldFormat {
}

export interface FieldFormat__Output {
}
