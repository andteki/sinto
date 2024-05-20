const { createFile, createDirectory } = require('../tools/tools.js');
const puppeteerTestContent = require('./testPupContent');
const jsonfile = require('jsonfile');
const path = require('path');
const { exec } = require('child_process');

const createPuppeteerTest = () => {    
    const dir = process.cwd();
    createDirectory(`${dir}/test`);
    createFile(`${dir}/test/apptest.js`, puppeteerTestContent);

    writeTestScript();  
}

async function writeTestScript() {    
    const currentDirectory = process.cwd();
    const filePath = currentDirectory + '/package.json'
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

async function addDependency(packageName) {
    return new Promise((resolve, reject) => {
      exec(`npm view ${packageName} version`, (err, stdout, stderr) => {
        if (err) {
          reject(`Error! Retrieving the version of package named ${packageName} failed: ${stderr}`);
        } else {
          const version = stdout.trim();
          resolve({ [packageName]: `^${version}` });
        }
      });
    });
}

async function writePuppeteerDependencies(packageNames) {
    const currentDirectory = process.cwd();
    const filePath = currentDirectory + '/package.json';

    jsonfile.readFile(filePath, async (err, obj) => {
        if (err) {
        console.error('Error! Failed to read package.json file:', err);
        return;
        }
    
        try {
            obj.dependencies = obj.dependencies || {};

            for(const packageName of packageNames) {
                try {
                    const newDependency = await addDependency(packageName);
                    Object.assign(obj.devDependencies, newDependency);
                }catch(error) {
                    console.error(error);
                    return;
                }
            }

            jsonfile.writeFile(filePath, obj, { spaces: 2 }, (err) => {
                if (err) {
                console.error('Error! Failed to write package.json:', err);
                } else {
                console.log(`Added new depencies`);
                }
            });
        } catch (error) {
            console.error(error);
        }
    });

}

module.exports.createPuppeteerTest = createPuppeteerTest;
