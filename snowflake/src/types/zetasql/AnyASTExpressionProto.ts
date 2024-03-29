// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { AnyASTLeafProto as _zetasql_AnyASTLeafProto, AnyASTLeafProto__Output as _zetasql_AnyASTLeafProto__Output } from '../zetasql/AnyASTLeafProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTGeneralizedPathExpressionProto as _zetasql_AnyASTGeneralizedPathExpressionProto, AnyASTGeneralizedPathExpressionProto__Output as _zetasql_AnyASTGeneralizedPathExpressionProto__Output } from '../zetasql/AnyASTGeneralizedPathExpressionProto';
import type { ASTAndExprProto as _zetasql_ASTAndExprProto, ASTAndExprProto__Output as _zetasql_ASTAndExprProto__Output } from '../zetasql/ASTAndExprProto';
import type { ASTBinaryExpressionProto as _zetasql_ASTBinaryExpressionProto, ASTBinaryExpressionProto__Output as _zetasql_ASTBinaryExpressionProto__Output } from '../zetasql/ASTBinaryExpressionProto';
import type { ASTOrExprProto as _zetasql_ASTOrExprProto, ASTOrExprProto__Output as _zetasql_ASTOrExprProto__Output } from '../zetasql/ASTOrExprProto';
import type { ASTCastExpressionProto as _zetasql_ASTCastExpressionProto, ASTCastExpressionProto__Output as _zetasql_ASTCastExpressionProto__Output } from '../zetasql/ASTCastExpressionProto';
import type { ASTFunctionCallProto as _zetasql_ASTFunctionCallProto, ASTFunctionCallProto__Output as _zetasql_ASTFunctionCallProto__Output } from '../zetasql/ASTFunctionCallProto';
import type { ASTArrayConstructorProto as _zetasql_ASTArrayConstructorProto, ASTArrayConstructorProto__Output as _zetasql_ASTArrayConstructorProto__Output } from '../zetasql/ASTArrayConstructorProto';
import type { ASTStructConstructorWithParensProto as _zetasql_ASTStructConstructorWithParensProto, ASTStructConstructorWithParensProto__Output as _zetasql_ASTStructConstructorWithParensProto__Output } from '../zetasql/ASTStructConstructorWithParensProto';
import type { ASTStructConstructorWithKeywordProto as _zetasql_ASTStructConstructorWithKeywordProto, ASTStructConstructorWithKeywordProto__Output as _zetasql_ASTStructConstructorWithKeywordProto__Output } from '../zetasql/ASTStructConstructorWithKeywordProto';
import type { ASTInExpressionProto as _zetasql_ASTInExpressionProto, ASTInExpressionProto__Output as _zetasql_ASTInExpressionProto__Output } from '../zetasql/ASTInExpressionProto';
import type { ASTBetweenExpressionProto as _zetasql_ASTBetweenExpressionProto, ASTBetweenExpressionProto__Output as _zetasql_ASTBetweenExpressionProto__Output } from '../zetasql/ASTBetweenExpressionProto';
import type { ASTDateOrTimeLiteralProto as _zetasql_ASTDateOrTimeLiteralProto, ASTDateOrTimeLiteralProto__Output as _zetasql_ASTDateOrTimeLiteralProto__Output } from '../zetasql/ASTDateOrTimeLiteralProto';
import type { ASTCaseValueExpressionProto as _zetasql_ASTCaseValueExpressionProto, ASTCaseValueExpressionProto__Output as _zetasql_ASTCaseValueExpressionProto__Output } from '../zetasql/ASTCaseValueExpressionProto';
import type { ASTCaseNoValueExpressionProto as _zetasql_ASTCaseNoValueExpressionProto, ASTCaseNoValueExpressionProto__Output as _zetasql_ASTCaseNoValueExpressionProto__Output } from '../zetasql/ASTCaseNoValueExpressionProto';
import type { ASTBitwiseShiftExpressionProto as _zetasql_ASTBitwiseShiftExpressionProto, ASTBitwiseShiftExpressionProto__Output as _zetasql_ASTBitwiseShiftExpressionProto__Output } from '../zetasql/ASTBitwiseShiftExpressionProto';
import type { ASTDotStarProto as _zetasql_ASTDotStarProto, ASTDotStarProto__Output as _zetasql_ASTDotStarProto__Output } from '../zetasql/ASTDotStarProto';
import type { ASTDotStarWithModifiersProto as _zetasql_ASTDotStarWithModifiersProto, ASTDotStarWithModifiersProto__Output as _zetasql_ASTDotStarWithModifiersProto__Output } from '../zetasql/ASTDotStarWithModifiersProto';
import type { ASTExpressionSubqueryProto as _zetasql_ASTExpressionSubqueryProto, ASTExpressionSubqueryProto__Output as _zetasql_ASTExpressionSubqueryProto__Output } from '../zetasql/ASTExpressionSubqueryProto';
import type { ASTExtractExpressionProto as _zetasql_ASTExtractExpressionProto, ASTExtractExpressionProto__Output as _zetasql_ASTExtractExpressionProto__Output } from '../zetasql/ASTExtractExpressionProto';
import type { ASTIntervalExprProto as _zetasql_ASTIntervalExprProto, ASTIntervalExprProto__Output as _zetasql_ASTIntervalExprProto__Output } from '../zetasql/ASTIntervalExprProto';
import type { ASTNamedArgumentProto as _zetasql_ASTNamedArgumentProto, ASTNamedArgumentProto__Output as _zetasql_ASTNamedArgumentProto__Output } from '../zetasql/ASTNamedArgumentProto';
import type { ASTStarWithModifiersProto as _zetasql_ASTStarWithModifiersProto, ASTStarWithModifiersProto__Output as _zetasql_ASTStarWithModifiersProto__Output } from '../zetasql/ASTStarWithModifiersProto';
import type { ASTUnaryExpressionProto as _zetasql_ASTUnaryExpressionProto, ASTUnaryExpressionProto__Output as _zetasql_ASTUnaryExpressionProto__Output } from '../zetasql/ASTUnaryExpressionProto';
import type { ASTLikeExpressionProto as _zetasql_ASTLikeExpressionProto, ASTLikeExpressionProto__Output as _zetasql_ASTLikeExpressionProto__Output } from '../zetasql/ASTLikeExpressionProto';
import type { AnyASTParameterExprBaseProto as _zetasql_AnyASTParameterExprBaseProto, AnyASTParameterExprBaseProto__Output as _zetasql_AnyASTParameterExprBaseProto__Output } from '../zetasql/AnyASTParameterExprBaseProto';
import type { ASTLambdaProto as _zetasql_ASTLambdaProto, ASTLambdaProto__Output as _zetasql_ASTLambdaProto__Output } from '../zetasql/ASTLambdaProto';
import type { ASTAnalyticFunctionCallProto as _zetasql_ASTAnalyticFunctionCallProto, ASTAnalyticFunctionCallProto__Output as _zetasql_ASTAnalyticFunctionCallProto__Output } from '../zetasql/ASTAnalyticFunctionCallProto';
import type { ASTFunctionCallWithGroupRowsProto as _zetasql_ASTFunctionCallWithGroupRowsProto, ASTFunctionCallWithGroupRowsProto__Output as _zetasql_ASTFunctionCallWithGroupRowsProto__Output } from '../zetasql/ASTFunctionCallWithGroupRowsProto';
import type { ASTNewConstructorProto as _zetasql_ASTNewConstructorProto, ASTNewConstructorProto__Output as _zetasql_ASTNewConstructorProto__Output } from '../zetasql/ASTNewConstructorProto';
import type { ASTDefaultLiteralProto as _zetasql_ASTDefaultLiteralProto, ASTDefaultLiteralProto__Output as _zetasql_ASTDefaultLiteralProto__Output } from '../zetasql/ASTDefaultLiteralProto';
import type { ASTReplaceFieldsExpressionProto as _zetasql_ASTReplaceFieldsExpressionProto, ASTReplaceFieldsExpressionProto__Output as _zetasql_ASTReplaceFieldsExpressionProto__Output } from '../zetasql/ASTReplaceFieldsExpressionProto';
import type { ASTBracedConstructorFieldValueProto as _zetasql_ASTBracedConstructorFieldValueProto, ASTBracedConstructorFieldValueProto__Output as _zetasql_ASTBracedConstructorFieldValueProto__Output } from '../zetasql/ASTBracedConstructorFieldValueProto';
import type { ASTBracedConstructorProto as _zetasql_ASTBracedConstructorProto, ASTBracedConstructorProto__Output as _zetasql_ASTBracedConstructorProto__Output } from '../zetasql/ASTBracedConstructorProto';
import type { ASTBracedNewConstructorProto as _zetasql_ASTBracedNewConstructorProto, ASTBracedNewConstructorProto__Output as _zetasql_ASTBracedNewConstructorProto__Output } from '../zetasql/ASTBracedNewConstructorProto';
import type { ASTWithExpressionProto as _zetasql_ASTWithExpressionProto, ASTWithExpressionProto__Output as _zetasql_ASTWithExpressionProto__Output } from '../zetasql/ASTWithExpressionProto';
import type { ASTRangeLiteralProto as _zetasql_ASTRangeLiteralProto, ASTRangeLiteralProto__Output as _zetasql_ASTRangeLiteralProto__Output } from '../zetasql/ASTRangeLiteralProto';
import type { ASTSequenceArgProto as _zetasql_ASTSequenceArgProto, ASTSequenceArgProto__Output as _zetasql_ASTSequenceArgProto__Output } from '../zetasql/ASTSequenceArgProto';
import type { ASTExpressionWithAliasProto as _zetasql_ASTExpressionWithAliasProto, ASTExpressionWithAliasProto__Output as _zetasql_ASTExpressionWithAliasProto__Output } from '../zetasql/ASTExpressionWithAliasProto';

export interface AnyASTExpressionProto {
  'astLeafNode'?: (_zetasql_AnyASTLeafProto | null);
  'astIdentifierNode'?: (_zetasql_ASTIdentifierProto | null);
  'astGeneralizedPathExpressionNode'?: (_zetasql_AnyASTGeneralizedPathExpressionProto | null);
  'astAndExprNode'?: (_zetasql_ASTAndExprProto | null);
  'astBinaryExpressionNode'?: (_zetasql_ASTBinaryExpressionProto | null);
  'astOrExprNode'?: (_zetasql_ASTOrExprProto | null);
  'astCastExpressionNode'?: (_zetasql_ASTCastExpressionProto | null);
  'astFunctionCallNode'?: (_zetasql_ASTFunctionCallProto | null);
  'astArrayConstructorNode'?: (_zetasql_ASTArrayConstructorProto | null);
  'astStructConstructorWithParensNode'?: (_zetasql_ASTStructConstructorWithParensProto | null);
  'astStructConstructorWithKeywordNode'?: (_zetasql_ASTStructConstructorWithKeywordProto | null);
  'astInExpressionNode'?: (_zetasql_ASTInExpressionProto | null);
  'astBetweenExpressionNode'?: (_zetasql_ASTBetweenExpressionProto | null);
  'astDateOrTimeLiteralNode'?: (_zetasql_ASTDateOrTimeLiteralProto | null);
  'astCaseValueExpressionNode'?: (_zetasql_ASTCaseValueExpressionProto | null);
  'astCaseNoValueExpressionNode'?: (_zetasql_ASTCaseNoValueExpressionProto | null);
  'astBitwiseShiftExpressionNode'?: (_zetasql_ASTBitwiseShiftExpressionProto | null);
  'astDotStarNode'?: (_zetasql_ASTDotStarProto | null);
  'astDotStarWithModifiersNode'?: (_zetasql_ASTDotStarWithModifiersProto | null);
  'astExpressionSubqueryNode'?: (_zetasql_ASTExpressionSubqueryProto | null);
  'astExtractExpressionNode'?: (_zetasql_ASTExtractExpressionProto | null);
  'astIntervalExprNode'?: (_zetasql_ASTIntervalExprProto | null);
  'astNamedArgumentNode'?: (_zetasql_ASTNamedArgumentProto | null);
  'astStarWithModifiersNode'?: (_zetasql_ASTStarWithModifiersProto | null);
  'astUnaryExpressionNode'?: (_zetasql_ASTUnaryExpressionProto | null);
  'astLikeExpressionNode'?: (_zetasql_ASTLikeExpressionProto | null);
  'astParameterExprBaseNode'?: (_zetasql_AnyASTParameterExprBaseProto | null);
  'astLambdaNode'?: (_zetasql_ASTLambdaProto | null);
  'astAnalyticFunctionCallNode'?: (_zetasql_ASTAnalyticFunctionCallProto | null);
  'astFunctionCallWithGroupRowsNode'?: (_zetasql_ASTFunctionCallWithGroupRowsProto | null);
  'astNewConstructorNode'?: (_zetasql_ASTNewConstructorProto | null);
  'astDefaultLiteralNode'?: (_zetasql_ASTDefaultLiteralProto | null);
  'astReplaceFieldsExpressionNode'?: (_zetasql_ASTReplaceFieldsExpressionProto | null);
  'astBracedConstructorFieldValueNode'?: (_zetasql_ASTBracedConstructorFieldValueProto | null);
  'astBracedConstructorNode'?: (_zetasql_ASTBracedConstructorProto | null);
  'astBracedNewConstructorNode'?: (_zetasql_ASTBracedNewConstructorProto | null);
  'astWithExpressionNode'?: (_zetasql_ASTWithExpressionProto | null);
  'astRangeLiteralNode'?: (_zetasql_ASTRangeLiteralProto | null);
  'astSequenceArgNode'?: (_zetasql_ASTSequenceArgProto | null);
  'astExpressionWithAliasNode'?: (_zetasql_ASTExpressionWithAliasProto | null);
  'node'?: "astLeafNode"|"astIdentifierNode"|"astGeneralizedPathExpressionNode"|"astAndExprNode"|"astBinaryExpressionNode"|"astOrExprNode"|"astCastExpressionNode"|"astFunctionCallNode"|"astArrayConstructorNode"|"astStructConstructorWithParensNode"|"astStructConstructorWithKeywordNode"|"astInExpressionNode"|"astBetweenExpressionNode"|"astDateOrTimeLiteralNode"|"astCaseValueExpressionNode"|"astCaseNoValueExpressionNode"|"astBitwiseShiftExpressionNode"|"astDotStarNode"|"astDotStarWithModifiersNode"|"astExpressionSubqueryNode"|"astExtractExpressionNode"|"astIntervalExprNode"|"astNamedArgumentNode"|"astStarWithModifiersNode"|"astUnaryExpressionNode"|"astLikeExpressionNode"|"astParameterExprBaseNode"|"astLambdaNode"|"astAnalyticFunctionCallNode"|"astFunctionCallWithGroupRowsNode"|"astNewConstructorNode"|"astDefaultLiteralNode"|"astReplaceFieldsExpressionNode"|"astBracedConstructorFieldValueNode"|"astBracedConstructorNode"|"astBracedNewConstructorNode"|"astWithExpressionNode"|"astRangeLiteralNode"|"astSequenceArgNode"|"astExpressionWithAliasNode";
}

export interface AnyASTExpressionProto__Output {
  'astLeafNode'?: (_zetasql_AnyASTLeafProto__Output | null);
  'astIdentifierNode'?: (_zetasql_ASTIdentifierProto__Output | null);
  'astGeneralizedPathExpressionNode'?: (_zetasql_AnyASTGeneralizedPathExpressionProto__Output | null);
  'astAndExprNode'?: (_zetasql_ASTAndExprProto__Output | null);
  'astBinaryExpressionNode'?: (_zetasql_ASTBinaryExpressionProto__Output | null);
  'astOrExprNode'?: (_zetasql_ASTOrExprProto__Output | null);
  'astCastExpressionNode'?: (_zetasql_ASTCastExpressionProto__Output | null);
  'astFunctionCallNode'?: (_zetasql_ASTFunctionCallProto__Output | null);
  'astArrayConstructorNode'?: (_zetasql_ASTArrayConstructorProto__Output | null);
  'astStructConstructorWithParensNode'?: (_zetasql_ASTStructConstructorWithParensProto__Output | null);
  'astStructConstructorWithKeywordNode'?: (_zetasql_ASTStructConstructorWithKeywordProto__Output | null);
  'astInExpressionNode'?: (_zetasql_ASTInExpressionProto__Output | null);
  'astBetweenExpressionNode'?: (_zetasql_ASTBetweenExpressionProto__Output | null);
  'astDateOrTimeLiteralNode'?: (_zetasql_ASTDateOrTimeLiteralProto__Output | null);
  'astCaseValueExpressionNode'?: (_zetasql_ASTCaseValueExpressionProto__Output | null);
  'astCaseNoValueExpressionNode'?: (_zetasql_ASTCaseNoValueExpressionProto__Output | null);
  'astBitwiseShiftExpressionNode'?: (_zetasql_ASTBitwiseShiftExpressionProto__Output | null);
  'astDotStarNode'?: (_zetasql_ASTDotStarProto__Output | null);
  'astDotStarWithModifiersNode'?: (_zetasql_ASTDotStarWithModifiersProto__Output | null);
  'astExpressionSubqueryNode'?: (_zetasql_ASTExpressionSubqueryProto__Output | null);
  'astExtractExpressionNode'?: (_zetasql_ASTExtractExpressionProto__Output | null);
  'astIntervalExprNode'?: (_zetasql_ASTIntervalExprProto__Output | null);
  'astNamedArgumentNode'?: (_zetasql_ASTNamedArgumentProto__Output | null);
  'astStarWithModifiersNode'?: (_zetasql_ASTStarWithModifiersProto__Output | null);
  'astUnaryExpressionNode'?: (_zetasql_ASTUnaryExpressionProto__Output | null);
  'astLikeExpressionNode'?: (_zetasql_ASTLikeExpressionProto__Output | null);
  'astParameterExprBaseNode'?: (_zetasql_AnyASTParameterExprBaseProto__Output | null);
  'astLambdaNode'?: (_zetasql_ASTLambdaProto__Output | null);
  'astAnalyticFunctionCallNode'?: (_zetasql_ASTAnalyticFunctionCallProto__Output | null);
  'astFunctionCallWithGroupRowsNode'?: (_zetasql_ASTFunctionCallWithGroupRowsProto__Output | null);
  'astNewConstructorNode'?: (_zetasql_ASTNewConstructorProto__Output | null);
  'astDefaultLiteralNode'?: (_zetasql_ASTDefaultLiteralProto__Output | null);
  'astReplaceFieldsExpressionNode'?: (_zetasql_ASTReplaceFieldsExpressionProto__Output | null);
  'astBracedConstructorFieldValueNode'?: (_zetasql_ASTBracedConstructorFieldValueProto__Output | null);
  'astBracedConstructorNode'?: (_zetasql_ASTBracedConstructorProto__Output | null);
  'astBracedNewConstructorNode'?: (_zetasql_ASTBracedNewConstructorProto__Output | null);
  'astWithExpressionNode'?: (_zetasql_ASTWithExpressionProto__Output | null);
  'astRangeLiteralNode'?: (_zetasql_ASTRangeLiteralProto__Output | null);
  'astSequenceArgNode'?: (_zetasql_ASTSequenceArgProto__Output | null);
  'astExpressionWithAliasNode'?: (_zetasql_ASTExpressionWithAliasProto__Output | null);
  'node': "astLeafNode"|"astIdentifierNode"|"astGeneralizedPathExpressionNode"|"astAndExprNode"|"astBinaryExpressionNode"|"astOrExprNode"|"astCastExpressionNode"|"astFunctionCallNode"|"astArrayConstructorNode"|"astStructConstructorWithParensNode"|"astStructConstructorWithKeywordNode"|"astInExpressionNode"|"astBetweenExpressionNode"|"astDateOrTimeLiteralNode"|"astCaseValueExpressionNode"|"astCaseNoValueExpressionNode"|"astBitwiseShiftExpressionNode"|"astDotStarNode"|"astDotStarWithModifiersNode"|"astExpressionSubqueryNode"|"astExtractExpressionNode"|"astIntervalExprNode"|"astNamedArgumentNode"|"astStarWithModifiersNode"|"astUnaryExpressionNode"|"astLikeExpressionNode"|"astParameterExprBaseNode"|"astLambdaNode"|"astAnalyticFunctionCallNode"|"astFunctionCallWithGroupRowsNode"|"astNewConstructorNode"|"astDefaultLiteralNode"|"astReplaceFieldsExpressionNode"|"astBracedConstructorFieldValueNode"|"astBracedConstructorNode"|"astBracedNewConstructorNode"|"astWithExpressionNode"|"astRangeLiteralNode"|"astSequenceArgNode"|"astExpressionWithAliasNode";
}
