import * as ffi from 'ffi-napi';

const zetaSQLServer = ffi.Library(__dirname + '/zetasql/libremote_server', {
  RunServer: ['void', []],
});

zetaSQLServer.RunServer.async(function (err, res) {});
