const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/stop.sh');


module.exports = (containerId, containerName) => {

  exec(`sh ${sh} ${containerId}`, (err, stdout, stderr) => {
    if (!err) {
      console.log('The container with the ID: %s || and the name %s has been successfully stopped!', colors.cyan(containerId),  colors.bgYellow(containerName),);
    } else {
      console.log(colors.red(err));
    }
  });
};
