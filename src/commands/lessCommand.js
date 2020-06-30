const inquirer = require('../inquirer');

const lessContainerIdNameExec = require('../execs/less/lessContainerIdNameExec');
const lest = require('../execs/less/less');

const lessCommand = (isContainer, isImage, isVolume) => {
  lest();
};

module.exports = lessCommand;
