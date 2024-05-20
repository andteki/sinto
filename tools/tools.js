const {debug} = require('../config.json');
const fsExtra = require('fs-extra');

const createDirectory = (path) => {
    if (!fsExtra.existsSync(path)) {
      fsExtra.mkdirSync(path);
    }
}

const createFile = (path, content) => {
    if (!fsExtra.existsSync(path)) {
        fsExtra.writeFileSync(path, content);
    }
}

module.exports.createDirectory = createDirectory;
module.exports.createFile = createFile;
