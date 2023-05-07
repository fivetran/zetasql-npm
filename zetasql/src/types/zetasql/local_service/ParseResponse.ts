// Original file: src/zetasql/protos/local_service.proto

import type { AnyASTStatementProto as _zetasql_AnyASTStatementProto, AnyASTStatementProto__Output as _zetasql_AnyASTStatementProto__Output } from '../../zetasql/AnyASTStatementProto';
import type { ASTScriptProto as _zetasql_ASTScriptProto, ASTScriptProto__Output as _zetasql_ASTScriptProto__Output } from '../../zetasql/ASTScriptProto';

export interface ParseResponse {
  'parsedStatement'?: (_zetasql_AnyASTStatementProto | null);
  'resumeBytePosition'?: (number);
  'parsedScript'?: (_zetasql_ASTScriptProto | null);
  'result'?: "parsedStatement"|"parsedScript";
}

export interface ParseResponse__Output {
  'parsedStatement'?: (_zetasql_AnyASTStatementProto__Output | null);
  'resumeBytePosition': (number);
  'parsedScript'?: (_zetasql_ASTScriptProto__Output | null);
  'result': "parsedStatement"|"parsedScript";
}
