// Original file: src/protos/zetasql/resolved_ast/resolved_node_kind.proto

export enum ResolvedNodeKind {
  RESOLVED_LITERAL = 3,
  RESOLVED_PARAMETER = 4,
  RESOLVED_EXPRESSION_COLUMN = 5,
  RESOLVED_CATALOG_COLUMN_REF = 206,
  RESOLVED_COLUMN_REF = 6,
  RESOLVED_CONSTANT = 103,
  RESOLVED_SYSTEM_VARIABLE = 139,
  RESOLVED_INLINE_LAMBDA = 159,
  RESOLVED_FILTER_FIELD_ARG = 173,
  RESOLVED_FILTER_FIELD = 174,
  RESOLVED_FUNCTION_CALL = 8,
  RESOLVED_AGGREGATE_FUNCTION_CALL = 9,
  RESOLVED_ANALYTIC_FUNCTION_CALL = 10,
  RESOLVED_EXTENDED_CAST_ELEMENT = 151,
  RESOLVED_EXTENDED_CAST = 158,
  RESOLVED_CAST = 11,
  RESOLVED_MAKE_STRUCT = 12,
  RESOLVED_MAKE_PROTO = 13,
  RESOLVED_MAKE_PROTO_FIELD = 14,
  RESOLVED_GET_STRUCT_FIELD = 15,
  RESOLVED_GET_PROTO_FIELD = 16,
  RESOLVED_GET_JSON_FIELD = 165,
  RESOLVED_FLATTEN = 149,
  RESOLVED_FLATTENED_ARG = 150,
  RESOLVED_REPLACE_FIELD_ITEM = 128,
  RESOLVED_REPLACE_FIELD = 129,
  RESOLVED_SUBQUERY_EXPR = 17,
  RESOLVED_WITH_EXPR = 197,
  RESOLVED_EXECUTE_AS_ROLE_SCAN = 207,
  RESOLVED_MODEL = 109,
  RESOLVED_CONNECTION = 141,
  RESOLVED_DESCRIPTOR = 144,
  RESOLVED_SINGLE_ROW_SCAN = 19,
  RESOLVED_TABLE_SCAN = 20,
  RESOLVED_JOIN_SCAN = 21,
  RESOLVED_ARRAY_SCAN = 22,
  RESOLVED_COLUMN_HOLDER = 23,
  RESOLVED_FILTER_SCAN = 24,
  RESOLVED_GROUPING_SET = 93,
  RESOLVED_AGGREGATE_SCAN = 25,
  RESOLVED_ANONYMIZED_AGGREGATE_SCAN = 112,
  RESOLVED_SET_OPERATION_ITEM = 94,
  RESOLVED_SET_OPERATION_SCAN = 26,
  RESOLVED_ORDER_BY_SCAN = 27,
  RESOLVED_LIMIT_OFFSET_SCAN = 28,
  RESOLVED_WITH_REF_SCAN = 29,
  RESOLVED_ANALYTIC_SCAN = 30,
  RESOLVED_SAMPLE_SCAN = 31,
  RESOLVED_COMPUTED_COLUMN = 32,
  RESOLVED_ORDER_BY_ITEM = 33,
  RESOLVED_COLUMN_ANNOTATIONS = 104,
  RESOLVED_GENERATED_COLUMN_INFO = 105,
  RESOLVED_COLUMN_DEFAULT_VALUE = 188,
  RESOLVED_COLUMN_DEFINITION = 91,
  RESOLVED_PRIMARY_KEY = 92,
  RESOLVED_FOREIGN_KEY = 110,
  RESOLVED_CHECK_CONSTRAINT = 113,
  RESOLVED_OUTPUT_COLUMN = 34,
  RESOLVED_PROJECT_SCAN = 35,
  RESOLVED_TVFSCAN = 81,
  RESOLVED_GROUP_ROWS_SCAN = 176,
  RESOLVED_FUNCTION_ARGUMENT = 82,
  RESOLVED_EXPLAIN_STMT = 37,
  RESOLVED_QUERY_STMT = 38,
  RESOLVED_CREATE_DATABASE_STMT = 95,
  RESOLVED_INDEX_ITEM = 96,
  RESOLVED_UNNEST_ITEM = 126,
  RESOLVED_CREATE_INDEX_STMT = 97,
  RESOLVED_CREATE_SCHEMA_STMT = 157,
  RESOLVED_CREATE_TABLE_STMT = 90,
  RESOLVED_CREATE_TABLE_AS_SELECT_STMT = 40,
  RESOLVED_CREATE_MODEL_STMT = 107,
  RESOLVED_CREATE_VIEW_STMT = 41,
  RESOLVED_WITH_PARTITION_COLUMNS = 153,
  RESOLVED_CREATE_SNAPSHOT_TABLE_STMT = 182,
  RESOLVED_CREATE_EXTERNAL_TABLE_STMT = 42,
  RESOLVED_EXPORT_MODEL_STMT = 152,
  RESOLVED_EXPORT_DATA_STMT = 43,
  RESOLVED_DEFINE_TABLE_STMT = 44,
  RESOLVED_DESCRIBE_STMT = 45,
  RESOLVED_SHOW_STMT = 46,
  RESOLVED_BEGIN_STMT = 47,
  RESOLVED_SET_TRANSACTION_STMT = 120,
  RESOLVED_COMMIT_STMT = 48,
  RESOLVED_ROLLBACK_STMT = 49,
  RESOLVED_START_BATCH_STMT = 122,
  RESOLVED_RUN_BATCH_STMT = 123,
  RESOLVED_ABORT_BATCH_STMT = 124,
  RESOLVED_DROP_STMT = 50,
  RESOLVED_DROP_MATERIALIZED_VIEW_STMT = 121,
  RESOLVED_DROP_SNAPSHOT_TABLE_STMT = 183,
  RESOLVED_RECURSIVE_REF_SCAN = 147,
  RESOLVED_RECURSIVE_SCAN = 148,
  RESOLVED_WITH_SCAN = 51,
  RESOLVED_WITH_ENTRY = 52,
  RESOLVED_OPTION = 53,
  RESOLVED_WINDOW_PARTITIONING = 54,
  RESOLVED_WINDOW_ORDERING = 55,
  RESOLVED_WINDOW_FRAME = 56,
  RESOLVED_ANALYTIC_FUNCTION_GROUP = 57,
  RESOLVED_WINDOW_FRAME_EXPR = 58,
  RESOLVED_DMLVALUE = 59,
  RESOLVED_DMLDEFAULT = 60,
  RESOLVED_ASSERT_STMT = 98,
  RESOLVED_ASSERT_ROWS_MODIFIED = 61,
  RESOLVED_INSERT_ROW = 62,
  RESOLVED_INSERT_STMT = 63,
  RESOLVED_DELETE_STMT = 64,
  RESOLVED_UPDATE_ITEM = 65,
  RESOLVED_UPDATE_ARRAY_ITEM = 102,
  RESOLVED_UPDATE_STMT = 66,
  RESOLVED_MERGE_WHEN = 100,
  RESOLVED_MERGE_STMT = 101,
  RESOLVED_TRUNCATE_STMT = 133,
  RESOLVED_OBJECT_UNIT = 200,
  RESOLVED_PRIVILEGE = 67,
  RESOLVED_GRANT_STMT = 69,
  RESOLVED_REVOKE_STMT = 70,
  RESOLVED_ALTER_DATABASE_STMT = 134,
  RESOLVED_ALTER_MATERIALIZED_VIEW_STMT = 127,
  RESOLVED_ALTER_SCHEMA_STMT = 160,
  RESOLVED_ALTER_MODEL_STMT = 205,
  RESOLVED_ALTER_TABLE_STMT = 115,
  RESOLVED_ALTER_VIEW_STMT = 118,
  RESOLVED_SET_OPTIONS_ACTION = 117,
  RESOLVED_ALTER_SUB_ENTITY_ACTION = 202,
  RESOLVED_ADD_SUB_ENTITY_ACTION = 203,
  RESOLVED_DROP_SUB_ENTITY_ACTION = 204,
  RESOLVED_ADD_COLUMN_ACTION = 131,
  RESOLVED_ADD_CONSTRAINT_ACTION = 163,
  RESOLVED_DROP_CONSTRAINT_ACTION = 164,
  RESOLVED_DROP_PRIMARY_KEY_ACTION = 184,
  RESOLVED_ALTER_COLUMN_OPTIONS_ACTION = 169,
  RESOLVED_ALTER_COLUMN_DROP_NOT_NULL_ACTION = 178,
  RESOLVED_ALTER_COLUMN_SET_DATA_TYPE_ACTION = 181,
  RESOLVED_ALTER_COLUMN_SET_DEFAULT_ACTION = 198,
  RESOLVED_ALTER_COLUMN_DROP_DEFAULT_ACTION = 199,
  RESOLVED_DROP_COLUMN_ACTION = 132,
  RESOLVED_RENAME_COLUMN_ACTION = 185,
  RESOLVED_SET_AS_ACTION = 156,
  RESOLVED_SET_COLLATE_CLAUSE = 187,
  RESOLVED_ALTER_TABLE_SET_OPTIONS_STMT = 71,
  RESOLVED_RENAME_STMT = 72,
  RESOLVED_CREATE_PRIVILEGE_RESTRICTION_STMT = 191,
  RESOLVED_CREATE_ROW_ACCESS_POLICY_STMT = 73,
  RESOLVED_DROP_PRIVILEGE_RESTRICTION_STMT = 192,
  RESOLVED_DROP_ROW_ACCESS_POLICY_STMT = 74,
  RESOLVED_DROP_SEARCH_INDEX_STMT = 190,
  RESOLVED_GRANT_TO_ACTION = 135,
  RESOLVED_RESTRICT_TO_ACTION = 193,
  RESOLVED_ADD_TO_RESTRICTEE_LIST_ACTION = 194,
  RESOLVED_REMOVE_FROM_RESTRICTEE_LIST_ACTION = 195,
  RESOLVED_FILTER_USING_ACTION = 136,
  RESOLVED_REVOKE_FROM_ACTION = 137,
  RESOLVED_RENAME_TO_ACTION = 138,
  RESOLVED_ALTER_PRIVILEGE_RESTRICTION_STMT = 196,
  RESOLVED_ALTER_ROW_ACCESS_POLICY_STMT = 75,
  RESOLVED_ALTER_ALL_ROW_ACCESS_POLICIES_STMT = 145,
  RESOLVED_CREATE_CONSTANT_STMT = 99,
  RESOLVED_CREATE_FUNCTION_STMT = 76,
  RESOLVED_ARGUMENT_DEF = 77,
  RESOLVED_ARGUMENT_REF = 78,
  RESOLVED_CREATE_TABLE_FUNCTION_STMT = 88,
  RESOLVED_RELATION_ARGUMENT_SCAN = 89,
  RESOLVED_ARGUMENT_LIST = 79,
  RESOLVED_FUNCTION_SIGNATURE_HOLDER = 84,
  RESOLVED_DROP_FUNCTION_STMT = 80,
  RESOLVED_DROP_TABLE_FUNCTION_STMT = 175,
  RESOLVED_CALL_STMT = 83,
  RESOLVED_IMPORT_STMT = 86,
  RESOLVED_MODULE_STMT = 87,
  RESOLVED_AGGREGATE_HAVING_MODIFIER = 85,
  RESOLVED_CREATE_MATERIALIZED_VIEW_STMT = 119,
  RESOLVED_CREATE_PROCEDURE_STMT = 125,
  RESOLVED_EXECUTE_IMMEDIATE_ARGUMENT = 143,
  RESOLVED_EXECUTE_IMMEDIATE_STMT = 140,
  RESOLVED_ASSIGNMENT_STMT = 142,
  RESOLVED_CREATE_ENTITY_STMT = 154,
  RESOLVED_ALTER_ENTITY_STMT = 155,
  RESOLVED_PIVOT_COLUMN = 166,
  RESOLVED_PIVOT_SCAN = 161,
  RESOLVED_RETURNING_CLAUSE = 170,
  RESOLVED_UNPIVOT_ARG = 171,
  RESOLVED_UNPIVOT_SCAN = 172,
  RESOLVED_CLONE_DATA_STMT = 177,
  RESOLVED_TABLE_AND_COLUMN_INFO = 179,
  RESOLVED_ANALYZE_STMT = 180,
  RESOLVED_AUX_LOAD_DATA_STMT = 186,
  __ResolvedNodeKind__switch_must_have_default__ = -1,
}
