const inquirer = require('inquirer');
const listActiveContainerNamesPrompt = require('../prompts/listInactiveContainerNamesPrompt');
const containerStartExec = require('../execs/containerStartExec');

function startCommand() {
    inquirer
        .prompt([listActiveContainerNamesPrompt])
        .then(res => {
            const { type } = res;
            containerStartExec(type)
        });
}

module.exports = startCommand;