import { ChildProcess, exec } from 'child_process';

let childProcess: ChildProcess;

export function runServer(port: number): Promise<void> {
  const extension = process.arch.startsWith('arm') ? '_arm' : '';
  return new Promise<void>(() => {
    childProcess = exec(`${__dirname}/snowflake/remote_server${extension} ${port}`);
    childProcess.stdout?.on('data', data => process.stdout.write(data));
    childProcess.stderr?.on('data', data => process.stdout.write(data));
  });
}

export function terminateServer(): void {
  childProcess.kill();
}
