const inquirer = require('../inquirer');
const listInactiveContainerNamesPrompt = require('../prompts/listActiveContainerNamesPrompt');
const containerStopExec = require('../execs/containerStopExec');
const containerStopAllExec = require('../execs/containerStopAllExec');

function stopCommand(isAll) {
    if (isAll) {
        containerStopAllExec();
    } else {
        inquirer
            .prompt([listInactiveContainerNamesPrompt])
            .then(res => {
                const { type } = res;
                containerStopExec(type);
            });
    }
}

module.exports = stopCommand;