const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/start-all.sh');

module.exports = function () {
    exec(`sh ${sh}`, (err, stdout, stderr) => {
        console.log('%s!', colors.cyan('Containers are successfuly started'));
    });
};
