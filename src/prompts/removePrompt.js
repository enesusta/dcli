const execSync = require('child_process').execSync;
const lodash = require('lodash');
const names = execSync(`docker ps -a --format '{{.Names}}'`).toString().trim();


const message = 'Which container/s do you want to remove?';
const type = 'name';

const prompt = {
  type: 'autocomplete',
  message: message,
  name: type,
  source: removeSource
}

function removeSource(anwsers, input) {
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

module.exports = prompt;
