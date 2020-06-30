const colors = require('colors');
const axios = require('axios');
const util = require('util');

module.exports = () => {
  axios
    .get('http://localhost:2375/containers/json?all=1')
    .then(res => {
      const header = util.format('%s\t\t%s', colors.red('Id'), colors.red('Name'));
      console.log(header);
      res.data.forEach(e => {

        const id = e['Id'].substring(0,12);
        const name = e['Names'][0];
        const row = util.format('%s\t%s', id,name);
        console.log(row);
      });
    });
};