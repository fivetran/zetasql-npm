import { LanguageOptions } from '../LanguageOptions';
import { runServer, terminateServer } from '../server';
import { ErrorMessageMode } from '../types/zetasql/ErrorMessageMode';
import { AnalyzeResponse__Output } from '../types/zetasql/local_service/AnalyzeResponse';
import { ParseLocationRecordType } from '../types/zetasql/ParseLocationRecordType';
import { SimpleCatalogProto } from '../types/zetasql/SimpleCatalogProto';
import { SimpleColumnProto } from '../types/zetasql/SimpleColumnProto';
import { SimpleTableProto } from '../types/zetasql/SimpleTableProto';
import { TypeKind } from '../types/zetasql/TypeKind';
import { ZetaSQLClient } from '../ZetaSQLClient';

const catalog: SimpleCatalogProto = {
  name: 'catalog',
};

async function runTest(): Promise<void> {
  const port = 50005;
  const tableName = 'users';

  runServer(port).catch(err => console.error(err));
  ZetaSQLClient.init(port);
  await ZetaSQLClient.getInstance().testConnection();

  const projectCatalog: SimpleCatalogProto = {
    name: 'test_project',
  };
  catalog.catalog = [projectCatalog];

  const dataSetCatalog: SimpleCatalogProto = {
    name: 'data_set',
  };
  projectCatalog.catalog = [dataSetCatalog];

  const usersTable: SimpleTableProto = { name: tableName };
  dataSetCatalog.table = [usersTable];

  const column: SimpleColumnProto = { name: 'id', type: { typeKind: TypeKind.TYPE_STRING } };
  usersTable.column = [column];

  await registerAllLanguageFeatures();

  try {
    await analyze(`SELECT * FROM "test_project".data_set.users where id = '1'`);
    console.log('Tests passed');
  } catch (e) {
    console.error(e);
    console.log('Tests failed');
  }
  terminateServer();
}

async function analyze(sqlStatement: string): Promise<AnalyzeResponse__Output> {
  const response = await ZetaSQLClient.getInstance().analyze({
    sqlStatement,
    simpleCatalog: catalog,

    options: {
      parseLocationRecordType: ParseLocationRecordType.PARSE_LOCATION_RECORD_CODE_SEARCH,

      errorMessageMode: ErrorMessageMode.ERROR_MESSAGE_ONE_LINE,
    },
  });

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
