const inquirer = require('../inquirer');

const removePrompt = require('../prompts/removePrompt');
const removeWithVolumePrompt = require('../prompts/removeWithVolumePrompt');
const removeWithForcePrompt = require('../prompts/removeWithForcePrompt');

const containerRemoveExec = require('../execs/containerRemoveExec');
const containerRemoveWithForceExec = require('../execs/containerRemoveWithForce');
const containerRemoveWithVolumeExec = require('../execs/containerRemoveWithVolumeExec');


function removeCommand(withVolume, withForce) {
    if (withVolume) {
        inquirer.prompt([removeWithVolumePrompt]).then(res => {
            const { name } = res;
            containerRemoveWithVolumeExec(name);
        });
    } else if (withForce) {
        inquirer.prompt([removeWithForcePrompt]).then(res => {
            const { name } = res;
            containerRemoveWithForceExec(name);
        });
    } else {
        inquirer.prompt([removePrompt]).then(res => {
            const { name } = res;
            containerRemoveExec(name);
        });
    }
}

module.exports = removeCommand;