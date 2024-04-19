const {debug} = require('../config.json');
const fsExtra = require('fs-extra');
const jsonfile = require('jsonfile');
const fs = require('fs');

const defaultPackageContent = require('../generators/genPackage');
const defaultHtmlContent = require('../generators/genHtml');
const defaultGulpfileContent = require('../generators/genGulpfile');
const defaultBsconfigContent = require('../generators/genBsconfig');

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

const createPackageJsonFile = (directory) => {
    const packageJsonPath = `${directory}/package.json`;
    jsonfile.writeFileSync(packageJsonPath, defaultPackageContent, { spaces: 2 });
    if(debug) {
        console.log('package.json file created.');
    }        
}

const createIndexHtmlFile = (directory) => {
    const indexHtmlPath = `${directory}/src/index.html`;
    fsExtra.writeFileSync(indexHtmlPath, defaultHtmlContent);
    if(debug)
    console.log('index.html file created');
}

const createGulpfileJsFile = (directory) => {
    const gulpfileJsPath = `${directory}/gulpfile.js`;
    fsExtra.writeFileSync(gulpfileJsPath, defaultGulpfileContent);
    if(debug)
    console.log('gulpfile.js file created.');
}

const createBsconfigFile = (directory) => {
    const bsconfigPath = `${directory}/bs-config.json`;
    jsonfile.writeFileSync(bsconfigPath, defaultBsconfigContent, { spaces: 2 });
    if(debug)
    console.log('bs-config.json file created.');
}

module.exports.createDirectory = createDirectory;
module.exports.createFile = createFile;
module.exports.createPackageJsonFile = createPackageJsonFile;
module.exports.createIndexHtmlFile = createIndexHtmlFile;
module.exports.createGulpfileJsFile = createGulpfileJsFile;
module.exports.createBsconfigFile = createBsconfigFile;
