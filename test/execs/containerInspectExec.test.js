const { exec } = require("child_process");
const path = require('path');

const sh = path.resolve(__dirname, 'src/scripts/inspect.sh');

describe('inspect test', function () {
  describe('stdout test', function () {
    let captured_stdout;

    beforeAll(function (done) {
      exec(`sh ${sh} postgres_container`, function (error, stdout, stderr) {
        if (error) done(error); // Handle errors.
        captured_stdout = stdout;
        done();
      });
    });

    it('It should contains ID', function () {
      expect(captured_stdout).toMatch('Id');
    });

  });
});