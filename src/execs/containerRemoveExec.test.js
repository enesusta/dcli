const { exec } = require("child_process");
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/remove.sh');

describe('remove test', function () {
  describe('stdout test', function () {
    let captured_stdout;

    beforeAll(function (done) {
      exec(`sh ${sh} test`, function (error, stdout, stderr) { // there is no container which is named test
        if (error) done(error); // Handle errors.
        captured_stdout = stdout;
        done();
      });
    });

    it('It should contains ID', function () {
      expect(captured_stdout).toMatch('No such container');
    });

  });
});