const inquirer = require('../inquirer');
const listActiveContainerNamesPrompt = require('../prompts/stopPrompt');
const containerStartExec = require('../execs/containerStartExec');
const containerStartAllExec = require('../execs/containerStartAllExec');

function startCommand(isAll) {
  if (isAll) {
    containerStartAllExec();
  } else {
    inquirer.prompt([listActiveContainerNamesPrompt]).then(res => {
      const { type } = res;
      containerStartExec(type);
    });
  }
}

module.exports = startCommand;
