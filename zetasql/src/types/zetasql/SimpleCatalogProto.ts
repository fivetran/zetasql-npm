// Original file: src/zetasql/protos/zetasql/proto/simple_catalog.proto

import type { SimpleTableProto as _zetasql_SimpleTableProto, SimpleTableProto__Output as _zetasql_SimpleTableProto__Output } from '../zetasql/SimpleTableProto';
import type { SimpleCatalogProto as _zetasql_SimpleCatalogProto, SimpleCatalogProto__Output as _zetasql_SimpleCatalogProto__Output } from '../zetasql/SimpleCatalogProto';
import type { ZetaSQLBuiltinFunctionOptionsProto as _zetasql_ZetaSQLBuiltinFunctionOptionsProto, ZetaSQLBuiltinFunctionOptionsProto__Output as _zetasql_ZetaSQLBuiltinFunctionOptionsProto__Output } from '../zetasql/ZetaSQLBuiltinFunctionOptionsProto';
import type { FunctionProto as _zetasql_FunctionProto, FunctionProto__Output as _zetasql_FunctionProto__Output } from '../zetasql/FunctionProto';
import type { ProcedureProto as _zetasql_ProcedureProto, ProcedureProto__Output as _zetasql_ProcedureProto__Output } from '../zetasql/ProcedureProto';
import type { TableValuedFunctionProto as _zetasql_TableValuedFunctionProto, TableValuedFunctionProto__Output as _zetasql_TableValuedFunctionProto__Output } from '../zetasql/TableValuedFunctionProto';
import type { SimpleConstantProto as _zetasql_SimpleConstantProto, SimpleConstantProto__Output as _zetasql_SimpleConstantProto__Output } from '../zetasql/SimpleConstantProto';
import type { SimpleConnectionProto as _zetasql_SimpleConnectionProto, SimpleConnectionProto__Output as _zetasql_SimpleConnectionProto__Output } from '../zetasql/SimpleConnectionProto';
import type { SimpleModelProto as _zetasql_SimpleModelProto, SimpleModelProto__Output as _zetasql_SimpleModelProto__Output } from '../zetasql/SimpleModelProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';

export interface _zetasql_SimpleCatalogProto_NamedTypeProto {
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
}

export interface _zetasql_SimpleCatalogProto_NamedTypeProto__Output {
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
}

export interface SimpleCatalogProto {
  'name'?: (string);
  'table'?: (_zetasql_SimpleTableProto)[];
  'namedType'?: (_zetasql_SimpleCatalogProto_NamedTypeProto)[];
  'catalog'?: (_zetasql_SimpleCatalogProto)[];
  'builtinFunctionOptions'?: (_zetasql_ZetaSQLBuiltinFunctionOptionsProto | null);
  'customFunction'?: (_zetasql_FunctionProto)[];
  'fileDescriptorSetIndex'?: (number);
  'procedure'?: (_zetasql_ProcedureProto)[];
  'customTvf'?: (_zetasql_TableValuedFunctionProto)[];
  'constant'?: (_zetasql_SimpleConstantProto)[];
  'connection'?: (_zetasql_SimpleConnectionProto)[];
  'model'?: (_zetasql_SimpleModelProto)[];
}

export interface SimpleCatalogProto__Output {
  'name': (string);
  'table': (_zetasql_SimpleTableProto__Output)[];
  'namedType': (_zetasql_SimpleCatalogProto_NamedTypeProto__Output)[];
  'catalog': (_zetasql_SimpleCatalogProto__Output)[];
  'builtinFunctionOptions': (_zetasql_ZetaSQLBuiltinFunctionOptionsProto__Output | null);
  'customFunction': (_zetasql_FunctionProto__Output)[];
  'fileDescriptorSetIndex': (number);
  'procedure': (_zetasql_ProcedureProto__Output)[];
  'customTvf': (_zetasql_TableValuedFunctionProto__Output)[];
  'constant': (_zetasql_SimpleConstantProto__Output)[];
  'connection': (_zetasql_SimpleConnectionProto__Output)[];
  'model': (_zetasql_SimpleModelProto__Output)[];
}
