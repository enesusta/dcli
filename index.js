#! /usr/bin/env node
const program = require('commander');
const lsCommand = require('./src/commands/lsCommand');
const stopCommand = require('./src/commands/stopCommand');
const startCommand = require('./src/commands/startCommand');
const backupCommand = require('./src/commands/dumpCommand');

program
    .version('1.0.0')
    .description('CLI for Docker');

program
    .command('ls')
    .action(() => {
        lsCommand();
    });

program
    .command('stop')
    .action(() => {
        stopCommand();
    });

program
    .command('start')
    .action(() => {
        startCommand();
    });

program
    .command('dump')
    .option('-p, --postgre', 'Dump Postgre Database')
    .option('-m, --mysql', 'Dump Mysql Database')
    .action((obj) => {
        const { postgre, mysql } = obj;
        backupCommand(postgre, mysql);
    });

program.parse(process.argv);