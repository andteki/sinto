const {debug} = require('../../config.json');
const fsExtra = require('fs-extra');

const defaultTsGulpfileContent = require('./genTsGulpfile');
const defaultHtmlContent = require('../../genweb/generators/genHtml');
const defaultTsBsconfigContent = require('./genTsBsconfig');
const defaultTsPackageContent = require('../contents/tsPackageContent');

const {
  createDirectory, 
  createFile,
  createGulpfileJsFile,
  createBsconfigFile,
  createIndexHtmlFile,
  createPackageJsonFile
} = require('../../tools/tools');

const outputDir = 'app';

const createTsWeb = () => {
  const dir = process.cwd();

  createDirectory(`${dir}/src`);
  createDirectory(`${dir}/${outputDir}`);
  createDirectory(`${dir}/${outputDir}/assets`);

  createFile(`${dir}/${outputDir}/style.css`, '');
  
  createFile(`${dir}/src/app.ts`, '');
    
  createFile(`${dir}/README.md`, '# Sinto Project');
  
  createPackageJsonFile(dir, defaultTsPackageContent);
  createIndexHtmlFile(dir, outputDir, defaultHtmlContent);
  createGulpfileJsFile(dir, defaultTsGulpfileContent);    
  createBsconfigFile(dir, defaultTsBsconfigContent);


  console.log('Base directories and files created.');
};



module.exports.createTsWeb = createTsWeb