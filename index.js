#! /usr/bin/env node
const program = require('commander');
const lsCommand = require('./src/commands/lsCommand');
const stopCommand = require('./src/commands/stopCommand');
const startCommand = require('./src/commands/startCommand');
const backupCommand = require('./src/commands/dumpCommand');
const removeCommand = require('./src/commands/removeCommand');
const removeImageCommand = require('./src/commands/removeImageCommand');
const inspectCommand = require('./src/commands/inspectCommand');
const pullCommand = require('./src/commands/pullCommand');
const execCommand = require('./src/commands/execCommand');
const lessCommand = require('./src/commands/lessCommand');

program.version('1.0.8').description('CLI for Docker');

program
  .option('-c, --container', 'List Containers')
  .option('-i, --image', 'List Images')
  .option('-v, --volume', 'List Volumes')
  .action(obj => {
    const { container, image, volume } = obj;
    lsCommand(container, image, volume);
  });

program
  .command('cin')
  .action(() => {
    lessCommand();
  });

program
  .command('stop')
  .option('-a, --all', 'Stops Containers')
  .action(obj => {
    const { all } = obj;
    console.log('burada');
    console.log(all);
    stopCommand(all);
  });

program
  .command('start')
  .option('-a, --all', 'Starts Containers')
  .action(obj => {
    const { all } = obj;
    startCommand(all);
  });

program
  .command('rm')
  .option('-v, --volume', 'Remove anonymous volumes associated with the container')
  .option('-f, --force', 'Force the removal of a running container (uses SIGKILL)')
  .action(obj => {
    const { volume, force } = obj;
    removeCommand(volume, force);
  });

program
  .command('rmi')
  .option('-f, --force', 'Removes image that has associated with the container')
  .action(obj => {
    const { force } = obj;
    console.log(`force is ${force}`);
    if (force) {
      removeImageCommand(force);
    } else {
      removeImageCommand();
    }
  });

program
  .command('inspect')
  .option('-j, --json', 'Creates json file of output of inspect log')
  .option('-h, --host', 'Finds IPv4 address of container')
  .action(obj => {
    const { json, host } = obj;
    inspectCommand(host, json);
  });

program
  .command('dump')
  .option('-p, --postgre', 'Dump Postgre Database')
  .option('-m, --mysql', 'Dump Mysql Database')
  .action(obj => {
    const { postgre, mysql } = obj;
    backupCommand(postgre, mysql);
  });

program
  .command('pull')
  .action(() => {
    pullCommand();
  });

program
  .command('exec')
  .action(() => {
    console.log('burada');
  });

program.parse(process.argv);
