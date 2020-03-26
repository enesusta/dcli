const execSync = require('child_process').execSync;
const names = execSync(`docker ps -a --format '{{.Names}}'`).toString().trim();

const message = "Which container/s do you want to remove with force [Make sure what you do, this command forces the removal of a running container (uses SIGKILL)]";
const type = "name";

module.exports = {
    type: 'list',
    message: message,
    name: type,
    choices: names.split('\n')
};