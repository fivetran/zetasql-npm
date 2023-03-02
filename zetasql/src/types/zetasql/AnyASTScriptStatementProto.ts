// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTIfStatementProto as _zetasql_ASTIfStatementProto, ASTIfStatementProto__Output as _zetasql_ASTIfStatementProto__Output } from '../zetasql/ASTIfStatementProto';
import type { ASTCaseStatementProto as _zetasql_ASTCaseStatementProto, ASTCaseStatementProto__Output as _zetasql_ASTCaseStatementProto__Output } from '../zetasql/ASTCaseStatementProto';
import type { ASTRaiseStatementProto as _zetasql_ASTRaiseStatementProto, ASTRaiseStatementProto__Output as _zetasql_ASTRaiseStatementProto__Output } from '../zetasql/ASTRaiseStatementProto';
import type { ASTBeginEndBlockProto as _zetasql_ASTBeginEndBlockProto, ASTBeginEndBlockProto__Output as _zetasql_ASTBeginEndBlockProto__Output } from '../zetasql/ASTBeginEndBlockProto';
import type { ASTVariableDeclarationProto as _zetasql_ASTVariableDeclarationProto, ASTVariableDeclarationProto__Output as _zetasql_ASTVariableDeclarationProto__Output } from '../zetasql/ASTVariableDeclarationProto';
import type { AnyASTBreakContinueStatementProto as _zetasql_AnyASTBreakContinueStatementProto, AnyASTBreakContinueStatementProto__Output as _zetasql_AnyASTBreakContinueStatementProto__Output } from '../zetasql/AnyASTBreakContinueStatementProto';
import type { ASTReturnStatementProto as _zetasql_ASTReturnStatementProto, ASTReturnStatementProto__Output as _zetasql_ASTReturnStatementProto__Output } from '../zetasql/ASTReturnStatementProto';
import type { ASTSingleAssignmentProto as _zetasql_ASTSingleAssignmentProto, ASTSingleAssignmentProto__Output as _zetasql_ASTSingleAssignmentProto__Output } from '../zetasql/ASTSingleAssignmentProto';
import type { ASTAssignmentFromStructProto as _zetasql_ASTAssignmentFromStructProto, ASTAssignmentFromStructProto__Output as _zetasql_ASTAssignmentFromStructProto__Output } from '../zetasql/ASTAssignmentFromStructProto';
import type { AnyASTLoopStatementProto as _zetasql_AnyASTLoopStatementProto, AnyASTLoopStatementProto__Output as _zetasql_AnyASTLoopStatementProto__Output } from '../zetasql/AnyASTLoopStatementProto';

export interface AnyASTScriptStatementProto {
  'astIfStatementNode'?: (_zetasql_ASTIfStatementProto | null);
  'astCaseStatementNode'?: (_zetasql_ASTCaseStatementProto | null);
  'astRaiseStatementNode'?: (_zetasql_ASTRaiseStatementProto | null);
  'astBeginEndBlockNode'?: (_zetasql_ASTBeginEndBlockProto | null);
  'astVariableDeclarationNode'?: (_zetasql_ASTVariableDeclarationProto | null);
  'astBreakContinueStatementNode'?: (_zetasql_AnyASTBreakContinueStatementProto | null);
  'astReturnStatementNode'?: (_zetasql_ASTReturnStatementProto | null);
  'astSingleAssignmentNode'?: (_zetasql_ASTSingleAssignmentProto | null);
  'astAssignmentFromStructNode'?: (_zetasql_ASTAssignmentFromStructProto | null);
  'astLoopStatementNode'?: (_zetasql_AnyASTLoopStatementProto | null);
  'node'?: "astIfStatementNode"|"astCaseStatementNode"|"astRaiseStatementNode"|"astBeginEndBlockNode"|"astVariableDeclarationNode"|"astBreakContinueStatementNode"|"astReturnStatementNode"|"astSingleAssignmentNode"|"astAssignmentFromStructNode"|"astLoopStatementNode";
}

export interface AnyASTScriptStatementProto__Output {
  'astIfStatementNode'?: (_zetasql_ASTIfStatementProto__Output | null);
  'astCaseStatementNode'?: (_zetasql_ASTCaseStatementProto__Output | null);
  'astRaiseStatementNode'?: (_zetasql_ASTRaiseStatementProto__Output | null);
  'astBeginEndBlockNode'?: (_zetasql_ASTBeginEndBlockProto__Output | null);
  'astVariableDeclarationNode'?: (_zetasql_ASTVariableDeclarationProto__Output | null);
  'astBreakContinueStatementNode'?: (_zetasql_AnyASTBreakContinueStatementProto__Output | null);
  'astReturnStatementNode'?: (_zetasql_ASTReturnStatementProto__Output | null);
  'astSingleAssignmentNode'?: (_zetasql_ASTSingleAssignmentProto__Output | null);
  'astAssignmentFromStructNode'?: (_zetasql_ASTAssignmentFromStructProto__Output | null);
  'astLoopStatementNode'?: (_zetasql_AnyASTLoopStatementProto__Output | null);
  'node': "astIfStatementNode"|"astCaseStatementNode"|"astRaiseStatementNode"|"astBeginEndBlockNode"|"astVariableDeclarationNode"|"astBreakContinueStatementNode"|"astReturnStatementNode"|"astSingleAssignmentNode"|"astAssignmentFromStructNode"|"astLoopStatementNode";
}
