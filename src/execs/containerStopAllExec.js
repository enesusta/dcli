const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/stop-all.sh');

module.exports = container => {
  return new Promise((resolve, reject) => {
    exec(`sh ${sh} ${container}`, (err, stdout, stderr) => {
      if (!err) {

        const lines = stdout.trim().split('\n');
        lines.forEach(line => {
          console.log('Container with ID [%s] is successfully stopped', colors.cyan(line));
        });
        console.log('%s!', colors.cyan('Containers are successfully stopped'));

        const resolveOutput = 'Containers are successfully stopped';
        resolve(resolveOutput);

      } else {
        console.log(colors.red(err));
        reject(err);
      }
    });
  });
};
