const { debug } = require('../config.json')
const { createFile, createDirectory } = require('../tools/tools.js');
const jsonfile = require('jsonfile');

const swcPackageContent = require('./contents/esbuildPackage.json');
const indexHtmlContent = require('./contents/indexHtml.js');
const defaultBsconfigContent = require('./generators/genBsconfig.js');

const createEsbuildProject = () => {
    const dir = process.cwd();

    createDirectory(`${dir}/src`);
    createDirectory(`${dir}/public`);
    createDirectory(`${dir}/public/assets`);
  
    createFile(`${dir}/public/index.html`, indexHtmlContent);  
    createFile(`${dir}/public/style.css`, '');  
    createFile(`${dir}/src/app.ts`, '');

    createFile(`${dir}/README.md`, '# Sinto ESBuild client\n');
    
    createPackageJsonFile(dir);
    createBsconfigFile(dir);
  
    console.log('ESBuild client created.');
    console.log('Run next commands:');
    console.log('  pnpm i');
    console.log('  pnpm dev');
    console.log('  pnpm start');
}

const createPackageJsonFile = (directory) => {
    const packageJsonPath = `${directory}/package.json`;
    jsonfile.writeFileSync(packageJsonPath, swcPackageContent, { spaces: 2 });
    if(debug) {
        console.log('package.json file created.');
    }
}

const createBsconfigFile = (dir) => {
    const bsconfigPath = `${dir}/bs-config.json`;
    jsonfile.writeFileSync(bsconfigPath, defaultBsconfigContent, { spaces: 2 });
    if(debug)
    console.log('bs-config.json file created.');
}

module.exports.createEsbuildProject = createEsbuildProject;