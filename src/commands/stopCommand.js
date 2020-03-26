const inquirer = require('inquirer');
const listInactiveContainerNamesPrompt = require('../prompts/listActiveContainerNamesPrompt');
const containerStopExec = require('../execs/containerStopExec');

function stopCommand() {
    inquirer
        .prompt([listInactiveContainerNamesPrompt])
        .then(res => {
            const { type } = res;
            containerStopExec(type);
        });
}

module.exports = stopCommand;