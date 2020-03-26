const execSync = require('child_process').execSync;
const names = execSync(`docker ps -a --format '{{.Names}}'`).toString();

const message = "Which container/s do you want to remove with its volumes [Make sure what you do, this command removes anonymous volumes associated with the container]";
const type = "name";

module.exports = {
    type: 'list',
    message: message,
    name: type,
    choices: names.split('\n')
};