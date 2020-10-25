const inquirer = require('../inquirer');
const startPrompt = require('../prompts/startPrompt');
const containerStartExec = require('../execs/containerStartExec');
const containerStartAllExec = require('../execs/containerStartAllExec');

function startCommand(isAll) {
  if (isAll) {
    containerStartAllExec();
  } else {
    inquirer.prompt([startPrompt]).then(res => {
      const { type } = res;
      containerStartExec(type);
    });
  }
}

module.exports = startCommand;
