#! /usr/bin/env node
const program = require('commander');
const lsCommand = require('./src/commands/lsCommand');
const stopCommand = require('./src/commands/stopCommand');
const startCommand = require('./src/commands/startCommand');
const backupCommand = require('./src/commands/dumpCommand');
const removeCommand = require('./src/commands/removeCommand');
const removeImageCommand = require('./src/commands/removeImageCommand');
const inspectCommand = require('./src/commands/inspectCommand');

program.version('1.0.7').description('CLI for Docker');

program
  .option('-c, --container', 'List Containers')
  .option('-i, --image', 'List Images')
  .option('-v, --volume', 'List Volumes')
  .action(obj => {
    const { container, image, volume } = obj;
    lsCommand(container, image, volume);
  });

program
  .command('stop')
  .option('-a, --all', 'Stops Containers')
  .action(obj => {
    const { all } = obj;
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
    console.log(force);
    removeImageCommand(force);
  });

program
  .command('inspect')
  .option('-j, --json', 'Creates json file of output of inspect log')
  .option('-i, --ipaddress', 'Finds IPv4 address of container')
  .action(obj => {
    const { json, ipaddress } = obj;
    inspectCommand(ipaddress, json);
  });

program
  .command('dump')
  .option('-p, --postgre', 'Dump Postgre Database')
  .option('-m, --mysql', 'Dump Mysql Database')
  .action(obj => {
    const { postgre, mysql } = obj;
    backupCommand(postgre, mysql);
  });

program.parse(process.argv);
