const inquirer = require('../inquirer');

const removeImagePrompt = require('../prompts/removeImagePrompt');
const containerRemoveImageExec = require('../execs/containerRemoveImageExec');

function removeImageCommand(isForce) {
  if (isForce) {
    inquirer
      .prompt([removeImagePrompt])
      .then(res => {
        const { name } = res;
        containerRemoveImageExec(name, isForce);
      });
  } else {
    inquirer
      .prompt([removeImagePrompt])
      .then(res => {
        const { name } = res;
        containerRemoveImageExec(name, isForce);
      });
  }
}

module.exports = removeImageCommand;
