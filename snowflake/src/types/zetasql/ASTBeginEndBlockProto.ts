// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTScriptStatementProto as _zetasql_ASTScriptStatementProto, ASTScriptStatementProto__Output as _zetasql_ASTScriptStatementProto__Output } from '../zetasql/ASTScriptStatementProto';
import type { ASTLabelProto as _zetasql_ASTLabelProto, ASTLabelProto__Output as _zetasql_ASTLabelProto__Output } from '../zetasql/ASTLabelProto';
import type { ASTStatementListProto as _zetasql_ASTStatementListProto, ASTStatementListProto__Output as _zetasql_ASTStatementListProto__Output } from '../zetasql/ASTStatementListProto';
import type { ASTExceptionHandlerListProto as _zetasql_ASTExceptionHandlerListProto, ASTExceptionHandlerListProto__Output as _zetasql_ASTExceptionHandlerListProto__Output } from '../zetasql/ASTExceptionHandlerListProto';

export interface ASTBeginEndBlockProto {
  'parent'?: (_zetasql_ASTScriptStatementProto | null);
  'label'?: (_zetasql_ASTLabelProto | null);
  'statementListNode'?: (_zetasql_ASTStatementListProto | null);
  'handlerList'?: (_zetasql_ASTExceptionHandlerListProto | null);
}

export interface ASTBeginEndBlockProto__Output {
  'parent': (_zetasql_ASTScriptStatementProto__Output | null);
  'label': (_zetasql_ASTLabelProto__Output | null);
  'statementListNode': (_zetasql_ASTStatementListProto__Output | null);
  'handlerList': (_zetasql_ASTExceptionHandlerListProto__Output | null);
}
