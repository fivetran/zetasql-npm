import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ZetaSqlLocalServiceClient as _zetasql_local_service_ZetaSqlLocalServiceClient, ZetaSqlLocalServiceDefinition as _zetasql_local_service_ZetaSqlLocalServiceDefinition } from './zetasql/local_service/ZetaSqlLocalService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      DescriptorProto: MessageTypeDefinition
      Empty: MessageTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldOptions: MessageTypeDefinition
      FileDescriptorProto: MessageTypeDefinition
      FileDescriptorSet: MessageTypeDefinition
      FileOptions: MessageTypeDefinition
      GeneratedCodeInfo: MessageTypeDefinition
      MessageOptions: MessageTypeDefinition
      MethodDescriptorProto: MessageTypeDefinition
      MethodOptions: MessageTypeDefinition
      OneofDescriptorProto: MessageTypeDefinition
      OneofOptions: MessageTypeDefinition
      ServiceDescriptorProto: MessageTypeDefinition
      ServiceOptions: MessageTypeDefinition
      SourceCodeInfo: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
      UninterpretedOption: MessageTypeDefinition
    }
  }
  zetasql: {
    AllowedHintsAndOptionsProto: MessageTypeDefinition
    AnalyzerOptionsProto: MessageTypeDefinition
    AnnotationMapProto: MessageTypeDefinition
    AnnotationProto: MessageTypeDefinition
    AnyResolvedAggregateScanBaseProto: MessageTypeDefinition
    AnyResolvedAlterActionProto: MessageTypeDefinition
    AnyResolvedAlterObjectStmtProto: MessageTypeDefinition
    AnyResolvedArgumentProto: MessageTypeDefinition
    AnyResolvedConstraintProto: MessageTypeDefinition
    AnyResolvedCreateStatementProto: MessageTypeDefinition
    AnyResolvedCreateTableStmtBaseProto: MessageTypeDefinition
    AnyResolvedCreateViewBaseProto: MessageTypeDefinition
    AnyResolvedExprProto: MessageTypeDefinition
    AnyResolvedFunctionCallBaseProto: MessageTypeDefinition
    AnyResolvedGrantOrRevokeStmtProto: MessageTypeDefinition
    AnyResolvedNodeProto: MessageTypeDefinition
    AnyResolvedNonScalarFunctionCallBaseProto: MessageTypeDefinition
    AnyResolvedScanProto: MessageTypeDefinition
    AnyResolvedStatementProto: MessageTypeDefinition
    ArgumentTypeLambdaProto: MessageTypeDefinition
    ArrayTypeProto: MessageTypeDefinition
    ConnectionRefProto: MessageTypeDefinition
    ConstantRefProto: MessageTypeDefinition
    DeprecatedEncoding: MessageTypeDefinition
    DeprecationWarning: MessageTypeDefinition
    EnumTypeProto: MessageTypeDefinition
    ErrorLocation: MessageTypeDefinition
    ErrorMessageMode: EnumTypeDefinition
    ErrorSource: MessageTypeDefinition
    ExtendedTypeParametersProto: MessageTypeDefinition
    FieldDescriptorRefProto: MessageTypeDefinition
    FieldFormat: MessageTypeDefinition
    FreestandingDeprecationWarning: MessageTypeDefinition
    FunctionArgumentTypeOptionsProto: MessageTypeDefinition
    FunctionArgumentTypeProto: MessageTypeDefinition
    FunctionEnums: MessageTypeDefinition
    FunctionOptionsProto: MessageTypeDefinition
    FunctionProto: MessageTypeDefinition
    FunctionRefProto: MessageTypeDefinition
    FunctionSignatureId: EnumTypeDefinition
    FunctionSignatureOptionsProto: MessageTypeDefinition
    FunctionSignatureProto: MessageTypeDefinition
    LanguageFeature: EnumTypeDefinition
    LanguageFeatureOptions: MessageTypeDefinition
    LanguageOptionsProto: MessageTypeDefinition
    LanguageVersion: EnumTypeDefinition
    ModelRefProto: MessageTypeDefinition
    NameResolutionMode: EnumTypeDefinition
    NumericTypeParametersProto: MessageTypeDefinition
    OneofDescriptorRefProto: MessageTypeDefinition
    ParameterMode: EnumTypeDefinition
    ParseLocationRangeProto: MessageTypeDefinition
    ParseResumeLocationProto: MessageTypeDefinition
    ProcedureProto: MessageTypeDefinition
    ProcedureRefProto: MessageTypeDefinition
    ProductMode: EnumTypeDefinition
    ProtoTypeProto: MessageTypeDefinition
    ResolvedASTRewrite: EnumTypeDefinition
    ResolvedASTRewriteOptions: MessageTypeDefinition
    ResolvedAbortBatchStmtProto: MessageTypeDefinition
    ResolvedAddColumnActionProto: MessageTypeDefinition
    ResolvedAddConstraintActionProto: MessageTypeDefinition
    ResolvedAggregateFunctionCallProto: MessageTypeDefinition
    ResolvedAggregateHavingModifierEnums: MessageTypeDefinition
    ResolvedAggregateHavingModifierProto: MessageTypeDefinition
    ResolvedAggregateScanBaseProto: MessageTypeDefinition
    ResolvedAggregateScanProto: MessageTypeDefinition
    ResolvedAlterActionProto: MessageTypeDefinition
    ResolvedAlterAllRowAccessPoliciesStmtProto: MessageTypeDefinition
    ResolvedAlterColumnDropNotNullActionProto: MessageTypeDefinition
    ResolvedAlterColumnOptionsActionProto: MessageTypeDefinition
    ResolvedAlterColumnSetDataTypeActionProto: MessageTypeDefinition
    ResolvedAlterDatabaseStmtProto: MessageTypeDefinition
    ResolvedAlterEntityStmtProto: MessageTypeDefinition
    ResolvedAlterMaterializedViewStmtProto: MessageTypeDefinition
    ResolvedAlterObjectStmtProto: MessageTypeDefinition
    ResolvedAlterRowAccessPolicyStmtProto: MessageTypeDefinition
    ResolvedAlterSchemaStmtProto: MessageTypeDefinition
    ResolvedAlterTableSetOptionsStmtProto: MessageTypeDefinition
    ResolvedAlterTableStmtProto: MessageTypeDefinition
    ResolvedAlterViewStmtProto: MessageTypeDefinition
    ResolvedAnalyticFunctionCallProto: MessageTypeDefinition
    ResolvedAnalyticFunctionGroupProto: MessageTypeDefinition
    ResolvedAnalyticScanProto: MessageTypeDefinition
    ResolvedAnalyzeStmtProto: MessageTypeDefinition
    ResolvedAnonymizedAggregateScanProto: MessageTypeDefinition
    ResolvedArgumentDefEnums: MessageTypeDefinition
    ResolvedArgumentDefProto: MessageTypeDefinition
    ResolvedArgumentListProto: MessageTypeDefinition
    ResolvedArgumentProto: MessageTypeDefinition
    ResolvedArgumentRefProto: MessageTypeDefinition
    ResolvedArrayScanProto: MessageTypeDefinition
    ResolvedAssertRowsModifiedProto: MessageTypeDefinition
    ResolvedAssertStmtProto: MessageTypeDefinition
    ResolvedAssignmentStmtProto: MessageTypeDefinition
    ResolvedBeginStmtEnums: MessageTypeDefinition
    ResolvedBeginStmtProto: MessageTypeDefinition
    ResolvedCallStmtProto: MessageTypeDefinition
    ResolvedCastProto: MessageTypeDefinition
    ResolvedCheckConstraintProto: MessageTypeDefinition
    ResolvedCloneDataStmtProto: MessageTypeDefinition
    ResolvedCollationProto: MessageTypeDefinition
    ResolvedColumnAnnotationsProto: MessageTypeDefinition
    ResolvedColumnDefinitionProto: MessageTypeDefinition
    ResolvedColumnHolderProto: MessageTypeDefinition
    ResolvedColumnProto: MessageTypeDefinition
    ResolvedColumnRefProto: MessageTypeDefinition
    ResolvedCommitStmtProto: MessageTypeDefinition
    ResolvedComputedColumnProto: MessageTypeDefinition
    ResolvedConnectionProto: MessageTypeDefinition
    ResolvedConstantProto: MessageTypeDefinition
    ResolvedConstraintProto: MessageTypeDefinition
    ResolvedCreateConstantStmtProto: MessageTypeDefinition
    ResolvedCreateDatabaseStmtProto: MessageTypeDefinition
    ResolvedCreateEntityStmtProto: MessageTypeDefinition
    ResolvedCreateExternalTableStmtProto: MessageTypeDefinition
    ResolvedCreateFunctionStmtProto: MessageTypeDefinition
    ResolvedCreateIndexStmtProto: MessageTypeDefinition
    ResolvedCreateMaterializedViewStmtProto: MessageTypeDefinition
    ResolvedCreateModelStmtProto: MessageTypeDefinition
    ResolvedCreateProcedureStmtProto: MessageTypeDefinition
    ResolvedCreateRowAccessPolicyStmtProto: MessageTypeDefinition
    ResolvedCreateSchemaStmtProto: MessageTypeDefinition
    ResolvedCreateSnapshotTableStmtProto: MessageTypeDefinition
    ResolvedCreateStatementEnums: MessageTypeDefinition
    ResolvedCreateStatementProto: MessageTypeDefinition
    ResolvedCreateTableAsSelectStmtProto: MessageTypeDefinition
    ResolvedCreateTableFunctionStmtProto: MessageTypeDefinition
    ResolvedCreateTableStmtBaseProto: MessageTypeDefinition
    ResolvedCreateTableStmtProto: MessageTypeDefinition
    ResolvedCreateViewBaseProto: MessageTypeDefinition
    ResolvedCreateViewStmtProto: MessageTypeDefinition
    ResolvedDMLDefaultProto: MessageTypeDefinition
    ResolvedDMLValueProto: MessageTypeDefinition
    ResolvedDefineTableStmtProto: MessageTypeDefinition
    ResolvedDeleteStmtProto: MessageTypeDefinition
    ResolvedDescribeStmtProto: MessageTypeDefinition
    ResolvedDescriptorProto: MessageTypeDefinition
    ResolvedDropColumnActionProto: MessageTypeDefinition
    ResolvedDropConstraintActionProto: MessageTypeDefinition
    ResolvedDropFunctionStmtProto: MessageTypeDefinition
    ResolvedDropMaterializedViewStmtProto: MessageTypeDefinition
    ResolvedDropPrimaryKeyActionProto: MessageTypeDefinition
    ResolvedDropRowAccessPolicyStmtProto: MessageTypeDefinition
    ResolvedDropSearchIndexStmtProto: MessageTypeDefinition
    ResolvedDropSnapshotTableStmtProto: MessageTypeDefinition
    ResolvedDropStmtEnums: MessageTypeDefinition
    ResolvedDropStmtProto: MessageTypeDefinition
    ResolvedDropTableFunctionStmtProto: MessageTypeDefinition
    ResolvedExecuteImmediateArgumentProto: MessageTypeDefinition
    ResolvedExecuteImmediateStmtProto: MessageTypeDefinition
    ResolvedExplainStmtProto: MessageTypeDefinition
    ResolvedExportDataStmtProto: MessageTypeDefinition
    ResolvedExportModelStmtProto: MessageTypeDefinition
    ResolvedExprProto: MessageTypeDefinition
    ResolvedExpressionColumnProto: MessageTypeDefinition
    ResolvedExtendedCastElementProto: MessageTypeDefinition
    ResolvedExtendedCastProto: MessageTypeDefinition
    ResolvedFilterFieldArgProto: MessageTypeDefinition
    ResolvedFilterFieldProto: MessageTypeDefinition
    ResolvedFilterScanProto: MessageTypeDefinition
    ResolvedFilterUsingActionProto: MessageTypeDefinition
    ResolvedFlattenProto: MessageTypeDefinition
    ResolvedFlattenedArgProto: MessageTypeDefinition
    ResolvedForeignKeyEnums: MessageTypeDefinition
    ResolvedForeignKeyProto: MessageTypeDefinition
    ResolvedFunctionArgumentProto: MessageTypeDefinition
    ResolvedFunctionCallBaseEnums: MessageTypeDefinition
    ResolvedFunctionCallBaseProto: MessageTypeDefinition
    ResolvedFunctionCallInfoProto: MessageTypeDefinition
    ResolvedFunctionCallProto: MessageTypeDefinition
    ResolvedFunctionSignatureHolderProto: MessageTypeDefinition
    ResolvedGeneratedColumnInfoEnums: MessageTypeDefinition
    ResolvedGeneratedColumnInfoProto: MessageTypeDefinition
    ResolvedGetJsonFieldProto: MessageTypeDefinition
    ResolvedGetProtoFieldProto: MessageTypeDefinition
    ResolvedGetStructFieldProto: MessageTypeDefinition
    ResolvedGrantOrRevokeStmtProto: MessageTypeDefinition
    ResolvedGrantStmtProto: MessageTypeDefinition
    ResolvedGrantToActionProto: MessageTypeDefinition
    ResolvedGroupRowsScanProto: MessageTypeDefinition
    ResolvedGroupingSetProto: MessageTypeDefinition
    ResolvedImportStmtEnums: MessageTypeDefinition
    ResolvedImportStmtProto: MessageTypeDefinition
    ResolvedIndexItemProto: MessageTypeDefinition
    ResolvedInlineLambdaProto: MessageTypeDefinition
    ResolvedInsertRowProto: MessageTypeDefinition
    ResolvedInsertStmtEnums: MessageTypeDefinition
    ResolvedInsertStmtProto: MessageTypeDefinition
    ResolvedJoinScanEnums: MessageTypeDefinition
    ResolvedJoinScanProto: MessageTypeDefinition
    ResolvedLimitOffsetScanProto: MessageTypeDefinition
    ResolvedLiteralProto: MessageTypeDefinition
    ResolvedMakeProtoFieldProto: MessageTypeDefinition
    ResolvedMakeProtoProto: MessageTypeDefinition
    ResolvedMakeStructProto: MessageTypeDefinition
    ResolvedMergeStmtProto: MessageTypeDefinition
    ResolvedMergeWhenEnums: MessageTypeDefinition
    ResolvedMergeWhenProto: MessageTypeDefinition
    ResolvedModelProto: MessageTypeDefinition
    ResolvedModuleStmtProto: MessageTypeDefinition
    ResolvedNodeKind: EnumTypeDefinition
    ResolvedNodeProto: MessageTypeDefinition
    ResolvedNonScalarFunctionCallBaseEnums: MessageTypeDefinition
    ResolvedNonScalarFunctionCallBaseProto: MessageTypeDefinition
    ResolvedOptionProto: MessageTypeDefinition
    ResolvedOrderByItemEnums: MessageTypeDefinition
    ResolvedOrderByItemProto: MessageTypeDefinition
    ResolvedOrderByScanProto: MessageTypeDefinition
    ResolvedOutputColumnProto: MessageTypeDefinition
    ResolvedParameterProto: MessageTypeDefinition
    ResolvedPivotColumnProto: MessageTypeDefinition
    ResolvedPivotScanProto: MessageTypeDefinition
    ResolvedPrimaryKeyProto: MessageTypeDefinition
    ResolvedPrivilegeProto: MessageTypeDefinition
    ResolvedProjectScanProto: MessageTypeDefinition
    ResolvedQueryStmtProto: MessageTypeDefinition
    ResolvedRecursiveRefScanProto: MessageTypeDefinition
    ResolvedRecursiveScanEnums: MessageTypeDefinition
    ResolvedRecursiveScanProto: MessageTypeDefinition
    ResolvedRelationArgumentScanProto: MessageTypeDefinition
    ResolvedRenameStmtProto: MessageTypeDefinition
    ResolvedRenameToActionProto: MessageTypeDefinition
    ResolvedReplaceFieldItemProto: MessageTypeDefinition
    ResolvedReplaceFieldProto: MessageTypeDefinition
    ResolvedReturningClauseProto: MessageTypeDefinition
    ResolvedRevokeFromActionProto: MessageTypeDefinition
    ResolvedRevokeStmtProto: MessageTypeDefinition
    ResolvedRollbackStmtProto: MessageTypeDefinition
    ResolvedRunBatchStmtProto: MessageTypeDefinition
    ResolvedSampleScanEnums: MessageTypeDefinition
    ResolvedSampleScanProto: MessageTypeDefinition
    ResolvedScanProto: MessageTypeDefinition
    ResolvedSetAsActionProto: MessageTypeDefinition
    ResolvedSetOperationItemProto: MessageTypeDefinition
    ResolvedSetOperationScanEnums: MessageTypeDefinition
    ResolvedSetOperationScanProto: MessageTypeDefinition
    ResolvedSetOptionsActionProto: MessageTypeDefinition
    ResolvedSetTransactionStmtProto: MessageTypeDefinition
    ResolvedShowStmtProto: MessageTypeDefinition
    ResolvedSingleRowScanProto: MessageTypeDefinition
    ResolvedStartBatchStmtProto: MessageTypeDefinition
    ResolvedStatementEnums: MessageTypeDefinition
    ResolvedStatementProto: MessageTypeDefinition
    ResolvedSubqueryExprEnums: MessageTypeDefinition
    ResolvedSubqueryExprProto: MessageTypeDefinition
    ResolvedSystemVariableProto: MessageTypeDefinition
    ResolvedTVFScanProto: MessageTypeDefinition
    ResolvedTableAndColumnInfoProto: MessageTypeDefinition
    ResolvedTableScanProto: MessageTypeDefinition
    ResolvedTruncateStmtProto: MessageTypeDefinition
    ResolvedUnnestItemProto: MessageTypeDefinition
    ResolvedUnpivotArgProto: MessageTypeDefinition
    ResolvedUnpivotScanProto: MessageTypeDefinition
    ResolvedUpdateArrayItemProto: MessageTypeDefinition
    ResolvedUpdateItemProto: MessageTypeDefinition
    ResolvedUpdateStmtProto: MessageTypeDefinition
    ResolvedWindowFrameEnums: MessageTypeDefinition
    ResolvedWindowFrameExprEnums: MessageTypeDefinition
    ResolvedWindowFrameExprProto: MessageTypeDefinition
    ResolvedWindowFrameProto: MessageTypeDefinition
    ResolvedWindowOrderingProto: MessageTypeDefinition
    ResolvedWindowPartitioningProto: MessageTypeDefinition
    ResolvedWithEntryProto: MessageTypeDefinition
    ResolvedWithPartitionColumnsProto: MessageTypeDefinition
    ResolvedWithRefScanProto: MessageTypeDefinition
    ResolvedWithScanProto: MessageTypeDefinition
    SignatureArgumentKind: EnumTypeDefinition
    SimpleAnonymizationInfoProto: MessageTypeDefinition
    SimpleCatalogProto: MessageTypeDefinition
    SimpleColumnProto: MessageTypeDefinition
    SimpleConstantProto: MessageTypeDefinition
    SimpleTableProto: MessageTypeDefinition
    SimpleValueProto: MessageTypeDefinition
    StatementContext: EnumTypeDefinition
    StringTypeParametersProto: MessageTypeDefinition
    StructFieldProto: MessageTypeDefinition
    StructTypeProto: MessageTypeDefinition
    TVFArgumentProto: MessageTypeDefinition
    TVFConnectionProto: MessageTypeDefinition
    TVFDescriptorProto: MessageTypeDefinition
    TVFModelProto: MessageTypeDefinition
    TVFRelationColumnProto: MessageTypeDefinition
    TVFRelationProto: MessageTypeDefinition
    TVFSignatureOptionsProto: MessageTypeDefinition
    TVFSignatureProto: MessageTypeDefinition
    TableRefProto: MessageTypeDefinition
    TableValuedFunctionProto: MessageTypeDefinition
    TableValuedFunctionRefProto: MessageTypeDefinition
    TypeKind: EnumTypeDefinition
    TypeParametersProto: MessageTypeDefinition
    TypeProto: MessageTypeDefinition
    ValueProto: MessageTypeDefinition
    ValueWithTypeProto: MessageTypeDefinition
    ZetaSQLBuiltinFunctionOptionsProto: MessageTypeDefinition
    local_service: {
      AnalyzeRequest: MessageTypeDefinition
      AnalyzeResponse: MessageTypeDefinition
      AnalyzerOptionsRequest: MessageTypeDefinition
      BuildSqlRequest: MessageTypeDefinition
      BuildSqlResponse: MessageTypeDefinition
      DescriptorPoolIdList: MessageTypeDefinition
      DescriptorPoolListProto: MessageTypeDefinition
      EvaluateRequest: MessageTypeDefinition
      EvaluateRequestBatch: MessageTypeDefinition
      EvaluateResponse: MessageTypeDefinition
      EvaluateResponseBatch: MessageTypeDefinition
      ExtractTableNamesFromNextStatementRequest: MessageTypeDefinition
      ExtractTableNamesFromNextStatementResponse: MessageTypeDefinition
      ExtractTableNamesFromStatementRequest: MessageTypeDefinition
      ExtractTableNamesFromStatementResponse: MessageTypeDefinition
      FormatSqlRequest: MessageTypeDefinition
      FormatSqlResponse: MessageTypeDefinition
      GetBuiltinFunctionsResponse: MessageTypeDefinition
      LanguageOptionsRequest: MessageTypeDefinition
      PrepareRequest: MessageTypeDefinition
      PrepareResponse: MessageTypeDefinition
      PreparedState: MessageTypeDefinition
      RegisterCatalogRequest: MessageTypeDefinition
      RegisterResponse: MessageTypeDefinition
      TableFromProtoRequest: MessageTypeDefinition
      UnprepareRequest: MessageTypeDefinition
      UnregisterRequest: MessageTypeDefinition
      ZetaSqlLocalService: SubtypeConstructor<typeof grpc.Client, _zetasql_local_service_ZetaSqlLocalServiceClient> & { service: _zetasql_local_service_ZetaSqlLocalServiceDefinition }
    }
  }
}

