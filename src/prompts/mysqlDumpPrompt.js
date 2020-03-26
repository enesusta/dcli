const execSync = require('child_process').execSync;

const names = execSync(`docker ps -a --format '{{.Names}}'`).toString().trim();
const messageContainer = 'Which container will you backup';
const messageUser = 'What is its current name user of that container?';
const messagePasswordUser = 'What is its password of that container/database?';
const messageDatabase = 'What is its name of that database?';

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
  {
    type: 'password',
    message: messagePasswordUser,
    name: 'userPassword'
  },
  {
    type: 'input',
    message: messageDatabase,
    name: 'databaseName'
  }
];

module.exports = promptArr;
