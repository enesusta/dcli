const inquirer = require('inquirer');

const containerInspectExec = require('../execs/containerInspectExec');
const inspectPrompt = require('../prompts/inspectPrompt');

function inspectCommand(isIpAddress, isJson) {
    if (isIpAddress) {
        inquirer.prompt([inspectPrompt]).then(res => {
            const { containerName } = res;
            containerInspectExec(containerName, isIpAddress, isJson);
        });
    } else if (isJson) {

    } else {
        inquirer.prompt([inspectPrompt]).then(res => {
            const { containerName } = res;
            containerInspectExec(containerName, isIpAddress, isJson);
        });
    }
};

module.exports = inspectCommand;