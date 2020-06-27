const inquirer = require('../inquirer');
const stopPrompt = require('../prompts/stopPrompt');
const containerStopExec = require('../execs/containerStopExec');
const containerStopAllExec = require('../execs/containerStopAllExec');

function stopCommand(isAll) {
  if (isAll) {
    containerStopAllExec();
  } else {
    inquirer
      .prompt([stopPrompt])
      .then(res => {
        const { containerName } = res;
        const containerInformation = containerName.split(/\s/);
        containerStopExec(containerInformation[0], containerInformation[1]);
      });
  }
}

module.exports = stopCommand;