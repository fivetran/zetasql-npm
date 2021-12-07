import { runServer, terminateServer } from '.';

// This manuall test should run and terminate server

new Promise(resolve => setTimeout(resolve, 3000))
  .then(() => {
    console.log('terminating...');
    return terminateServer();
  })
  .then(() => {
    console.log('finished');
  });

runServer(50005);
