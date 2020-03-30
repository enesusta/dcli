const exec = require('child_process').exec;
const colors = require('colors');
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/remove-image.sh');
const shforce = path.resolve(__dirname, 'scripts/remove-image-f.sh');

module.exports = function(container, isForce) {
  if (isForce) {
    exec(`sh ${shforce} ${container}`, (err, stdout, stderr) => {
      if (!err) {
        console.log('Image %s is successfully removed!', colors.cyan(container));
      } else {
        console.log(colors.red(err));
      }
    });
  } else {
    exec(`sh ${sh} ${container}`, (err, stdout, stderr) => {
      if (!err) {
        console.log('Image %s is successfully removed with force!', colors.cyan(container));
      } else {
        console.log(colors.red(err));
      }
    });
  }
};
