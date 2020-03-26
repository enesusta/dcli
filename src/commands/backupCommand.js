const inquirer = require('inquirer');
const postgreBackupPrompt = require('../prompts/postgreBackupPrompt');
const containerBackupExec = require('../execs/postgreBackupExec');

function backupCommand() {
    inquirer
        .prompt(postgreBackupPrompt)
        .then(res => {
            const { containerName, userName } = res;
            containerBackupExec(containerName, userName);
        })
}

module.exports = backupCommand;