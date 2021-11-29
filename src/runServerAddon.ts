import * as ffi from 'ffi-napi';

const zetaSQLServer = ffi.Library(__dirname + '/zetasql/libremote_server', {
  RunServer: ['void', []],
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
zetaSQLServer.RunServer.async(function (err, res) {});
