const execSync = require('child_process').execSync;

const names = execSync(`docker ps --format '{{.Names}}'`)
  .toString()
  .trim();
const messageContainer = 'Which container/s do you want to inspect';

const promptArr = {
  type: 'list',
  message: messageContainer,
  name: 'containerName',
  choices: names.split('\n'),
};

module.exports = promptArr;
