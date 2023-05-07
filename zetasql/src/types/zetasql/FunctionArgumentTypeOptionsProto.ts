// Original file: src/zetasql/protos/zetasql/proto/function.proto

import type { _zetasql_FunctionEnums_ArgumentCardinality, _zetasql_FunctionEnums_ArgumentCardinality__Output } from '../zetasql/FunctionEnums';
import type { TVFRelationProto as _zetasql_TVFRelationProto, TVFRelationProto__Output as _zetasql_TVFRelationProto__Output } from '../zetasql/TVFRelationProto';
import type { ParseLocationRangeProto as _zetasql_ParseLocationRangeProto, ParseLocationRangeProto__Output as _zetasql_ParseLocationRangeProto__Output } from '../zetasql/ParseLocationRangeProto';
import type { _zetasql_FunctionEnums_ProcedureArgumentMode, _zetasql_FunctionEnums_ProcedureArgumentMode__Output } from '../zetasql/FunctionEnums';
import type { ValueProto as _zetasql_ValueProto, ValueProto__Output as _zetasql_ValueProto__Output } from '../zetasql/ValueProto';
import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';
import type { _zetasql_FunctionEnums_ArgumentCollationMode, _zetasql_FunctionEnums_ArgumentCollationMode__Output } from '../zetasql/FunctionEnums';
import type { _zetasql_FunctionEnums_NamedArgumentKind, _zetasql_FunctionEnums_NamedArgumentKind__Output } from '../zetasql/FunctionEnums';
import type { Long } from '@grpc/proto-loader';

export interface FunctionArgumentTypeOptionsProto {
  'cardinality'?: (_zetasql_FunctionEnums_ArgumentCardinality);
  'mustBeConstant'?: (boolean);
  'mustBeNonNull'?: (boolean);
  'isNotAggregate'?: (boolean);
  'mustSupportEquality'?: (boolean);
  'mustSupportOrdering'?: (boolean);
  'minValue'?: (number | string | Long);
  'maxValue'?: (number | string | Long);
  'extraRelationInputColumnsAllowed'?: (boolean);
  'relationInputSchema'?: (_zetasql_TVFRelationProto | null);
  'argumentName'?: (string);
  'argumentNameParseLocation'?: (_zetasql_ParseLocationRangeProto | null);
  'argumentTypeParseLocation'?: (_zetasql_ParseLocationRangeProto | null);
  'procedureArgumentMode'?: (_zetasql_FunctionEnums_ProcedureArgumentMode);
  'argumentNameIsMandatory'?: (boolean);
  'descriptorResolutionTableOffset'?: (number);
  'defaultValue'?: (_zetasql_ValueProto | null);
  'defaultValueType'?: (_zetasql_TypeProto | null);
  'argumentCollationMode'?: (_zetasql_FunctionEnums_ArgumentCollationMode);
  'usesArrayElementForCollation'?: (boolean);
  'mustSupportGrouping'?: (boolean);
  'arrayElementMustSupportEquality'?: (boolean);
  'arrayElementMustSupportOrdering'?: (boolean);
  'arrayElementMustSupportGrouping'?: (boolean);
  'namedArgumentKind'?: (_zetasql_FunctionEnums_NamedArgumentKind);
}

export interface FunctionArgumentTypeOptionsProto__Output {
  'cardinality': (_zetasql_FunctionEnums_ArgumentCardinality__Output);
  'mustBeConstant': (boolean);
  'mustBeNonNull': (boolean);
  'isNotAggregate': (boolean);
  'mustSupportEquality': (boolean);
  'mustSupportOrdering': (boolean);
  'minValue': (Long);
  'maxValue': (Long);
  'extraRelationInputColumnsAllowed': (boolean);
  'relationInputSchema': (_zetasql_TVFRelationProto__Output | null);
  'argumentName': (string);
  'argumentNameParseLocation': (_zetasql_ParseLocationRangeProto__Output | null);
  'argumentTypeParseLocation': (_zetasql_ParseLocationRangeProto__Output | null);
  'procedureArgumentMode': (_zetasql_FunctionEnums_ProcedureArgumentMode__Output);
  'argumentNameIsMandatory': (boolean);
  'descriptorResolutionTableOffset': (number);
  'defaultValue': (_zetasql_ValueProto__Output | null);
  'defaultValueType': (_zetasql_TypeProto__Output | null);
  'argumentCollationMode': (_zetasql_FunctionEnums_ArgumentCollationMode__Output);
  'usesArrayElementForCollation': (boolean);
  'mustSupportGrouping': (boolean);
  'arrayElementMustSupportEquality': (boolean);
  'arrayElementMustSupportOrdering': (boolean);
  'arrayElementMustSupportGrouping': (boolean);
  'namedArgumentKind': (_zetasql_FunctionEnums_NamedArgumentKind__Output);
}
