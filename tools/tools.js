const {debug} = require('../config.json');
const fsExtra = require('fs-extra');
const jsonfile = require('jsonfile');

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

const createGulpfileJsFile = (dir, content) => {
    const gulpfileJsPath = `${dir}/gulpfile.js`;
    fsExtra.writeFileSync(gulpfileJsPath, content);
    if(debug)
    console.log('gulpfile.js file created.');
}

const createBsconfigFile = (directory, content) => {
    const bsconfigPath = `${directory}/bs-config.json`;
    jsonfile.writeFileSync(bsconfigPath, content, { spaces: 2 });
    if(debug)
    console.log('bs-config.json file created.');
}

const createIndexHtmlFile = (dir, outputDir, content) => {
    const indexHtmlPath = `${dir}/${outputDir}/index.html`;
    fsExtra.writeFileSync(indexHtmlPath, content);
    if(debug)
    console.log('index.html file created');
}

const createPackageJsonFile = (directory, content) => {
    const packageJsonPath = `${directory}/package.json`;
    jsonfile.writeFileSync(packageJsonPath, content, { spaces: 2 });
    if(debug) {
        console.log('package.json file created.');
    }        
}

module.exports.createDirectory = createDirectory;
module.exports.createFile = createFile;
module.exports.createGulpfileJsFile = createGulpfileJsFile;
module.exports.createBsconfigFile = createBsconfigFile;
module.exports.createIndexHtmlFile = createIndexHtmlFile;
module.exports.createPackageJsonFile = createPackageJsonFile;
