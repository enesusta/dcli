const lodash = require('lodash');
const execSync = require('child_process').execSync;
const dockerOutput = execSync(`docker container ls -f "status=running" --format "{{.ID}} {{.Names}}"`)
  .toString()
  .trim()
  .split('\n');

const message = 'Which container/s do you want to stop?';
const name = 'containerName';

const prompt = {
  type: 'autocomplete',
  message: message,
  name: name,
  source: stopPromptSource,
};

function stopPromptSource(answers, input) {
  input = input || '';
  return new Promise((resolve, reject) => {
    const filteredContainers = [];

    dockerOutput
      .filter(e => e.includes(input))
      .forEach(e => filteredContainers.push(e));

    resolve(filteredContainers);

  }, lodash.random(30, 500));
}

module.exports = prompt;