const { createFile, createDirectory } = require('../tools/tools.js');
const puppeteerTestContent = require('./testPupContent')

const createPuppeteerTest = () => {    
    const dir = process.cwd();
    createDirectory(`${dir}/test`);
    createFile(`${dir}/test/apptest.js`, puppeteerTestContent);
    console.log('\n')
    console.log('Install the dependencies:')
    console.log('  npm install --save-dev puppeteer mocha')
    console.log('Add start script to package.json:')
    console.log('  \"test\": \"mocha\"')
    console.log('\n')
}

module.exports.createPuppeteerTest = createPuppeteerTest;
