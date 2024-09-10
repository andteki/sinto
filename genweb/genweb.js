const {debug} = require('../config.json');
const fsExtra = require('fs-extra');

const defaultPackageContent = require('../genweb/generators/genPackage');
const defaultHtmlContent = require('../genweb/generators/genHtml');
const defaultGulpfileContent = require('../genweb/generators/genGulpfile');
const defaultBsconfigContent = require('../genweb/generators/genBsconfig');

const {
    createDirectory, 
    createFile,
    createGulpfileJsFile,
    createBsconfigFile,
    createIndexHtmlFile,
    createPackageJsonFile
  } = require('../tools/tools');

const createWeb = () => {
    const dir = process.cwd();
  
    createDirectory(`${dir}/src`);
    createDirectory(`${dir}/src/assets`);
  
    createFile(`${dir}/src/style.css`, '');


    createFile(`${dir}/src/app.js`, '');

    createFile(`${dir}/README.md`, '# Sinto Project');
    
    createPackageJsonFile(dir, defaultPackageContent);
    createIndexHtmlFile(dir, 'src', defaultHtmlContent);
    createGulpfileJsFile(dir, defaultGulpfileContent);    
    createBsconfigFile(dir, defaultBsconfigContent);
  
    console.log('Base directories and files created.');
};






module.exports.createWeb = createWeb;
// module.exports.createPackageJsonFile = createPackageJsonFile;
// module.exports.createGulpfileJsFile = createGulpfileJsFile;
// module.exports.createBsconfigFile = createBsconfigFile;