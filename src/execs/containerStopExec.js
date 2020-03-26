
const exec = require('child_process').exec;
const colors = require('colors');

module.exports = function (container) {
    exec(`docker stop ${container}`, (err, stdout, stderr) => {
        if (!err) {
            console.log('Container %s is successfully stopped', colors.cyan(container));
        } else {
            console.log(colors.red(err));
        }
    })
}