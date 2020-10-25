const lodash = require('lodash');
const { execSync } = require('child_process');
const names = execSync(`docker container ls -f "status=exited" -f "status=paused" --format "{{.ID}} {{.Names}}"`)
  .toString()
  .trim();

const message = 'Which container/s do you want to stop';
const type = 'type';

const startSource = (anwsers, input) => {
  input = input || '';
  return new Promise((resolve, reject) => {
    const containers = names.split('\n');
    const view = [];

    containers
      .filter(e => e.includes(input))
      .forEach(e => {
        view.push(e);
      });

    resolve(view);
  }, lodash.random(30, 500));
};


const startPrompt = {
  type: 'autocomplete',
  message: message,
  name: type,
  source: startSource,
};

module.exports = startPrompt;
