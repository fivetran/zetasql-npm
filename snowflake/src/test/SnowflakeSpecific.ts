import { runServer, SimpleCatalog, terminateServer, ZetaSQLClient } from '..';
import { LanguageOptions } from '../LanguageOptions';
import { AnalyzeResponse__Output } from '../types/zetasql/local_service/AnalyzeResponse';
import { ProductMode } from '../types/zetasql/ProductMode';
import { ResolvedNodeKind } from '../types/zetasql/ResolvedNodeKind';
import { ZetaSQLBuiltinFunctionOptions } from '../ZetaSQLBuiltinFunctionOptions';

const catalog = new SimpleCatalog('catalog');
let languageOptions: LanguageOptions | undefined;

async function runTest(): Promise<void> {
  const port = 50005;

  runServer(port).catch(err => console.error(err));

  ZetaSQLClient.init(port);
  await ZetaSQLClient.getInstance().testConnection();

  await registerAllLanguageFeatures();

  try {
    await analyze(`select * from table_a as A inner join lateral (select * from table_b as B);`);
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
