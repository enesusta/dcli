const axios = require('axios');
const lodash = require('lodash');

const messageContainer = 'Which container/s do you want to inspect';

const prompt = {
  type: 'autocomplete',
  message: messageContainer,
  name: 'imageName',
  source: pullSource,
  pageSize: 100
}

function pullSource(anwsers, input) {

  input = input || '';
  let page = 1;
  return new Promise((resolve, reject) => {
    axios
      .get(`https://hub.docker.com/v2/repositories/library/?page=${page}&page_size=100`)
      .then(res => {
        const view = [];
        res.data.results.forEach(e => {
          if (e.name.includes(input)) view.push(e.name);
          else return;
        });
        resolve(view);
      });

  }, lodash.random(30, 500));
}

module.exports = prompt;
