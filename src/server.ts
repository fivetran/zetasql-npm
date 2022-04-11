import * as path from 'path';
import { Worker } from 'worker_threads';

let worker: Worker | undefined;

export function runServer(port: number): Promise<void> {
  return new Promise((resolve, reject) => {
    worker = new Worker(path.resolve(__dirname, './runServerAddon.js'), { argv: [port] });
    worker.on('message', resolve);
    worker.on('error', reject);
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
