const lodash = require('lodash');
const execSync = require('child_process').execSync;
const names = execSync(`docker ps --format '{{.Names}}'`)
  .toString()
  .trim();

const message = 'Which container/s do you want to stop';
const type = 'type';

const prompt = {
  type: 'autocomplete',
  message: message,
  name: type,
  source: source
}

function source(anwsers, input) {
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
