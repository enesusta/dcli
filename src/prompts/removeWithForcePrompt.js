const execSync = require('child_process').execSync;
const lodash = require('lodash');
const names = execSync(`docker ps -a --format '{{.Names}}'`).toString().trim();

const message = "Which container/s do you want to remove with force [Make sure what you do, this command forces the removal of a running container (uses SIGKILL)]";
const type = "name";

const prompt = {
    type: 'autocomplete',
    message: message,
    name: type,
    source: removeSource
}

function removeSource(anwsers, input) {
    input = input || '';
    return new Promise((resolve, reject) => {
        const containers = names.split('\n');
        const view = [];

        containers.forEach(e => {
            if (e.includes(input)) view.push(e);
            else return;
        });

        resolve(view);
    }, lodash.random(30, 500));
}

module.exports = prompt;