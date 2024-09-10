const {debug} = require('../config.json');
const tsconfigContent = require('./contents/tsconfigContent.js');
const { createFile } = require('../tools/tools.js');
const jsonfile = require('jsonfile');
const { addDevDep, addScript } = require('../tools/dep.js');
const fs = require('fs');
const { createTsWeb } = require('./generators/genTsWeb.js');
const defaultTsPackageContent = require('./contents/tsPackageContent.js');

const initTypescriptProject = async () => {
  createTsWeb();
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

module.exports.initTypescriptProject = initTypescriptProject;
