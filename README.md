# zetasql-npm

The repository contains npm package for [zetasql](https://github.com/google/zetasql) gRPC server and client.
ZetaSQL can be used to provide consistent behavior for all semantic analysis, name resolution, type checking, implicit casting, etc.

## Table of contents

* [Installation](#installation)
* [Example Usage](#example-usage)
    * [Import ZetaSQLClient](#import-zetasqlclient)
    * [Start server](#start-server)
    * [Retrieve table names from SQL statement](#retrieve-table-names-from-sql-statement)
* [How to build](#how-to-build)
* [License](#license)

## Installation

```sh
> npm i @fivetrandevelopers/zetasql 
```

## Example Usage

### Import ZetaSQLClient

```typescript
import { ZetaSQLClient } from '@fivetrandevelopers/zetasql';
```

### Start server

```typescript
runServer(port).catch(err => console.error(err));
ZetaSQLClient.init(port);
await ZetaSQLClient.getInstance().testConnection();
```

### Retrieve table names from SQL statement:

```typescript
const request: ExtractTableNamesFromStatementRequest = {
    sqlStatement: 'select * from `dbt-example`.shop_dataset.dbt_customers where age >= 21',
};
try {
    const extractResult = await ZetaSQLClient.INSTANCE.extractTableNamesFromStatement(request);
    ...
    console.log(extractResult);
    ...
} catch (e) {
    console.log(e);
}
```

## How to build

To build it locally you need to have `npm` installed.

Run the following commands in the root directory

```sh
> npm install
> npm run build:all
```

## License

[MIT License](https://github.com/fivetran/zetasql-npm/blob/master/LICENSE)
