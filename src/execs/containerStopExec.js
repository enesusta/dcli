const exec = require('child_process').exec;
const colors = require('colors');
const util = require('util');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/stop.sh');


module.exports = (containerId, containerName) => {
  return new Promise((resolve, reject) => {
    exec(`sh ${sh} ${containerId}`, (err, stdout, stderr) => {
      if (!err) {

        console.log('The container with the ID: %s || and the name %s has been successfully stopped!', colors.cyan(containerId), colors.bgYellow(containerName));

        const output = util.format('The container ' +
          'with the ID: %s || and the name %s ' +
          'has been successfully stopped', containerId, containerName);

        resolve(output);

      } else {
        console.log(colors.red(err));
        reject(err);
      }
    });
  });

};
