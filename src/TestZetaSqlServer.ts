import { runServer, terminateServer, ZetaSQLClient } from '.';

// This test should run and terminate ZetaSQL gRPC server

const port = 50005;
void new Promise(resolve => setTimeout(resolve, 3000))
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
  });

runServer(port).catch(err => console.error(err));
