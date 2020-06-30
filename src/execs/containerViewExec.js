const exec = require('child_process').exec;
const colors = require('colors');
const { isOdd, isEven } = require('../utils/mathUtils');


module.exports = () => {
  exec(`docker ps -a`, (err, stdout, stderr) => {
    if (!err) {
      const lines = stdout.split('\n');
      console.log(colors.yellow(lines[0]));
      for (let i = 1; i < lines.length; i++) {
        if (isOdd(i))
          console.log(lines[i]);
        if (isEven(i))
          console.log(colors.cyan(lines[i]));
      }
    } else {
      console.log(colors.red(err));
    }
  });
};