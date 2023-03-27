import { LanguageOptions } from '../LanguageOptions';
import { runServer, terminateServer } from '../server';
import { ErrorMessageMode } from '../types/zetasql/ErrorMessageMode';
import { AnalyzeResponse__Output } from '../types/zetasql/local_service/AnalyzeResponse';
import { ParameterMode } from '../types/zetasql/ParameterMode';
import { ParseLocationRecordType } from '../types/zetasql/ParseLocationRecordType';
import { ResolvedASTRewrite } from '../types/zetasql/ResolvedASTRewrite';
import { SimpleCatalogProto } from '../types/zetasql/SimpleCatalogProto';
import { SimpleColumnProto } from '../types/zetasql/SimpleColumnProto';
import { SimpleTableProto } from '../types/zetasql/SimpleTableProto';
import { StatementContext } from '../types/zetasql/StatementContext';
import { TypeKind } from '../types/zetasql/TypeKind';
import { ZetaSQLClient } from '../ZetaSQLClient';

const catalog: SimpleCatalogProto = {
  name: 'catalog',
};

async function runTest(): Promise<void> {
  const port = 50005;
  const tableName = 'table1';

  runServer(port).catch(err => console.error(err));

  ZetaSQLClient.init(port);
  await ZetaSQLClient.getInstance().testConnection();

  const usersTable: SimpleTableProto = { name: tableName };

  const column: SimpleColumnProto = { name: 'id', type: { typeKind: TypeKind.TYPE_STRING } };
  usersTable.column = [column];

  const usersTable2: SimpleTableProto = { name: 'table2' };
  catalog.table = [usersTable, usersTable2];

  const column2: SimpleColumnProto = { name: 'id', type: { typeKind: TypeKind.TYPE_STRING } };
  usersTable2.column = [column2];

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
    simpleCatalog: catalog,
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
        ResolvedASTRewrite.REWRITE_NULLIFERROR_FUNCTION,
      ],
    },
  };

  const response = await ZetaSQLClient.getInstance().analyze(request);
  if (!response) {
    throw new Error('Analyze failed');
  }
  return response;
}

async function registerAllLanguageFeatures(): Promise<void> {
  const languageOptions = await new LanguageOptions().enableMaximumLanguageFeatures();
  catalog.builtinFunctionOptions = {
    languageOptions: languageOptions.serialize(),
  };
}

runTest().catch(e => console.error(e));
