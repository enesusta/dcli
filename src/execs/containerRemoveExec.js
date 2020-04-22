const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/remove.sh');

module.exports = function (container) {

  const containerId = container.split(/\s/)[1];

  exec(`sh ${sh} ${containerId}`, (err, stdout, stderr) => {
    if (!err) {
      console.log('Container %s is successfully removed!', colors.cyan(containerId));
    } else {
      console.log(colors.red(err));
    }
  });
};
