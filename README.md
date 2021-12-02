# zetasql-npm

The repository contains npm package for [zetasql](https://github.com/google/zetasql) gRPC server and client.
ZetaSQL can be used to provide consistent behavior for all semantic analysis, name resolution, type checking, implicit casting, etc.

## How to build

To build it locally you need to have `npm` installed.

Run the following commands in the root directory

```bash
$ npm install
$ npm run build:all
```

## Example Usage

Import 'ZetaSQLClient':
```typescript
import { ZetaSQLClient } from '@fivetrandevelopers/zetasql';
```

Make gRPC call to retrieve table names from SQL statement:
```typescript
const request: ExtractTableNamesFromStatementRequest = {
    sqlStatement: 'select * from `dbt-example`.shop_dataset.dbt_customers where age >= 21',
};
try {
    const extractResult = await ZetaSQLClient.INSTANCE.extractTableNamesFromStatement(request);
    return extractResult.tableName.map(t => new TableDefinition(t.tableNameSegment));
} catch (e) {
    console.log(e);
}
```

## License

[MIT License](https://github.com/fivetran/zetasql-npm/blob/master/LICENSE)
