const inquirer = require('../inquirer');

const containerExec = require('../execs/containerViewExec');
const imageExec = require('../execs/imageViewExec');
const volumeExec = require('../execs/volumeViewExec');
const viewPrompt = require('../prompts/viewPrompt');

const map = {
    container: containerExec,
    image: imageExec,
    volume: volumeExec
};

function lsCommamnd(isContainer, isImage, isVolume) {
    if (isContainer) {
        containerExec();
    } else if (isImage) {
        imageExec();
    } else if (isVolume) {
        volumeExec();
    } else {
        inquirer
            .prompt([viewPrompt])
            .then(res => {
                const { type } = res;
                map[type.toString()]();
            });
    }
}

module.exports = lsCommamnd;
