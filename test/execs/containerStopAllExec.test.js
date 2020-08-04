const containerStopAllExec = require('../../src/execs/containerStopAllExec');

jest.setTimeout(30000);

describe('containerStopAllExec', () => {

  test('dcli must stop all containers', done => {
    containerStopAllExec()
      .then(res => {
        expect(res).toMatch('Containers are successfully stopped');
        done();
      });
  });

});
