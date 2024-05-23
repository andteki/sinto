const tsconfigContent = require('./tsconfigContent');
const { createFile } = require('../tools/tools.js');
const jsonfile = require('jsonfile');
const { addDevDep } = require('../tools/dep.js');

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
Proposal:
In the tsconfig.json file, leave the module value
at commonjs for a NodeJS project. In the case of 
an ES project, rewrite it to, for example, ES6.

Install dependencies:
pnpm install
        `);
}

const addDependencies = () => {
    const dir = process.cwd();
    const path = `${dir}/package.json`;
    addDevDep(path, ['typescript']);
}

module.exports.supplementTypescript = supplementTypescript;
