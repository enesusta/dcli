const { exec } = require("child_process");
const path = require('path');

const sh = path.resolve(__dirname, 'scripts/inspect.sh');

describe('inspect', function () {
  describe('exec', function () {
    let captured_stdout;

    beforeAll(function (done) {
      exec(`sh ${sh} postgres_container`, function (error, stdout, stderr) {
        if (error) done(error); // Handle errors.
        captured_stdout = stdout;
        done();
      });
    });

    it('should be part of group dev', function () {
      //     captured_stdout.should.containEql('Id');
      expect(captured_stdout).toMatch('Id');
    });

  });
});