const containerNames = require('../lists/inactiveContainerNamesList');
const execSync = require('child_process').execSync;
const names = execSync(`docker container ls -f "status=exited" --format '{{.Names}}'`)
  .toString()
  .trim();

const message = 'Which container/s do you want to start?';
const type = 'type';

module.exports = {
  type: 'list',
  message: message,
  name: type,
  choices: names.split('\n'),
};
