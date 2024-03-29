import { setTimeout } from 'node:timers/promises';
import * as tcpPortUsed from 'tcp-port-used';
import { runServer, terminateServer, ZetaSQLClient } from '..';

// This test should run and terminate ZetaSQL gRPC server

const port = 50005;
tcpPortUsed
  .waitUntilUsed(port, 500, 1000 * 60 * 5)
  .then(() => setTimeout(500))
  .then(() => {
    console.log('Init...');
    ZetaSQLClient.init(port);
    console.log('Testing...');
    return ZetaSQLClient.getInstance().testConnection();
  })
  .then(testResult => {
    console.log(testResult ? 'Tests passed' : 'Tests failed');
  })
  .then(() => {
    console.log('Terminating...');
    return terminateServer();
  })
  .then(() => {
    console.log('Terminated');
  })
  .catch(e => console.error(e));

runServer(port).catch(e => console.error(e));
