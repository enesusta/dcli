const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/stop-all.sh');

module.exports = function(container) {
  exec(`sh ${sh} ${container}`, (err, stdout, stderr) => {
    if (!err) {
      const lines = stdout.trim().split('\n');
      lines.forEach(line => {
        console.log('Container ID [%s] is successfuly stopped', colors.cyan(line));
      });
      console.log('%s!', colors.cyan('Containers are successfuly stopped'));
    } else {
      console.log(colors.red(err));
    }
  });
};
