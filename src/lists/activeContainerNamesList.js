
const exec = require('child_process').exec;

const containerNamesPromise = new Promise((resolve, reject) => {
    exec(`docker ps -a --format '{{.Names}}'`, (err, stdout, stderr) => {
        if (!err) {
            resolve(stdout.split('\n'));
        } else {
            reject(err);
        }
    });
})

function getList() {
    return containerNamesPromise;
}

module.exports = getList;