const execSync = require('child_process').execSync;
const names = execSync(`docker ps -a --format '{{.Names}}'`).toString();

const message = 'Which container/s do you want to remove?';
const type = 'name';

module.exports = {
  type: 'list',
  message: message,
  name: type,
  choices: names.trim().split('\n'),
};
