const execSync = require('child_process').execSync;
const lodash = require('lodash');
const names = execSync(`docker ps -a --format '{{.Names}}'`).toString().trim();
const messageContainer = 'Which container will you backup';
const messageUser = 'What is its current name user of that container?';
const messagePasswordUser = 'What is its password of that container/database?';
const messageDatabase = 'What is its name of that database?';

const prompt = {
  type: 'autocomplete',
  message: messageContainer,
  name: 'containerName',
  source: dumpSource
}

function dumpSource(anwsers, input) {
  input = input || '';
  return new Promise((resolve, reject) => {
    const containers = names.split('\n');
    const view = [];

    containers.forEach(e => {
      if (e.includes(input)) view.push(e);
      else return;
    });

    resolve(view);
  }, lodash.random(30, 500));
}


const promptArr = [
  prompt,
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
