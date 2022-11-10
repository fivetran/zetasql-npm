// Original file: null

import type { UninterpretedOption as _google_protobuf_UninterpretedOption, UninterpretedOption__Output as _google_protobuf_UninterpretedOption__Output } from '../../google/protobuf/UninterpretedOption';
import type { OpaqueEnumTypeOptions as _zetasql_OpaqueEnumTypeOptions, OpaqueEnumTypeOptions__Output as _zetasql_OpaqueEnumTypeOptions__Output } from '../../zetasql/OpaqueEnumTypeOptions';

export interface EnumOptions {
  'allowAlias'?: (boolean);
  'deprecated'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOption)[];
  '.zetasql.opaqueEnumTypeOptions'?: (_zetasql_OpaqueEnumTypeOptions | null);
}

export interface EnumOptions__Output {
  'allowAlias': (boolean);
  'deprecated': (boolean);
  'uninterpretedOption': (_google_protobuf_UninterpretedOption__Output)[];
  '.zetasql.opaqueEnumTypeOptions': (_zetasql_OpaqueEnumTypeOptions__Output | null);
}
