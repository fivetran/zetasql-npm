import * as ffi from 'ffi-napi';

const zetaSQLServer = ffi.Library(__dirname + '/zetasql/libremote_server', {
  RunServer: ['void', ['int']],
});

const port = process.argv[2];
zetaSQLServer.RunServer.async(port, () => {
  // do nothing
});
