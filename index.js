#! /usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const containerExec = require('./src/execs/containerExec');
const imageExec = require('./src/execs/imageExec');
const volumeExec = require('./src/execs/volumeExec');
const listPrompt = require('./src/prompts/listPrompt');

const map = {
    container: containerExec,
    image: imageExec,
    volume: volumeExec
};

program
    .version('1.0.0')
    .description('CLI for Docker');

const main = () => {
    inquirer
        .prompt([listPrompt])
        .then(res => {
            const { type } = res;
            map[type.toString()]();
        });
}

program
    .command('ls')
    .action(() => {
        main();
    });

program.parse(process.argv);