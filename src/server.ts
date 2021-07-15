import { Worker } from 'worker_threads';
import * as path from 'path';

let worker: Worker;

export function runServer() {
  return new Promise((resolve, reject) => {
    worker = new Worker(path.resolve(__dirname, './runServerAddon.js'));
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

export function terminateServer() {
  worker?.terminate().then(status => {
    console.log(`ZetaSQS server has been canceled with status: ${status}`);
  });
}
