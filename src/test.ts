import {
  runServer,
  Client,
  AnalyzeRequest,
  SimpleCatalog,
  SimpleColumn,
  SimpleTable,
  SimpleType,
  TypeKind,
} from './index';
import { LanguageOptions } from './LanguageOptions';
import { ZetaSQLBuiltinFunctionOptions } from './ZetaSQLBuiltinFunctionOptions';

async function test() {
  runServer().catch(err => console.error(err));
  await Client.INSTANCE.testConnection();

  await testFormatSql();
  await testAnalyze();
}

async function testFormatSql() {
  const formatSqlRequest = {
    sql: 'seLect foo  , bar from some_table where something limiT      10',
  };
  try {
    const response = await Client.INSTANCE.formatSql(formatSqlRequest);
    console.log(response.sql);
  } catch (e) {
    console.log(e);
  }
}

async function testAnalyze() {
  const catalog: SimpleCatalog = new SimpleCatalog('test-catalog');
  catalog.addSimpleTable(
    new SimpleTable('transformations', undefined, [
      new SimpleColumn('transformations', 'id', new SimpleType(TypeKind.TYPE_STRING)),
      new SimpleColumn('transformations', 'name', new SimpleType(TypeKind.TYPE_STRING)),
      new SimpleColumn('transformations', 'group_id', new SimpleType(TypeKind.TYPE_STRING)),
      new SimpleColumn('transformations', 'paused', new SimpleType(TypeKind.TYPE_BOOL)),
      new SimpleColumn('transformations', 'trigger', new SimpleType(TypeKind.TYPE_STRING)),
      new SimpleColumn('transformations', 'created_at', new SimpleType(TypeKind.TYPE_TIMESTAMP)),
      new SimpleColumn('transformations', 'created_by_id', new SimpleType(TypeKind.TYPE_STRING)),
      new SimpleColumn(
        'transformations',
        'last_started_at',
        new SimpleType(TypeKind.TYPE_TIMESTAMP),
      ),
      new SimpleColumn('transformations', 'status', new SimpleType(TypeKind.TYPE_STRING)),
      new SimpleColumn('transformations', '_fivetran_deleted', new SimpleType(TypeKind.TYPE_BOOL)),
    ]),
  );
  const lo = await new LanguageOptions().enableMaximumLanguageFeatures();
  await catalog.addZetaSQLFunctions(new ZetaSQLBuiltinFunctionOptions(lo));
  //current_date() as date, \
  const analyzeRequest: AnalyzeRequest = {
    sqlStatement:
      "select \
		concat(id, '-', current_date()) as primary_key, \
		curr \
    id as transformation_id, \
		created_at, \
		created_by_id, \
		group_id, \
		name, \
		paused, \
		trigger, \
		last_started_at, \
		status \
		from transformations \
		where not _fivetran_deleted",
    simpleCatalog: catalog.serialize(),
  };

  console.log(JSON.stringify(analyzeRequest));

  try {
    const response = await Client.INSTANCE.analyze(analyzeRequest);
    console.log(JSON.stringify(response, null, 4));
  } catch (e) {
    console.log(JSON.stringify(e, null, 4));
  }
}

test();
