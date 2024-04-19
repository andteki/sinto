const { debug } = require('../config.json')
const { createFile, createDirectory } = require('../tools/tools.js');
const jsonfile = require('jsonfile');


const webpackPackageContent = require('./contents/webpackPackage.json');
const webpackConfigContent = require('./contents/webpackConfigContent.js');

const indexHtmlContent = require('./contents/indexHtml.js');
const indexJsContent = require('./contents/index.js');
const styleScssContent = require('./contents/style.scss');

const createWebpack = () => {
    const dir = process.cwd();

    createDirectory(`${dir}/src`);
    createDirectory(`${dir}/src/js`);
    createDirectory(`${dir}/src/scss`);
    createDirectory(`${dir}/dist`);
    createDirectory(`${dir}/assets`);
  
    createFile(`${dir}/dist/index.html`, indexHtmlContent);  
    createFile(`${dir}/src/scss/style.scss`, styleScssContent);  
    createFile(`${dir}/src/js/index.js`, indexJsContent);
    createFile(`${dir}/webpack.config.js`, webpackConfigContent);

    createFile(`${dir}/README.md`, '# Sinto Webpack client\n');
    
    createPackageJsonFile(dir);
    
  
    console.log('Webpack client created.');
}

const createPackageJsonFile = (directory) => {
    const packageJsonPath = `${directory}/package.json`;
    jsonfile.writeFileSync(packageJsonPath, webpackPackageContent, { spaces: 2 });
    if(debug) {
        console.log('package.json file created.');
    }
}

const createWebpackConfigJsonFile = (dir) => {
    const webpackConfigJsonPath = `${dir}/webpack.config.js`;
    jsonfile.writeFileSync(webpackConfigJsonPath, webpackConfigContent, { spaces: 2 });
    if(debug) {
        console.log('webpack.config.js file created.');
    }
}



module.exports.createWebpack = createWebpack;