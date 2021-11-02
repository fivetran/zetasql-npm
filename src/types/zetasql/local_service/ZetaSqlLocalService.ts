// Original file: src/protos/local_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AnalyzeRequest as _zetasql_local_service_AnalyzeRequest, AnalyzeRequest__Output as _zetasql_local_service_AnalyzeRequest__Output } from '../../zetasql/local_service/AnalyzeRequest';
import type { AnalyzeResponse as _zetasql_local_service_AnalyzeResponse, AnalyzeResponse__Output as _zetasql_local_service_AnalyzeResponse__Output } from '../../zetasql/local_service/AnalyzeResponse';
import type { AnalyzerOptionsProto as _zetasql_AnalyzerOptionsProto, AnalyzerOptionsProto__Output as _zetasql_AnalyzerOptionsProto__Output } from '../../zetasql/AnalyzerOptionsProto';
import type { AnalyzerOptionsRequest as _zetasql_local_service_AnalyzerOptionsRequest, AnalyzerOptionsRequest__Output as _zetasql_local_service_AnalyzerOptionsRequest__Output } from '../../zetasql/local_service/AnalyzerOptionsRequest';
import type { BuildSqlRequest as _zetasql_local_service_BuildSqlRequest, BuildSqlRequest__Output as _zetasql_local_service_BuildSqlRequest__Output } from '../../zetasql/local_service/BuildSqlRequest';
import type { BuildSqlResponse as _zetasql_local_service_BuildSqlResponse, BuildSqlResponse__Output as _zetasql_local_service_BuildSqlResponse__Output } from '../../zetasql/local_service/BuildSqlResponse';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';
import type { EvaluateRequest as _zetasql_local_service_EvaluateRequest, EvaluateRequest__Output as _zetasql_local_service_EvaluateRequest__Output } from '../../zetasql/local_service/EvaluateRequest';
import type { EvaluateRequestBatch as _zetasql_local_service_EvaluateRequestBatch, EvaluateRequestBatch__Output as _zetasql_local_service_EvaluateRequestBatch__Output } from '../../zetasql/local_service/EvaluateRequestBatch';
import type { EvaluateResponse as _zetasql_local_service_EvaluateResponse, EvaluateResponse__Output as _zetasql_local_service_EvaluateResponse__Output } from '../../zetasql/local_service/EvaluateResponse';
import type { EvaluateResponseBatch as _zetasql_local_service_EvaluateResponseBatch, EvaluateResponseBatch__Output as _zetasql_local_service_EvaluateResponseBatch__Output } from '../../zetasql/local_service/EvaluateResponseBatch';
import type { ExtractTableNamesFromNextStatementRequest as _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, ExtractTableNamesFromNextStatementRequest__Output as _zetasql_local_service_ExtractTableNamesFromNextStatementRequest__Output } from '../../zetasql/local_service/ExtractTableNamesFromNextStatementRequest';
import type { ExtractTableNamesFromNextStatementResponse as _zetasql_local_service_ExtractTableNamesFromNextStatementResponse, ExtractTableNamesFromNextStatementResponse__Output as _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output } from '../../zetasql/local_service/ExtractTableNamesFromNextStatementResponse';
import type { ExtractTableNamesFromStatementRequest as _zetasql_local_service_ExtractTableNamesFromStatementRequest, ExtractTableNamesFromStatementRequest__Output as _zetasql_local_service_ExtractTableNamesFromStatementRequest__Output } from '../../zetasql/local_service/ExtractTableNamesFromStatementRequest';
import type { ExtractTableNamesFromStatementResponse as _zetasql_local_service_ExtractTableNamesFromStatementResponse, ExtractTableNamesFromStatementResponse__Output as _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output } from '../../zetasql/local_service/ExtractTableNamesFromStatementResponse';
import type { FormatSqlRequest as _zetasql_local_service_FormatSqlRequest, FormatSqlRequest__Output as _zetasql_local_service_FormatSqlRequest__Output } from '../../zetasql/local_service/FormatSqlRequest';
import type { FormatSqlResponse as _zetasql_local_service_FormatSqlResponse, FormatSqlResponse__Output as _zetasql_local_service_FormatSqlResponse__Output } from '../../zetasql/local_service/FormatSqlResponse';
import type { GetBuiltinFunctionsResponse as _zetasql_local_service_GetBuiltinFunctionsResponse, GetBuiltinFunctionsResponse__Output as _zetasql_local_service_GetBuiltinFunctionsResponse__Output } from '../../zetasql/local_service/GetBuiltinFunctionsResponse';
import type { LanguageOptionsProto as _zetasql_LanguageOptionsProto, LanguageOptionsProto__Output as _zetasql_LanguageOptionsProto__Output } from '../../zetasql/LanguageOptionsProto';
import type { LanguageOptionsRequest as _zetasql_local_service_LanguageOptionsRequest, LanguageOptionsRequest__Output as _zetasql_local_service_LanguageOptionsRequest__Output } from '../../zetasql/local_service/LanguageOptionsRequest';
import type { PrepareRequest as _zetasql_local_service_PrepareRequest, PrepareRequest__Output as _zetasql_local_service_PrepareRequest__Output } from '../../zetasql/local_service/PrepareRequest';
import type { PrepareResponse as _zetasql_local_service_PrepareResponse, PrepareResponse__Output as _zetasql_local_service_PrepareResponse__Output } from '../../zetasql/local_service/PrepareResponse';
import type { RegisterCatalogRequest as _zetasql_local_service_RegisterCatalogRequest, RegisterCatalogRequest__Output as _zetasql_local_service_RegisterCatalogRequest__Output } from '../../zetasql/local_service/RegisterCatalogRequest';
import type { RegisterResponse as _zetasql_local_service_RegisterResponse, RegisterResponse__Output as _zetasql_local_service_RegisterResponse__Output } from '../../zetasql/local_service/RegisterResponse';
import type { SimpleTableProto as _zetasql_SimpleTableProto, SimpleTableProto__Output as _zetasql_SimpleTableProto__Output } from '../../zetasql/SimpleTableProto';
import type { TableFromProtoRequest as _zetasql_local_service_TableFromProtoRequest, TableFromProtoRequest__Output as _zetasql_local_service_TableFromProtoRequest__Output } from '../../zetasql/local_service/TableFromProtoRequest';
import type { UnprepareRequest as _zetasql_local_service_UnprepareRequest, UnprepareRequest__Output as _zetasql_local_service_UnprepareRequest__Output } from '../../zetasql/local_service/UnprepareRequest';
import type { UnregisterRequest as _zetasql_local_service_UnregisterRequest, UnregisterRequest__Output as _zetasql_local_service_UnregisterRequest__Output } from '../../zetasql/local_service/UnregisterRequest';
import type { ZetaSQLBuiltinFunctionOptionsProto as _zetasql_ZetaSQLBuiltinFunctionOptionsProto, ZetaSQLBuiltinFunctionOptionsProto__Output as _zetasql_ZetaSQLBuiltinFunctionOptionsProto__Output } from '../../zetasql/ZetaSQLBuiltinFunctionOptionsProto';

export interface ZetaSqlLocalServiceClient extends grpc.Client {
  Analyze(argument: _zetasql_local_service_AnalyzeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_AnalyzeResponse__Output) => void): grpc.ClientUnaryCall;
  Analyze(argument: _zetasql_local_service_AnalyzeRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_AnalyzeResponse__Output) => void): grpc.ClientUnaryCall;
  Analyze(argument: _zetasql_local_service_AnalyzeRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_AnalyzeResponse__Output) => void): grpc.ClientUnaryCall;
  Analyze(argument: _zetasql_local_service_AnalyzeRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_AnalyzeResponse__Output) => void): grpc.ClientUnaryCall;
  analyze(argument: _zetasql_local_service_AnalyzeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_AnalyzeResponse__Output) => void): grpc.ClientUnaryCall;
  analyze(argument: _zetasql_local_service_AnalyzeRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_AnalyzeResponse__Output) => void): grpc.ClientUnaryCall;
  analyze(argument: _zetasql_local_service_AnalyzeRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_AnalyzeResponse__Output) => void): grpc.ClientUnaryCall;
  analyze(argument: _zetasql_local_service_AnalyzeRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_AnalyzeResponse__Output) => void): grpc.ClientUnaryCall;
  
  BuildSql(argument: _zetasql_local_service_BuildSqlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_BuildSqlResponse__Output) => void): grpc.ClientUnaryCall;
  BuildSql(argument: _zetasql_local_service_BuildSqlRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_BuildSqlResponse__Output) => void): grpc.ClientUnaryCall;
  BuildSql(argument: _zetasql_local_service_BuildSqlRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_BuildSqlResponse__Output) => void): grpc.ClientUnaryCall;
  BuildSql(argument: _zetasql_local_service_BuildSqlRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_BuildSqlResponse__Output) => void): grpc.ClientUnaryCall;
  buildSql(argument: _zetasql_local_service_BuildSqlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_BuildSqlResponse__Output) => void): grpc.ClientUnaryCall;
  buildSql(argument: _zetasql_local_service_BuildSqlRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_BuildSqlResponse__Output) => void): grpc.ClientUnaryCall;
  buildSql(argument: _zetasql_local_service_BuildSqlRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_BuildSqlResponse__Output) => void): grpc.ClientUnaryCall;
  buildSql(argument: _zetasql_local_service_BuildSqlRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_BuildSqlResponse__Output) => void): grpc.ClientUnaryCall;
  
  Evaluate(argument: _zetasql_local_service_EvaluateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_EvaluateResponse__Output) => void): grpc.ClientUnaryCall;
  Evaluate(argument: _zetasql_local_service_EvaluateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_EvaluateResponse__Output) => void): grpc.ClientUnaryCall;
  Evaluate(argument: _zetasql_local_service_EvaluateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_EvaluateResponse__Output) => void): grpc.ClientUnaryCall;
  Evaluate(argument: _zetasql_local_service_EvaluateRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_EvaluateResponse__Output) => void): grpc.ClientUnaryCall;
  evaluate(argument: _zetasql_local_service_EvaluateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_EvaluateResponse__Output) => void): grpc.ClientUnaryCall;
  evaluate(argument: _zetasql_local_service_EvaluateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_EvaluateResponse__Output) => void): grpc.ClientUnaryCall;
  evaluate(argument: _zetasql_local_service_EvaluateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_EvaluateResponse__Output) => void): grpc.ClientUnaryCall;
  evaluate(argument: _zetasql_local_service_EvaluateRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_EvaluateResponse__Output) => void): grpc.ClientUnaryCall;
  
  EvaluateStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_zetasql_local_service_EvaluateRequestBatch, _zetasql_local_service_EvaluateResponseBatch__Output>;
  EvaluateStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_zetasql_local_service_EvaluateRequestBatch, _zetasql_local_service_EvaluateResponseBatch__Output>;
  evaluateStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_zetasql_local_service_EvaluateRequestBatch, _zetasql_local_service_EvaluateResponseBatch__Output>;
  evaluateStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_zetasql_local_service_EvaluateRequestBatch, _zetasql_local_service_EvaluateResponseBatch__Output>;
  
  ExtractTableNamesFromNextStatement(argument: _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output) => void): grpc.ClientUnaryCall;
  ExtractTableNamesFromNextStatement(argument: _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output) => void): grpc.ClientUnaryCall;
  ExtractTableNamesFromNextStatement(argument: _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output) => void): grpc.ClientUnaryCall;
  ExtractTableNamesFromNextStatement(argument: _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output) => void): grpc.ClientUnaryCall;
  extractTableNamesFromNextStatement(argument: _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output) => void): grpc.ClientUnaryCall;
  extractTableNamesFromNextStatement(argument: _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output) => void): grpc.ClientUnaryCall;
  extractTableNamesFromNextStatement(argument: _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output) => void): grpc.ClientUnaryCall;
  extractTableNamesFromNextStatement(argument: _zetasql_local_service_ExtractTableNamesFromNextStatementRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output) => void): grpc.ClientUnaryCall;
  
  ExtractTableNamesFromStatement(argument: _zetasql_local_service_ExtractTableNamesFromStatementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output) => void): grpc.ClientUnaryCall;
  ExtractTableNamesFromStatement(argument: _zetasql_local_service_ExtractTableNamesFromStatementRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output) => void): grpc.ClientUnaryCall;
  ExtractTableNamesFromStatement(argument: _zetasql_local_service_ExtractTableNamesFromStatementRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output) => void): grpc.ClientUnaryCall;
  ExtractTableNamesFromStatement(argument: _zetasql_local_service_ExtractTableNamesFromStatementRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output) => void): grpc.ClientUnaryCall;
  extractTableNamesFromStatement(argument: _zetasql_local_service_ExtractTableNamesFromStatementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output) => void): grpc.ClientUnaryCall;
  extractTableNamesFromStatement(argument: _zetasql_local_service_ExtractTableNamesFromStatementRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output) => void): grpc.ClientUnaryCall;
  extractTableNamesFromStatement(argument: _zetasql_local_service_ExtractTableNamesFromStatementRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output) => void): grpc.ClientUnaryCall;
  extractTableNamesFromStatement(argument: _zetasql_local_service_ExtractTableNamesFromStatementRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output) => void): grpc.ClientUnaryCall;
  
  FormatSql(argument: _zetasql_local_service_FormatSqlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  FormatSql(argument: _zetasql_local_service_FormatSqlRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  FormatSql(argument: _zetasql_local_service_FormatSqlRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  FormatSql(argument: _zetasql_local_service_FormatSqlRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  formatSql(argument: _zetasql_local_service_FormatSqlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  formatSql(argument: _zetasql_local_service_FormatSqlRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  formatSql(argument: _zetasql_local_service_FormatSqlRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  formatSql(argument: _zetasql_local_service_FormatSqlRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetAnalyzerOptions(argument: _zetasql_local_service_AnalyzerOptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_AnalyzerOptionsProto__Output) => void): grpc.ClientUnaryCall;
  GetAnalyzerOptions(argument: _zetasql_local_service_AnalyzerOptionsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_AnalyzerOptionsProto__Output) => void): grpc.ClientUnaryCall;
  GetAnalyzerOptions(argument: _zetasql_local_service_AnalyzerOptionsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_AnalyzerOptionsProto__Output) => void): grpc.ClientUnaryCall;
  GetAnalyzerOptions(argument: _zetasql_local_service_AnalyzerOptionsRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_AnalyzerOptionsProto__Output) => void): grpc.ClientUnaryCall;
  getAnalyzerOptions(argument: _zetasql_local_service_AnalyzerOptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_AnalyzerOptionsProto__Output) => void): grpc.ClientUnaryCall;
  getAnalyzerOptions(argument: _zetasql_local_service_AnalyzerOptionsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_AnalyzerOptionsProto__Output) => void): grpc.ClientUnaryCall;
  getAnalyzerOptions(argument: _zetasql_local_service_AnalyzerOptionsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_AnalyzerOptionsProto__Output) => void): grpc.ClientUnaryCall;
  getAnalyzerOptions(argument: _zetasql_local_service_AnalyzerOptionsRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_AnalyzerOptionsProto__Output) => void): grpc.ClientUnaryCall;
  
  GetBuiltinFunctions(argument: _zetasql_ZetaSQLBuiltinFunctionOptionsProto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_GetBuiltinFunctionsResponse__Output) => void): grpc.ClientUnaryCall;
  GetBuiltinFunctions(argument: _zetasql_ZetaSQLBuiltinFunctionOptionsProto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_GetBuiltinFunctionsResponse__Output) => void): grpc.ClientUnaryCall;
  GetBuiltinFunctions(argument: _zetasql_ZetaSQLBuiltinFunctionOptionsProto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_GetBuiltinFunctionsResponse__Output) => void): grpc.ClientUnaryCall;
  GetBuiltinFunctions(argument: _zetasql_ZetaSQLBuiltinFunctionOptionsProto, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_GetBuiltinFunctionsResponse__Output) => void): grpc.ClientUnaryCall;
  getBuiltinFunctions(argument: _zetasql_ZetaSQLBuiltinFunctionOptionsProto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_GetBuiltinFunctionsResponse__Output) => void): grpc.ClientUnaryCall;
  getBuiltinFunctions(argument: _zetasql_ZetaSQLBuiltinFunctionOptionsProto, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_GetBuiltinFunctionsResponse__Output) => void): grpc.ClientUnaryCall;
  getBuiltinFunctions(argument: _zetasql_ZetaSQLBuiltinFunctionOptionsProto, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_GetBuiltinFunctionsResponse__Output) => void): grpc.ClientUnaryCall;
  getBuiltinFunctions(argument: _zetasql_ZetaSQLBuiltinFunctionOptionsProto, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_GetBuiltinFunctionsResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetLanguageOptions(argument: _zetasql_local_service_LanguageOptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_LanguageOptionsProto__Output) => void): grpc.ClientUnaryCall;
  GetLanguageOptions(argument: _zetasql_local_service_LanguageOptionsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_LanguageOptionsProto__Output) => void): grpc.ClientUnaryCall;
  GetLanguageOptions(argument: _zetasql_local_service_LanguageOptionsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_LanguageOptionsProto__Output) => void): grpc.ClientUnaryCall;
  GetLanguageOptions(argument: _zetasql_local_service_LanguageOptionsRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_LanguageOptionsProto__Output) => void): grpc.ClientUnaryCall;
  getLanguageOptions(argument: _zetasql_local_service_LanguageOptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_LanguageOptionsProto__Output) => void): grpc.ClientUnaryCall;
  getLanguageOptions(argument: _zetasql_local_service_LanguageOptionsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_LanguageOptionsProto__Output) => void): grpc.ClientUnaryCall;
  getLanguageOptions(argument: _zetasql_local_service_LanguageOptionsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_LanguageOptionsProto__Output) => void): grpc.ClientUnaryCall;
  getLanguageOptions(argument: _zetasql_local_service_LanguageOptionsRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_LanguageOptionsProto__Output) => void): grpc.ClientUnaryCall;
  
  GetTableFromProto(argument: _zetasql_local_service_TableFromProtoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_SimpleTableProto__Output) => void): grpc.ClientUnaryCall;
  GetTableFromProto(argument: _zetasql_local_service_TableFromProtoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_SimpleTableProto__Output) => void): grpc.ClientUnaryCall;
  GetTableFromProto(argument: _zetasql_local_service_TableFromProtoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_SimpleTableProto__Output) => void): grpc.ClientUnaryCall;
  GetTableFromProto(argument: _zetasql_local_service_TableFromProtoRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_SimpleTableProto__Output) => void): grpc.ClientUnaryCall;
  getTableFromProto(argument: _zetasql_local_service_TableFromProtoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_SimpleTableProto__Output) => void): grpc.ClientUnaryCall;
  getTableFromProto(argument: _zetasql_local_service_TableFromProtoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_SimpleTableProto__Output) => void): grpc.ClientUnaryCall;
  getTableFromProto(argument: _zetasql_local_service_TableFromProtoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_SimpleTableProto__Output) => void): grpc.ClientUnaryCall;
  getTableFromProto(argument: _zetasql_local_service_TableFromProtoRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_SimpleTableProto__Output) => void): grpc.ClientUnaryCall;
  
  LenientFormatSql(argument: _zetasql_local_service_FormatSqlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  LenientFormatSql(argument: _zetasql_local_service_FormatSqlRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  LenientFormatSql(argument: _zetasql_local_service_FormatSqlRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  LenientFormatSql(argument: _zetasql_local_service_FormatSqlRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  lenientFormatSql(argument: _zetasql_local_service_FormatSqlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  lenientFormatSql(argument: _zetasql_local_service_FormatSqlRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  lenientFormatSql(argument: _zetasql_local_service_FormatSqlRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  lenientFormatSql(argument: _zetasql_local_service_FormatSqlRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_FormatSqlResponse__Output) => void): grpc.ClientUnaryCall;
  
  Prepare(argument: _zetasql_local_service_PrepareRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_PrepareResponse__Output) => void): grpc.ClientUnaryCall;
  Prepare(argument: _zetasql_local_service_PrepareRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_PrepareResponse__Output) => void): grpc.ClientUnaryCall;
  Prepare(argument: _zetasql_local_service_PrepareRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_PrepareResponse__Output) => void): grpc.ClientUnaryCall;
  Prepare(argument: _zetasql_local_service_PrepareRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_PrepareResponse__Output) => void): grpc.ClientUnaryCall;
  prepare(argument: _zetasql_local_service_PrepareRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_PrepareResponse__Output) => void): grpc.ClientUnaryCall;
  prepare(argument: _zetasql_local_service_PrepareRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_PrepareResponse__Output) => void): grpc.ClientUnaryCall;
  prepare(argument: _zetasql_local_service_PrepareRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_PrepareResponse__Output) => void): grpc.ClientUnaryCall;
  prepare(argument: _zetasql_local_service_PrepareRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_PrepareResponse__Output) => void): grpc.ClientUnaryCall;
  
  RegisterCatalog(argument: _zetasql_local_service_RegisterCatalogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_RegisterResponse__Output) => void): grpc.ClientUnaryCall;
  RegisterCatalog(argument: _zetasql_local_service_RegisterCatalogRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_RegisterResponse__Output) => void): grpc.ClientUnaryCall;
  RegisterCatalog(argument: _zetasql_local_service_RegisterCatalogRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_RegisterResponse__Output) => void): grpc.ClientUnaryCall;
  RegisterCatalog(argument: _zetasql_local_service_RegisterCatalogRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_RegisterResponse__Output) => void): grpc.ClientUnaryCall;
  registerCatalog(argument: _zetasql_local_service_RegisterCatalogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_RegisterResponse__Output) => void): grpc.ClientUnaryCall;
  registerCatalog(argument: _zetasql_local_service_RegisterCatalogRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_RegisterResponse__Output) => void): grpc.ClientUnaryCall;
  registerCatalog(argument: _zetasql_local_service_RegisterCatalogRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_RegisterResponse__Output) => void): grpc.ClientUnaryCall;
  registerCatalog(argument: _zetasql_local_service_RegisterCatalogRequest, callback: (error?: grpc.ServiceError, result?: _zetasql_local_service_RegisterResponse__Output) => void): grpc.ClientUnaryCall;
  
  Unprepare(argument: _zetasql_local_service_UnprepareRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  Unprepare(argument: _zetasql_local_service_UnprepareRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  Unprepare(argument: _zetasql_local_service_UnprepareRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  Unprepare(argument: _zetasql_local_service_UnprepareRequest, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  unprepare(argument: _zetasql_local_service_UnprepareRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  unprepare(argument: _zetasql_local_service_UnprepareRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  unprepare(argument: _zetasql_local_service_UnprepareRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  unprepare(argument: _zetasql_local_service_UnprepareRequest, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  
  UnregisterCatalog(argument: _zetasql_local_service_UnregisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  UnregisterCatalog(argument: _zetasql_local_service_UnregisterRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  UnregisterCatalog(argument: _zetasql_local_service_UnregisterRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  UnregisterCatalog(argument: _zetasql_local_service_UnregisterRequest, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  unregisterCatalog(argument: _zetasql_local_service_UnregisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  unregisterCatalog(argument: _zetasql_local_service_UnregisterRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  unregisterCatalog(argument: _zetasql_local_service_UnregisterRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  unregisterCatalog(argument: _zetasql_local_service_UnregisterRequest, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ZetaSqlLocalServiceHandlers extends grpc.UntypedServiceImplementation {
  Analyze: grpc.handleUnaryCall<_zetasql_local_service_AnalyzeRequest__Output, _zetasql_local_service_AnalyzeResponse>;
  
  BuildSql: grpc.handleUnaryCall<_zetasql_local_service_BuildSqlRequest__Output, _zetasql_local_service_BuildSqlResponse>;
  
  Evaluate: grpc.handleUnaryCall<_zetasql_local_service_EvaluateRequest__Output, _zetasql_local_service_EvaluateResponse>;
  
  EvaluateStream: grpc.handleBidiStreamingCall<_zetasql_local_service_EvaluateRequestBatch__Output, _zetasql_local_service_EvaluateResponseBatch>;
  
  ExtractTableNamesFromNextStatement: grpc.handleUnaryCall<_zetasql_local_service_ExtractTableNamesFromNextStatementRequest__Output, _zetasql_local_service_ExtractTableNamesFromNextStatementResponse>;
  
  ExtractTableNamesFromStatement: grpc.handleUnaryCall<_zetasql_local_service_ExtractTableNamesFromStatementRequest__Output, _zetasql_local_service_ExtractTableNamesFromStatementResponse>;
  
  FormatSql: grpc.handleUnaryCall<_zetasql_local_service_FormatSqlRequest__Output, _zetasql_local_service_FormatSqlResponse>;
  
  GetAnalyzerOptions: grpc.handleUnaryCall<_zetasql_local_service_AnalyzerOptionsRequest__Output, _zetasql_AnalyzerOptionsProto>;
  
  GetBuiltinFunctions: grpc.handleUnaryCall<_zetasql_ZetaSQLBuiltinFunctionOptionsProto__Output, _zetasql_local_service_GetBuiltinFunctionsResponse>;
  
  GetLanguageOptions: grpc.handleUnaryCall<_zetasql_local_service_LanguageOptionsRequest__Output, _zetasql_LanguageOptionsProto>;
  
  GetTableFromProto: grpc.handleUnaryCall<_zetasql_local_service_TableFromProtoRequest__Output, _zetasql_SimpleTableProto>;
  
  LenientFormatSql: grpc.handleUnaryCall<_zetasql_local_service_FormatSqlRequest__Output, _zetasql_local_service_FormatSqlResponse>;
  
  Prepare: grpc.handleUnaryCall<_zetasql_local_service_PrepareRequest__Output, _zetasql_local_service_PrepareResponse>;
  
  RegisterCatalog: grpc.handleUnaryCall<_zetasql_local_service_RegisterCatalogRequest__Output, _zetasql_local_service_RegisterResponse>;
  
  Unprepare: grpc.handleUnaryCall<_zetasql_local_service_UnprepareRequest__Output, _google_protobuf_Empty>;
  
  UnregisterCatalog: grpc.handleUnaryCall<_zetasql_local_service_UnregisterRequest__Output, _google_protobuf_Empty>;
  
}

export interface ZetaSqlLocalServiceDefinition extends grpc.ServiceDefinition {
  Analyze: MethodDefinition<_zetasql_local_service_AnalyzeRequest, _zetasql_local_service_AnalyzeResponse, _zetasql_local_service_AnalyzeRequest__Output, _zetasql_local_service_AnalyzeResponse__Output>
  BuildSql: MethodDefinition<_zetasql_local_service_BuildSqlRequest, _zetasql_local_service_BuildSqlResponse, _zetasql_local_service_BuildSqlRequest__Output, _zetasql_local_service_BuildSqlResponse__Output>
  Evaluate: MethodDefinition<_zetasql_local_service_EvaluateRequest, _zetasql_local_service_EvaluateResponse, _zetasql_local_service_EvaluateRequest__Output, _zetasql_local_service_EvaluateResponse__Output>
  EvaluateStream: MethodDefinition<_zetasql_local_service_EvaluateRequestBatch, _zetasql_local_service_EvaluateResponseBatch, _zetasql_local_service_EvaluateRequestBatch__Output, _zetasql_local_service_EvaluateResponseBatch__Output>
  ExtractTableNamesFromNextStatement: MethodDefinition<_zetasql_local_service_ExtractTableNamesFromNextStatementRequest, _zetasql_local_service_ExtractTableNamesFromNextStatementResponse, _zetasql_local_service_ExtractTableNamesFromNextStatementRequest__Output, _zetasql_local_service_ExtractTableNamesFromNextStatementResponse__Output>
  ExtractTableNamesFromStatement: MethodDefinition<_zetasql_local_service_ExtractTableNamesFromStatementRequest, _zetasql_local_service_ExtractTableNamesFromStatementResponse, _zetasql_local_service_ExtractTableNamesFromStatementRequest__Output, _zetasql_local_service_ExtractTableNamesFromStatementResponse__Output>
  FormatSql: MethodDefinition<_zetasql_local_service_FormatSqlRequest, _zetasql_local_service_FormatSqlResponse, _zetasql_local_service_FormatSqlRequest__Output, _zetasql_local_service_FormatSqlResponse__Output>
  GetAnalyzerOptions: MethodDefinition<_zetasql_local_service_AnalyzerOptionsRequest, _zetasql_AnalyzerOptionsProto, _zetasql_local_service_AnalyzerOptionsRequest__Output, _zetasql_AnalyzerOptionsProto__Output>
  GetBuiltinFunctions: MethodDefinition<_zetasql_ZetaSQLBuiltinFunctionOptionsProto, _zetasql_local_service_GetBuiltinFunctionsResponse, _zetasql_ZetaSQLBuiltinFunctionOptionsProto__Output, _zetasql_local_service_GetBuiltinFunctionsResponse__Output>
  GetLanguageOptions: MethodDefinition<_zetasql_local_service_LanguageOptionsRequest, _zetasql_LanguageOptionsProto, _zetasql_local_service_LanguageOptionsRequest__Output, _zetasql_LanguageOptionsProto__Output>
  GetTableFromProto: MethodDefinition<_zetasql_local_service_TableFromProtoRequest, _zetasql_SimpleTableProto, _zetasql_local_service_TableFromProtoRequest__Output, _zetasql_SimpleTableProto__Output>
  LenientFormatSql: MethodDefinition<_zetasql_local_service_FormatSqlRequest, _zetasql_local_service_FormatSqlResponse, _zetasql_local_service_FormatSqlRequest__Output, _zetasql_local_service_FormatSqlResponse__Output>
  Prepare: MethodDefinition<_zetasql_local_service_PrepareRequest, _zetasql_local_service_PrepareResponse, _zetasql_local_service_PrepareRequest__Output, _zetasql_local_service_PrepareResponse__Output>
  RegisterCatalog: MethodDefinition<_zetasql_local_service_RegisterCatalogRequest, _zetasql_local_service_RegisterResponse, _zetasql_local_service_RegisterCatalogRequest__Output, _zetasql_local_service_RegisterResponse__Output>
  Unprepare: MethodDefinition<_zetasql_local_service_UnprepareRequest, _google_protobuf_Empty, _zetasql_local_service_UnprepareRequest__Output, _google_protobuf_Empty__Output>
  UnregisterCatalog: MethodDefinition<_zetasql_local_service_UnregisterRequest, _google_protobuf_Empty, _zetasql_local_service_UnregisterRequest__Output, _google_protobuf_Empty__Output>
}
