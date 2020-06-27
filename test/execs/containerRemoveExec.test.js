const { exec } = require("child_process");
const path = require('path');

const sh = path.resolve(__dirname, 'src/scripts/remove.sh');

describe('remove test', function () {
  describe('stdout test', function () {
    let captured_stdout;

    beforeAll(function (done) {
      exec(`sh ${sh} test`, function (error, stdout, stderr) { // there is no container which is named test
        if (error) captured_stdout = error.message;
        else captured_stdout = stdout;
        done();
      });
    });

    it('It should return No such container message', function () {
      expect(captured_stdout).toMatch('Command failed');
    });

  });
});