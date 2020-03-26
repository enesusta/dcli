const exec = require('child_process').exec;
const path = require('path');
const colors = require('colors');

const sh = path.resolve(__dirname, 'scripts/postgre-backup.sh');

module.exports = function (containerName, userName) {
    exec(`sh ${sh} ${containerName} ${userName}`, (err, stdout, stderr) => {
        if (!err) {
            console.log(`Backup succcessfully!`);
        } else {
            console.log(colors.red(err));
        }
    })
}