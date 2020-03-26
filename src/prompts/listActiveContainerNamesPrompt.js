const containerNames = require('../lists/activeContainerNamesList');
const execSync = require('child_process').execSync;
const names = execSync(`docker ps --format '{{.Names}}'`)
  .toString()
  .trim();

const message = 'Which container/s do you want to stop';
const type = 'type';

module.exports = {
  type: 'list',
  message: message,
  name: type,
  choices: names.split('\n'),
};
