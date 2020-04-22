const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/remove-image.sh');
const shforce = path.resolve(__dirname, 'scripts/remove-image-f.sh');

module.exports = function (container, isForce) {

  const containerId = container.split(/\s/)[1];

  if (isForce) {
    exec(`sh ${shforce} ${containerId}`, (err, stdout, stderr) => {
      if (!err) {
        console.log('Image %s is successfully removed!', colors.cyan(containerId));
      } else {
        console.log(colors.red(err));
      }
    });
  } else {
    exec(`sh ${sh} ${containerId}`, (err, stdout, stderr) => {
      if (!err) {
        console.log('Image %s is successfully removed with force!', colors.cyan(containerId));
      } else {
        console.log(colors.red(err));
      }
    });
  }
};
