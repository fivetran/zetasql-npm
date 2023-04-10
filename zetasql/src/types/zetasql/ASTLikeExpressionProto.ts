// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTAnySomeAllOpProto as _zetasql_ASTAnySomeAllOpProto, ASTAnySomeAllOpProto__Output as _zetasql_ASTAnySomeAllOpProto__Output } from '../zetasql/ASTAnySomeAllOpProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTInListProto as _zetasql_ASTInListProto, ASTInListProto__Output as _zetasql_ASTInListProto__Output } from '../zetasql/ASTInListProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';
import type { ASTUnnestExpressionProto as _zetasql_ASTUnnestExpressionProto, ASTUnnestExpressionProto__Output as _zetasql_ASTUnnestExpressionProto__Output } from '../zetasql/ASTUnnestExpressionProto';
import type { ASTLocationProto as _zetasql_ASTLocationProto, ASTLocationProto__Output as _zetasql_ASTLocationProto__Output } from '../zetasql/ASTLocationProto';

export interface ASTLikeExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'lhs'?: (_zetasql_AnyASTExpressionProto | null);
  'op'?: (_zetasql_ASTAnySomeAllOpProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'inList'?: (_zetasql_ASTInListProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
  'unnestExpr'?: (_zetasql_ASTUnnestExpressionProto | null);
  'isNot'?: (boolean);
  'likeLocation'?: (_zetasql_ASTLocationProto | null);
}

export interface ASTLikeExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'lhs': (_zetasql_AnyASTExpressionProto__Output | null);
  'op': (_zetasql_ASTAnySomeAllOpProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'inList': (_zetasql_ASTInListProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
  'unnestExpr': (_zetasql_ASTUnnestExpressionProto__Output | null);
  'isNot': (boolean);
  'likeLocation': (_zetasql_ASTLocationProto__Output | null);
}
