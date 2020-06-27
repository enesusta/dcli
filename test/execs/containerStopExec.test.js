const { exec } = require('child_process');
const containerStopExec = require('../../src/execs/containerStopExec');

describe('containerStopExec test', () => {
  let containerId;

  beforeAll(done => {
    exec(`docker run -d --name redis-test redis`, (err, stdout) => {
      if (err) done(err);
      containerId = stdout;
      done();
    });
  });

  test('dcli must stop the container which related to given by parameters'
    , async done => {
      containerStopExec(containerId, 'redis-test')
        .then(res => {
          expect(res).toMatch(`The container with the ID: ${containerId}`);
          done();
        });
    });

  afterAll(() => {
    exec(`docker rm -f ${containerId}`);
  });
});
