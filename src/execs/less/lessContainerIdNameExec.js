const exec = require('child_process').exec;
const colors = require('colors');
const { isOdd, isEven } = require('../../utils/mathUtils');

const formattedMessage = `docker container ls --format "{{.ID}} {{.Names}}"`;

module.exports = () => {
  exec(formattedMessage, (err, stdout) => {
    if (!err) {
      const lines = stdout.trim().split(/\n/);
      console.log('Container ID | Container Name');
      lines.forEach((e, index) => {
        const seperateArray = e.split(/\s/);
        const containerId = seperateArray[0];
        const containerName = seperateArray[1];
        if (isOdd(index)) console.log(colors.red(containerId), " ", containerName);
        if (isEven(index)) console.log(containerId, " ", colors.red(containerName));
      });
    } else {
      console.log(colors.red(err));
    }
  });

};