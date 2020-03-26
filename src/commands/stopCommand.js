const inquirer = require('inquirer');
const listContainerNamesPrompt = require('../prompts/listContainerNamesPrompt');
const containerStopExec = require('../execs/containerStopExec');

function stopCommand() {
    inquirer
        .prompt([listContainerNamesPrompt])
        .then(res => {
            const { type } = res;
            containerStopExec(type.toString());
        });
}

module.exports = stopCommand;