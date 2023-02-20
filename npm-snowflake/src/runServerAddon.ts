import * as ffi from 'ffi-napi';

const extension = process.arch.startsWith('arm') ? '_arm' : '';
const libName = `libremote_server${extension}`;
const zetaSQLServer = ffi.Library(`${__dirname}/snowflake/${libName}`, {
  RunServer: ['void', ['int']],
});

const port = Number(process.argv[2]);
zetaSQLServer.RunServer.async(port, () => {
  // do nothing
});
