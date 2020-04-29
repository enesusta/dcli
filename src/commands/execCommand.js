const inquirer = require('../inquirer');
const execPrompt = require('../prompts/execPrompt');
const exec = require('../execs/containerExec');

module.exports = () => {
  inquirer
    .prompt([execPrompt])
    .then(res => {
      // const {} = res;
      console.log(res);

      //exec(type);
    });
};
