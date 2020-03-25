#! /usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const containerExec = require('./src/execs/containerExec');
const imageExec = require('./src/execs/imageExec');
const volumeExec = require('./src/execs/volumeExec');

program
    .version('1.0.0')
    .description('CLI for Docker');

program
    .command('ls')
    .option('-t, --type', 'Type')
    .action((cmdObj) => {
        inquirer
            .prompt([
                {
                    type: 'list', message: "What would you like to see :", name: 'type', choices: [
                        'container',
                        'image',
                        'volume'
                    ]
                },
                /*
                {
                    type: 'input', message: "Pick the ", name: 'fr'
                }
                */
            ])
            .then(res => {
                const { type } = res;
                if (type === 'container') {
                    containerExec();
                } else if (type === 'image') {
                    imageExec();
                } else if (type === 'volume') {
                    volumeExec();
                    console.log('volume');
                }

            });

    });

program.parse(process.argv);