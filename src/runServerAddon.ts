import * as ffi from 'ffi-napi';

const libName = 'libremote_server' + (process.arch.startsWith('arm') ? '-arm' : '');
const zetaSQLServer = ffi.Library(`${__dirname}/zetasql/${libName}`, {
  RunServer: ['void', ['int']],
});

const port = process.argv[2];
zetaSQLServer.RunServer.async(port, () => {
  // do nothing
});
