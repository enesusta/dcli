const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/inspect.sh');

module.exports = function(container, isIp, isJson) {
  if (isIp) {
    exec(`sh ${sh} ${container} | grep "IPAddress"`, (err, stdout, stderr) => {
      if (!err) {
        console.log(colors.cyan(stdout));
      } else {
        console.log(colors.red(err));
      }
    });
  } else {
    exec(`sh ${sh} ${container}`, (err, stdout, stderr) => {
      if (!err) {
        console.log(stdout);
      } else {
        console.log(colors.red(err));
      }
    });
  }
};
