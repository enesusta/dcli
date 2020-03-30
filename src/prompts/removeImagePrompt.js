const execSync = require('child_process').execSync;
const names = execSync(`docker images --format "{{.Repository}}"`).toString();

const message = 'Which image/s do you want to remove?';
const type = 'name';

module.exports = {
  type: 'list',
  message: message,
  name: type,
  choices: names.trim().split('\n'),
};
