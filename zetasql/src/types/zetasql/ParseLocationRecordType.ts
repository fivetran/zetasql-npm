// Original file: src/zetasql/protos/zetasql/public/options.proto

export const ParseLocationRecordType = {
  PARSE_LOCATION_RECORD_NONE: 0,
  PARSE_LOCATION_RECORD_FULL_NODE_SCOPE: 1,
  PARSE_LOCATION_RECORD_CODE_SEARCH: 2,
} as const;

export type ParseLocationRecordType =
  | 'PARSE_LOCATION_RECORD_NONE'
  | 0
  | 'PARSE_LOCATION_RECORD_FULL_NODE_SCOPE'
  | 1
  | 'PARSE_LOCATION_RECORD_CODE_SEARCH'
  | 2

export type ParseLocationRecordType__Output = typeof ParseLocationRecordType[keyof typeof ParseLocationRecordType]
