// Original file: src/snowflake/protos/local_service.proto


export interface _zetasql_local_service_ExtractTableNamesFromNextStatementResponse_TableName {
  'tableNameSegment'?: (string)[];
}

export interface _zetasql_local_service_ExtractTableNamesFromNextStatementResponse_TableName__Output {
  'tableNameSegment': (string)[];
}

export interface ExtractTableNamesFromNextStatementResponse {
  'tableName'?: (_zetasql_local_service_ExtractTableNamesFromNextStatementResponse_TableName)[];
  'resumeBytePosition'?: (number);
}

export interface ExtractTableNamesFromNextStatementResponse__Output {
  'tableName': (_zetasql_local_service_ExtractTableNamesFromNextStatementResponse_TableName__Output)[];
  'resumeBytePosition': (number);
}
