// Original file: src/protos/local_service.proto


export interface _zetasql_local_service_ExtractTableNamesFromStatementResponse_TableName {
  'tableNameSegment'?: (string)[];
}

export interface _zetasql_local_service_ExtractTableNamesFromStatementResponse_TableName__Output {
  'tableNameSegment': (string)[];
}

export interface ExtractTableNamesFromStatementResponse {
  'tableName'?: (_zetasql_local_service_ExtractTableNamesFromStatementResponse_TableName)[];
}

export interface ExtractTableNamesFromStatementResponse__Output {
  'tableName': (_zetasql_local_service_ExtractTableNamesFromStatementResponse_TableName__Output)[];
}
