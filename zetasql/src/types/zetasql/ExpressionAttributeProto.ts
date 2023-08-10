// Original file: src/zetasql/protos/zetasql/public/simple_table.proto


// Original file: src/zetasql/protos/zetasql/public/simple_table.proto

export const _zetasql_ExpressionAttributeProto_ExpressionKind = {
  DEFAULT: 0,
  GENERATED: 1,
} as const;

export type _zetasql_ExpressionAttributeProto_ExpressionKind =
  | 'DEFAULT'
  | 0
  | 'GENERATED'
  | 1

export type _zetasql_ExpressionAttributeProto_ExpressionKind__Output = typeof _zetasql_ExpressionAttributeProto_ExpressionKind[keyof typeof _zetasql_ExpressionAttributeProto_ExpressionKind]

export interface ExpressionAttributeProto {
  'expressionString'?: (string);
  'expressionKind'?: (_zetasql_ExpressionAttributeProto_ExpressionKind);
}

export interface ExpressionAttributeProto__Output {
  'expressionString': (string);
  'expressionKind': (_zetasql_ExpressionAttributeProto_ExpressionKind__Output);
}
