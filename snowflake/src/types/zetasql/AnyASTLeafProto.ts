// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTIntLiteralProto as _zetasql_ASTIntLiteralProto, ASTIntLiteralProto__Output as _zetasql_ASTIntLiteralProto__Output } from '../zetasql/ASTIntLiteralProto';
import type { ASTBooleanLiteralProto as _zetasql_ASTBooleanLiteralProto, ASTBooleanLiteralProto__Output as _zetasql_ASTBooleanLiteralProto__Output } from '../zetasql/ASTBooleanLiteralProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';
import type { ASTStarProto as _zetasql_ASTStarProto, ASTStarProto__Output as _zetasql_ASTStarProto__Output } from '../zetasql/ASTStarProto';
import type { ASTFloatLiteralProto as _zetasql_ASTFloatLiteralProto, ASTFloatLiteralProto__Output as _zetasql_ASTFloatLiteralProto__Output } from '../zetasql/ASTFloatLiteralProto';
import type { ASTNullLiteralProto as _zetasql_ASTNullLiteralProto, ASTNullLiteralProto__Output as _zetasql_ASTNullLiteralProto__Output } from '../zetasql/ASTNullLiteralProto';
import type { ASTNumericLiteralProto as _zetasql_ASTNumericLiteralProto, ASTNumericLiteralProto__Output as _zetasql_ASTNumericLiteralProto__Output } from '../zetasql/ASTNumericLiteralProto';
import type { ASTBigNumericLiteralProto as _zetasql_ASTBigNumericLiteralProto, ASTBigNumericLiteralProto__Output as _zetasql_ASTBigNumericLiteralProto__Output } from '../zetasql/ASTBigNumericLiteralProto';
import type { ASTBytesLiteralProto as _zetasql_ASTBytesLiteralProto, ASTBytesLiteralProto__Output as _zetasql_ASTBytesLiteralProto__Output } from '../zetasql/ASTBytesLiteralProto';
import type { ASTMaxLiteralProto as _zetasql_ASTMaxLiteralProto, ASTMaxLiteralProto__Output as _zetasql_ASTMaxLiteralProto__Output } from '../zetasql/ASTMaxLiteralProto';
import type { ASTJSONLiteralProto as _zetasql_ASTJSONLiteralProto, ASTJSONLiteralProto__Output as _zetasql_ASTJSONLiteralProto__Output } from '../zetasql/ASTJSONLiteralProto';
import type { ASTIndexAllColumnsProto as _zetasql_ASTIndexAllColumnsProto, ASTIndexAllColumnsProto__Output as _zetasql_ASTIndexAllColumnsProto__Output } from '../zetasql/ASTIndexAllColumnsProto';
import type { ASTMacroBodyProto as _zetasql_ASTMacroBodyProto, ASTMacroBodyProto__Output as _zetasql_ASTMacroBodyProto__Output } from '../zetasql/ASTMacroBodyProto';

export interface AnyASTLeafProto {
  'astIntLiteralNode'?: (_zetasql_ASTIntLiteralProto | null);
  'astBooleanLiteralNode'?: (_zetasql_ASTBooleanLiteralProto | null);
  'astStringLiteralNode'?: (_zetasql_ASTStringLiteralProto | null);
  'astStarNode'?: (_zetasql_ASTStarProto | null);
  'astFloatLiteralNode'?: (_zetasql_ASTFloatLiteralProto | null);
  'astNullLiteralNode'?: (_zetasql_ASTNullLiteralProto | null);
  'astNumericLiteralNode'?: (_zetasql_ASTNumericLiteralProto | null);
  'astBignumericLiteralNode'?: (_zetasql_ASTBigNumericLiteralProto | null);
  'astBytesLiteralNode'?: (_zetasql_ASTBytesLiteralProto | null);
  'astMaxLiteralNode'?: (_zetasql_ASTMaxLiteralProto | null);
  'astJsonLiteralNode'?: (_zetasql_ASTJSONLiteralProto | null);
  'astIndexAllColumnsNode'?: (_zetasql_ASTIndexAllColumnsProto | null);
  'astMacroBodyNode'?: (_zetasql_ASTMacroBodyProto | null);
  'node'?: "astIntLiteralNode"|"astBooleanLiteralNode"|"astStringLiteralNode"|"astStarNode"|"astFloatLiteralNode"|"astNullLiteralNode"|"astNumericLiteralNode"|"astBignumericLiteralNode"|"astBytesLiteralNode"|"astMaxLiteralNode"|"astJsonLiteralNode"|"astIndexAllColumnsNode"|"astMacroBodyNode";
}

export interface AnyASTLeafProto__Output {
  'astIntLiteralNode'?: (_zetasql_ASTIntLiteralProto__Output | null);
  'astBooleanLiteralNode'?: (_zetasql_ASTBooleanLiteralProto__Output | null);
  'astStringLiteralNode'?: (_zetasql_ASTStringLiteralProto__Output | null);
  'astStarNode'?: (_zetasql_ASTStarProto__Output | null);
  'astFloatLiteralNode'?: (_zetasql_ASTFloatLiteralProto__Output | null);
  'astNullLiteralNode'?: (_zetasql_ASTNullLiteralProto__Output | null);
  'astNumericLiteralNode'?: (_zetasql_ASTNumericLiteralProto__Output | null);
  'astBignumericLiteralNode'?: (_zetasql_ASTBigNumericLiteralProto__Output | null);
  'astBytesLiteralNode'?: (_zetasql_ASTBytesLiteralProto__Output | null);
  'astMaxLiteralNode'?: (_zetasql_ASTMaxLiteralProto__Output | null);
  'astJsonLiteralNode'?: (_zetasql_ASTJSONLiteralProto__Output | null);
  'astIndexAllColumnsNode'?: (_zetasql_ASTIndexAllColumnsProto__Output | null);
  'astMacroBodyNode'?: (_zetasql_ASTMacroBodyProto__Output | null);
  'node': "astIntLiteralNode"|"astBooleanLiteralNode"|"astStringLiteralNode"|"astStarNode"|"astFloatLiteralNode"|"astNullLiteralNode"|"astNumericLiteralNode"|"astBignumericLiteralNode"|"astBytesLiteralNode"|"astMaxLiteralNode"|"astJsonLiteralNode"|"astIndexAllColumnsNode"|"astMacroBodyNode";
}
