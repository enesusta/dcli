const inquirer = require('../inquirer');
const pullPrompt = require('../prompts/pullPrompt');

module.exports = () => {
    inquirer
        .prompt([pullPrompt])
        .then(res => {
            const { imageName } = res;
            console.log(res);
        });
};