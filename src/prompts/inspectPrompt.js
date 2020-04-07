const execSync = require('child_process').execSync;
const lodash = require('lodash');

const names = execSync(`docker ps --format '{{.Names}}'`)
  .toString()
  .trim();
const messageContainer = 'Which container/s do you want to inspect';

const prompt = {
  type: 'autocomplete',
  message: messageContainer,
  name: 'containerName',
  source: inspectSource
}

function inspectSource(anwsers, input) {
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
