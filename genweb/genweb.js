const {debug} = require('../config.json');
const jsonfile = require('jsonfile');
const fsExtra = require('fs-extra');

const defaultPackageContent = require('../genweb/generators/genPackage');
const defaultHtmlContent = require('../genweb/generators/genHtml');
const defaultGulpfileContent = require('../genweb/generators/genGulpfile');
const defaultTsGulpfileContent = require('../gents/generators/genTsGulpfile');
const defaultBsconfigContent = require('../genweb/generators/genBsconfig');


const {
    createDirectory, 
    createFile
  } = require('../tools/tools');

const createWeb = (type) => {
    const currentDirectory = process.cwd();
  
    createDirectory(`${currentDirectory}/src`);
    createDirectory(`${currentDirectory}/src/assets`);
  
    createFile(`${currentDirectory}/src/style.css`, '');

    let content = '';
    if(type === 'ts') {
        createFile(`${currentDirectory}/src/app.ts`, '');
        content = defaultTsGulpfileContent;
    }else {
        createFile(`${currentDirectory}/src/app.js`, '');
        content = defaultGulpfileContent;
    }

    createFile(`${currentDirectory}/README.md`, '# Sinto Project');
    
    createPackageJsonFile(currentDirectory);
    createIndexHtmlFile(currentDirectory);
    createGulpfileJsFile(currentDirectory, content);    
    createBsconfigFile(currentDirectory);
  
    console.log('Base directories and files created.');
};

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

const createGulpfileJsFile = (directory, content) => {
  const gulpfileJsPath = `${directory}/gulpfile.js`;
  fsExtra.writeFileSync(gulpfileJsPath, content);
  if(debug)
  console.log('gulpfile.js file created.');
}



const createBsconfigFile = (directory) => {
  const bsconfigPath = `${directory}/bs-config.json`;
  jsonfile.writeFileSync(bsconfigPath, defaultBsconfigContent, { spaces: 2 });
  if(debug)
  console.log('bs-config.json file created.');
}

module.exports.createWeb = createWeb;
module.exports.createPackageJsonFile = createPackageJsonFile;
module.exports.createIndexHtmlFile = createIndexHtmlFile;
module.exports.createGulpfileJsFile = createGulpfileJsFile;
module.exports.createBsconfigFile = createBsconfigFile;