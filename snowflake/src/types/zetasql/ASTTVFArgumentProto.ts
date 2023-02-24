// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTTableClauseProto as _zetasql_ASTTableClauseProto, ASTTableClauseProto__Output as _zetasql_ASTTableClauseProto__Output } from '../zetasql/ASTTableClauseProto';
import type { ASTModelClauseProto as _zetasql_ASTModelClauseProto, ASTModelClauseProto__Output as _zetasql_ASTModelClauseProto__Output } from '../zetasql/ASTModelClauseProto';
import type { ASTConnectionClauseProto as _zetasql_ASTConnectionClauseProto, ASTConnectionClauseProto__Output as _zetasql_ASTConnectionClauseProto__Output } from '../zetasql/ASTConnectionClauseProto';
import type { ASTDescriptorProto as _zetasql_ASTDescriptorProto, ASTDescriptorProto__Output as _zetasql_ASTDescriptorProto__Output } from '../zetasql/ASTDescriptorProto';

export interface ASTTVFArgumentProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
  'tableClause'?: (_zetasql_ASTTableClauseProto | null);
  'modelClause'?: (_zetasql_ASTModelClauseProto | null);
  'connectionClause'?: (_zetasql_ASTConnectionClauseProto | null);
  'desc'?: (_zetasql_ASTDescriptorProto | null);
}

export interface ASTTVFArgumentProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
  'tableClause': (_zetasql_ASTTableClauseProto__Output | null);
  'modelClause': (_zetasql_ASTModelClauseProto__Output | null);
  'connectionClause': (_zetasql_ASTConnectionClauseProto__Output | null);
  'desc': (_zetasql_ASTDescriptorProto__Output | null);
}
