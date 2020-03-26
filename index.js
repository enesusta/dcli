#! /usr/bin/env node
const program = require('commander');
const lsCommand = require('./src/commands/lsCommand');
const stopCommand = require('./src/commands/stopCommand');
const startCommand = require('./src/commands/startCommand');
const backupCommand = require('./src/commands/backupCommand');

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
    .command('backup')
    .option('-p, --postgre', 'Dump Postgre Database')
    .action((cmdObj) => {
        const { p } = cmdObj;
        console.log(p);
    });

program.parse(process.argv);