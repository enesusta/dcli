const execSync = require('child_process').execSync;
const lodash = require('lodash');
const names = execSync(`docker container ls --format '{{.Names}} {{.ID}}'`).toString().trim();
const messageContainer = 'Which container will you exec';
const messageUser = 'What is the name of the command you want to start';

const prompt = {
  type: 'autocomplete',
  message: messageContainer,
  name: 'containerName',
  source: execSource
}

function execSource(anwsers, input) {
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
    name: 'command',
  }
];

module.exports = promptArr;
