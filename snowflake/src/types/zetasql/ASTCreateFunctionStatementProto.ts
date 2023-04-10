// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateFunctionStmtBaseProto as _zetasql_ASTCreateFunctionStmtBaseProto, ASTCreateFunctionStmtBaseProto__Output as _zetasql_ASTCreateFunctionStmtBaseProto__Output } from '../zetasql/ASTCreateFunctionStmtBaseProto';
import type { AnyASTTypeProto as _zetasql_AnyASTTypeProto, AnyASTTypeProto__Output as _zetasql_AnyASTTypeProto__Output } from '../zetasql/AnyASTTypeProto';
import type { ASTSqlFunctionBodyProto as _zetasql_ASTSqlFunctionBodyProto, ASTSqlFunctionBodyProto__Output as _zetasql_ASTSqlFunctionBodyProto__Output } from '../zetasql/ASTSqlFunctionBodyProto';
import type { ASTWithConnectionClauseProto as _zetasql_ASTWithConnectionClauseProto, ASTWithConnectionClauseProto__Output as _zetasql_ASTWithConnectionClauseProto__Output } from '../zetasql/ASTWithConnectionClauseProto';

export interface ASTCreateFunctionStatementProto {
  'parent'?: (_zetasql_ASTCreateFunctionStmtBaseProto | null);
  'returnType'?: (_zetasql_AnyASTTypeProto | null);
  'sqlFunctionBody'?: (_zetasql_ASTSqlFunctionBodyProto | null);
  'isAggregate'?: (boolean);
  'isRemote'?: (boolean);
  'withConnectionClause'?: (_zetasql_ASTWithConnectionClauseProto | null);
}

export interface ASTCreateFunctionStatementProto__Output {
  'parent': (_zetasql_ASTCreateFunctionStmtBaseProto__Output | null);
  'returnType': (_zetasql_AnyASTTypeProto__Output | null);
  'sqlFunctionBody': (_zetasql_ASTSqlFunctionBodyProto__Output | null);
  'isAggregate': (boolean);
  'isRemote': (boolean);
  'withConnectionClause': (_zetasql_ASTWithConnectionClauseProto__Output | null);
}
