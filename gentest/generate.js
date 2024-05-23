const { createFile, createDirectory } = require('../tools/tools.js');
const puppeteerTestContent = require('./testPupContent');
const jsonfile = require('jsonfile');
const path = require('path');
const { exec } = require('child_process');
const { addDevDep } = require('../tools/dep.js');

const createPuppeteerTest = async () => {    
    const dir = process.cwd();
    createDirectory(`${dir}/test`);
    createFile(`${dir}/test/apptest.js`, puppeteerTestContent);

    await writeTestScriptInPackageJson();  
}

async function writeTestScriptInPackageJson() {    
    const dir = process.cwd();
    const filePath = dir + '/package.json'
    jsonfile.readFile(filePath, async (err, obj) => {
        if(err) {
            console.error('Error! Failed to read package.json file.', err);
            return;
        }
        obj.scripts = obj.scripts || {};
        obj.scripts["test"] = "mocha";

        jsonfile.writeFile(filePath, obj, { spaces: 2 }, async (err) => {
            if(err) {
                console.error('Error! Failed to write package.json file!')
            }else {
                console.log('The package.json updated');
                await writePuppeteerDependencies(['mocha', 'puppeteer']);
            }
        });
    });
}

const writePuppeteerDependencies = async (packageNames) => {
    const dir = process.cwd();
    const filePath = dir + '/package.json';
    await addDevDep(filePath, packageNames);
}

module.exports.createPuppeteerTest = createPuppeteerTest;
