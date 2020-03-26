const inquirer = require('inquirer');
const postgreDumpPrompt = require('../prompts/postgreDumpPrompt');
const mysqlDumpPrompt = require('../prompts/mysqlDumpPrompt');
const postgreDumpExec = require('../execs/postgreDumpExec');
const mysqlBackupExec = require('../execs/mysqlDumpExec');

function backupCommand(isPostgre, isMysql) {
  if (isPostgre) {
    inquirer.prompt(postgreDumpPrompt).then(res => {
      const { containerName, userName } = res;
      postgreDumpExec(containerName, userName);
    });
  }
  if (isMysql) {
    inquirer.prompt(mysqlDumpPrompt).then(res => {
      const { containerName, userName, userPassword, databaseName } = res;
      mysqlBackupExec(containerName, userName, userPassword, databaseName);
    });
  }
}

module.exports = backupCommand;
