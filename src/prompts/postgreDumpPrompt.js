const execSync = require('child_process').execSync;

const names = execSync(`docker ps -a --format '{{.Names}}'`).toString();
const messageContainer = 'Which container will you backup';
const messageUser = 'What is its user name of that container/database?';

const promptArr = [
  {
    type: 'list',
    message: messageContainer,
    name: 'containerName',
    choices: names.split('\n'),
  },
  {
    type: 'input',
    message: messageUser,
    name: 'userName',
  },
];

module.exports = promptArr;
