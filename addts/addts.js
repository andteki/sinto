const tsconfigContent = require('./tsconfigContent.js');
const { createFile } = require('../tools/tools.js');
const jsonfile = require('jsonfile');
const { addDevDep } = require('../tools/dep.js');

const fs = require('fs');

const supplementTypescript = () => {
    writeConfigFile();
    showMsg();
    addDependencies();
}

const writeConfigFile = () => {
    const dir = process.cwd();
    const path = `${dir}/tsconfig.json`;
    jsonfile.writeFileSync(path, tsconfigContent, { spaces: 2 });
}

const showMsg = () => {
    console.log(`
Install dependencies with npm or pnpm command:

pnpm install
        `);
}

const addDependencies = () => {

    const dir = process.cwd();
    const path = `${dir}/package.json`;

    if (!fs.existsSync(path)) {
        console.log('package.json file does not exist.');
        return;
    }
    


    addDevDep(path, ['typescript']);
}

module.exports.supplementTypescript = supplementTypescript;
