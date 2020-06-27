const lodash = require('lodash');
const execSync = require('child_process').execSync;
const dockerOutput = execSync(`docker container ls -f "status=running" --format "{{.ID}} {{.Names}}"`)
  .toString()
  .trim()
  .split('\n');