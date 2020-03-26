const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/stop-all.sh');

module.exports = function(container) {
  exec(`sh ${sh} ${container}`, (err, stdout, stderr) => {
    console.log(colors.cyan('Containers are successfully stopped!'));
  });
};
