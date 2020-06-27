const inquirer = require('../inquirer');

const lessContainerIdNameExec = require('../execs/less/lessContainerIdNameExec');

const lessCommand = (isContainer, isImage, isVolume) => {
    lessContainerIdNameExec();
};

module.exports = lessCommand;
