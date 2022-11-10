// Original file: src/protos/zetasql/proto/options.proto

import type { TypeProto as _zetasql_TypeProto, TypeProto__Output as _zetasql_TypeProto__Output } from '../zetasql/TypeProto';

export interface _zetasql_AllowedHintsAndOptionsProto_HintProto {
  'qualifier'?: (string);
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
  'allowUnqualified'?: (boolean);
}

export interface _zetasql_AllowedHintsAndOptionsProto_HintProto__Output {
  'qualifier': (string);
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
  'allowUnqualified': (boolean);
}

export interface _zetasql_AllowedHintsAndOptionsProto_OptionProto {
  'name'?: (string);
  'type'?: (_zetasql_TypeProto | null);
}

export interface _zetasql_AllowedHintsAndOptionsProto_OptionProto__Output {
  'name': (string);
  'type': (_zetasql_TypeProto__Output | null);
}

export interface AllowedHintsAndOptionsProto {
  'disallowUnknownOptions'?: (boolean);
  'disallowUnknownHintsWithQualifier'?: (string)[];
  'hint'?: (_zetasql_AllowedHintsAndOptionsProto_HintProto)[];
  'option'?: (_zetasql_AllowedHintsAndOptionsProto_OptionProto)[];
  'anonymizationOption'?: (_zetasql_AllowedHintsAndOptionsProto_OptionProto)[];
}

export interface AllowedHintsAndOptionsProto__Output {
  'disallowUnknownOptions': (boolean);
  'disallowUnknownHintsWithQualifier': (string)[];
  'hint': (_zetasql_AllowedHintsAndOptionsProto_HintProto__Output)[];
  'option': (_zetasql_AllowedHintsAndOptionsProto_OptionProto__Output)[];
  'anonymizationOption': (_zetasql_AllowedHintsAndOptionsProto_OptionProto__Output)[];
}
