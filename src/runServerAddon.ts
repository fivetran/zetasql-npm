import ffi = require('ffi-napi');

const zetaSQLServer = ffi.Library(__dirname + '/../build/Release/libremote_server', {
  RunServer: ['void', []],
});

zetaSQLServer.RunServer.async(function (err, res) {});
