// Original file: src/protos/zetasql/parser/ast_enums.proto

export enum SchemaObjectKind {
  __SchemaObjectKind__switch_must_have_a_default__ = -1,
  kInvalidSchemaObjectKind = 1,
  kAggregateFunction = 2,
  kConstant = 3,
  kDatabase = 4,
  kExternalTable = 5,
  kFunction = 6,
  kIndex = 7,
  kMaterializedView = 8,
  kModel = 9,
  kProcedure = 10,
  kSchema = 11,
  kTable = 12,
  kTableFunction = 13,
  kView = 14,
  kSnapshotTable = 15,
}
