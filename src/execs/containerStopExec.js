const exec = require('child_process').exec;
const colors = require('colors');
const util = require('util');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/stop.sh');

module.exports = function (container) {
    const argv = util.format("docker stop %s", container);
    console.log(sh);

    exec(`sh ${sh} ${container}`, (err, stdout, stderr) => {
        if (!err) {
            console.log('Container %s is successfully stopped', colors.cyan(container));
        } else {
            console.log(colors.red(err));
        }
    });
}