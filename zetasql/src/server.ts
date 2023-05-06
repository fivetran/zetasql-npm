import { ChildProcess, execFile } from 'child_process';

let childProcess: ChildProcess;

export function runServer(port: number): Promise<void> {
  const extension =
    (process.arch.startsWith('arm') ? '_arm' : '') + (process.platform === 'darwin' ? '' : '.so');

  return new Promise<void>(() => {
    childProcess = execFile(`${__dirname}/zetasql/remote_server${extension}`, [port.toString()]);
    childProcess.stdout?.on('data', data => process.stdout.write(data));
    childProcess.stderr?.on('data', data => process.stdout.write(data));
  });
}

export function terminateServer(): void {
  childProcess.kill('SIGKILL');
}
