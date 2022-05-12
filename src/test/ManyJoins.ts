import Long = require('long');
import { LanguageOptions } from '../LanguageOptions';
import { runServer, terminateServer } from '../server';
import { SimpleCatalog } from '../SimpleCatalog';
import { SimpleColumn } from '../SimpleColumn';
import { SimpleTable } from '../SimpleTable';
import { SimpleType } from '../SimpleType';
import { ErrorMessageMode } from '../types/zetasql/ErrorMessageMode';
import { AnalyzeResponse__Output } from '../types/zetasql/local_service/AnalyzeResponse';
import { ParameterMode } from '../types/zetasql/ParameterMode';
import { ParseLocationRecordType } from '../types/zetasql/ParseLocationRecordType';
import { ProductMode } from '../types/zetasql/ProductMode';
import { ResolvedASTRewrite } from '../types/zetasql/ResolvedASTRewrite';
import { ResolvedNodeKind } from '../types/zetasql/ResolvedNodeKind';
import { StatementContext } from '../types/zetasql/StatementContext';
import { TypeKind } from '../types/zetasql/TypeKind';
import { ZetaSQLBuiltinFunctionOptions } from '../ZetaSQLBuiltinFunctionOptions';
import { ZetaSQLClient } from '../ZetaSQLClient';

const catalog = new SimpleCatalog('catalog');
let languageOptions: LanguageOptions | undefined;

async function runTest(): Promise<void> {
  const port = 50005;
  const tableName = 'table1';

  runServer(port).catch(err => console.error(err));

  ZetaSQLClient.init(port);
  await ZetaSQLClient.getInstance().testConnection();

  const usersTable = new SimpleTable(tableName, new Long(1));
  catalog.addSimpleTable(tableName, usersTable);

  const column = new SimpleColumn(tableName, 'id', new SimpleType(TypeKind.TYPE_STRING));
  usersTable.addSimpleColumn(column);

  const usersTable2 = new SimpleTable('table2', new Long(2));
  catalog.addSimpleTable('table2', usersTable2);

  const column2 = new SimpleColumn('table2', 'id', new SimpleType(TypeKind.TYPE_STRING));
  usersTable2.addSimpleColumn(column2);

  await registerAllLanguageFeatures();

  try {
    await analyze(
      'select *\n' +
        'from table2 t\n' +
        'join table1 as c1 on t.id = c1.id\n' +
        'join table1 as c2 on t.id = c2.id\n' +
        'join table1 as c3 on t.id = c3.id\n' +
        'join table1 as c4 on t.id = c4.id\n' +
        'join table1 as c5 on t.id = c5.id\n' +
        'join table1 as c6 on t.id = c6.id\n' +
        'join table1 as c7 on t.id = c7.id\n' +
        'join table1 as c8 on t.id = c8.id\n' +
        'join table1 as c9 on t.id = c9.id\n' +
        'join table1 as c10 on t.id = c10.id\n' +
        'join table1 as c11 on t.id = c11.id\n' +
        'join table1 as c12 on t.id = c12.id\n' +
        'join table1 as c13 on t.id = c13.id\n' +
        'join table1 as c14 on t.id = c14.id\n' +
        'join table1 as c15 on t.id = c15.id\n' +
        'join table1 as c16 on t.id = c16.id\n' +
        'join table1 as c17 on t.id = c17.id\n' +
        'join table1 as c18 on t.id = c18.id\n' +
        'join table1 as c19 on t.id = c19.id\n' +
        'join table1 as c20 on t.id = c20.id\n' +
        'join table1 as c21 on t.id = c21.id\n' +
        'join table1 as c22 on t.id = c22.id\n' +
        'join table1 as c23 on t.id = c23.id\n' +
        'join table1 as c24 on t.id = c24.id\n' +
        'join table1 as c25 on t.id = c25.id\n' +
        'join table1 as c26 on t.id = c26.id\n' +
        'join table1 as c27 on t.id = c27.id\n' +
        'join table1 as c28 on t.id = c28.id\n' +
        'join table1 as c29 on t.id = c29.id\n' +
        'join table1 as c30 on t.id = c30.id\n' +
        'join table1 as c31 on t.id = c31.id\n',
    );
    console.log('Tests passed');
  } catch (e) {
    console.log('Tests failed');
    console.error(e);
  }
  await terminateServer();
}

async function analyze(sqlStatement: string): Promise<AnalyzeResponse__Output> {
  const request = {
    sqlStatement,
    simpleCatalog: catalog.serialize(),
    options: {
      parseLocationRecordType: ParseLocationRecordType.PARSE_LOCATION_RECORD_NONE,
      preserveUnnecessaryCast: false,

      allowedHintsAndOptions: {
        disallowUnknownOptions: false,
      },
      allowUndeclaredParameters: false,
      pruneUnusedColumns: false,
      defaultTimezone: 'America/Los_Angeles',
      errorMessageMode: ErrorMessageMode.ERROR_MESSAGE_ONE_LINE,

      parameterMode: ParameterMode.PARAMETER_NAMED,
      statementContext: StatementContext.CONTEXT_DEFAULT,
      preserveColumnAliases: true,
      createNewColumnForEachProjectedOutput: false,
      enabledRewrites: [
        ResolvedASTRewrite.REWRITE_FLATTEN,
        ResolvedASTRewrite.REWRITE_PROTO_MAP_FNS,
        ResolvedASTRewrite.REWRITE_ARRAY_FILTER_TRANSFORM,
        ResolvedASTRewrite.REWRITE_UNPIVOT,
        ResolvedASTRewrite.REWRITE_PIVOT,
        ResolvedASTRewrite.REWRITE_ARRAY_INCLUDES,
        ResolvedASTRewrite.REWRITE_TYPEOF_FUNCTION,
        ResolvedASTRewrite.REWRITE_LET_EXPR,
        ResolvedASTRewrite.REWRITE_NULLIFERROR_FUNCTION,
        ResolvedASTRewrite.REWRITE_ARRAY_FIRST_LAST,
      ],
      languageOptions: languageOptions?.serialize(),
    },
  };

  const response = await ZetaSQLClient.getInstance().analyze(request);
  if (!response) {
    throw new Error('Analyze failed');
  }
  return response;
}

async function registerAllLanguageFeatures(): Promise<void> {
  if (!catalog.builtinFunctionOptions) {
    languageOptions = await new LanguageOptions().enableMaximumLanguageFeatures();

    languageOptions.options.errorOnDeprecatedSyntax = false;
    languageOptions.options.productMode = ProductMode.PRODUCT_INTERNAL;
    languageOptions.options.supportedStatementKinds = [ResolvedNodeKind.RESOLVED_QUERY_STMT];
    await catalog.addZetaSQLFunctions(new ZetaSQLBuiltinFunctionOptions(languageOptions));
  }
}

runTest().catch(e => console.error(e));
