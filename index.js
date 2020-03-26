#! /usr/bin/env node

const program = require('commander');
const lsCommand = require('./src/commands/lsCommand');
const stopCommand = require('./src/commands/stopCommand');

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
    .command('test')
    .action(() => {
        const test = 'test';
        for (let i = 0; i < test.length - 1; i++)
            console.log(test.charAt(i));
    });

program.parse(process.argv);