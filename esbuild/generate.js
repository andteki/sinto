const { debug } = require('../config.json')
const { createFile, createDirectory } = require('../tools/tools.js');
const jsonfile = require('jsonfile');

const swcPackageContent = require('./contents/esbuildPackage.json');
const swcPackageJsContent = require('./contents/esbuildPackageJs.json');
const indexHtmlContent = require('./contents/indexHtml.js');
const defaultBsconfigContent = require('./generators/genBsconfig.js');
const gitignoreContent = require('./contents/gitignoreContent');

const createEsbuildProject = (options) => {
    if(options.javascript === true && options.typescript === true) {
        console.log('JavaScript or TypeScript project?');
        return;
    }
    let typescript = true;
    if(options.javascript === false && options.typescript === false) {
        console.log('TypeScript project creating...');
    }
    if(options.javascript === true) {
        console.log('JavaScript project creating...');
        typescript = false;
    }
    if(options.typescript === true) {
        console.log('TypeScript project creating...');        
    }    

    const dir = process.cwd();

    createDirectory(`${dir}/src`);
    createDirectory(`${dir}/public`);
    createDirectory(`${dir}/public/assets`);
  
    createFile(`${dir}/public/index.html`, indexHtmlContent);  
    createFile(`${dir}/public/style.css`, '');
    
    if(typescript) {
        createFile(`${dir}/src/app.ts`, '');
    }else {
        createFile(`${dir}/src/app.js`, '');
    }    

    createFile(`${dir}/README.md`, '# Sinto ESBuild client\n');
    
    createPackageJsonFile(dir, typescript);
    createBsconfigFile(dir);
    createFile(`${dir}/.gitignore`, gitignoreContent);
  
    console.log('ESBuild client created.');
    console.log('Run next commands:');
    console.log('  npm i');
    console.log('  npm run dev');
    console.log('  npm start');
}

const createPackageJsonFile = (directory, typescript) => {
    const packageJsonPath = `${directory}/package.json`;
    if(typescript) {
        jsonfile.writeFileSync(packageJsonPath, swcPackageContent, { spaces: 2 });
    }else {
        jsonfile.writeFileSync(packageJsonPath, swcPackageJsContent, { spaces: 2 });
    }    
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