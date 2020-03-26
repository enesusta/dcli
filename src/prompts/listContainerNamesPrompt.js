const containerNames = require('../lists/containerNamesList');
const execSync = require('child_process').execSync;
const names = execSync(`docker ps --format '{{.Names}}'`).toString();

const message = "Which container do you want to stop";
const type = "type";

module.exports = {
    type: 'list',
    message: message,
    name: type,
    choices: names.split('\n')
};