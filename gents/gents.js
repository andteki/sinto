const {debug} = require('../config.json');
const tsconfigContent = require('./tsconfigContent.js');
const { createFile } = require('../tools/tools.js');
const jsonfile = require('jsonfile');
const { addDevDep, addScript } = require('../tools/dep.js');
const fs = require('fs');
const { createWeb } = require('../genweb/genweb');
const defaultTsPackageContent = require('./tsPackageContent.js');

const initTypescriptProject = async () => {
  createWeb('ts');
  createPackageJsonFile(process.cwd());
  writeConfigFile();
  showMsg();
}

const writeConfigFile = () => {
    const dir = process.cwd();
    const path = `${dir}/tsconfig.json`;
    jsonfile.writeFileSync(path, tsconfigContent, { spaces: 2 });
}

const showMsg = () => {
    console.log(`TypeScript project initialized.
Install dependencies with npm or pnpm command:

pnpm install
        `);
}

const createPackageJsonFile = (dir) => {
  const packageJsonPath = `${dir}/package.json`;
  jsonfile.writeFileSync(packageJsonPath, defaultTsPackageContent, { spaces: 2 });
  if(debug) {
      console.log('package.json file created.');
  }        
}

module.exports.initTypescriptProject = initTypescriptProject;
