import { Worker } from 'worker_threads';

let worker: Worker | undefined;

const workerCode = `
const ffi = require('ffi-napi');

const extension = process.arch.startsWith('arm') ? '_arm' : '';
const libPath = String(process.argv[3]) + '/' + 'libremote_server' + extension;
const zetaSQLServer = ffi.Library(libPath, {
  RunServer: ['void', ['int']],
});

const port = Number(process.argv[2]);
zetaSQLServer.RunServer.async(port, () => {
  // do nothing
});
`;

export function runServer(port: number): Promise<void> {
  return new Promise((resolve, reject) => {
    worker = new Worker(workerCode, {
      argv: [port, `${__dirname}/zetasql-snowflake`],
      eval: true,
    });
    worker.on('message', resolve);
    worker.on('error', error => reject(new Error(`Worker stopped due to error ${error}`)));
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

export function terminateServer(): Promise<void> | undefined {
  return worker?.terminate().then(status => {
    console.log(`ZetaSQL server has been canceled with status: ${status}`);
  });
}
