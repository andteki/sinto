const {debug} = require('../config.json');
const jsonfile = require('jsonfile');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const addDep = async (filePath, packageNames) => {
    await writeDependencies(filePath, packageNames, false);
}

const addDevDep = async (filePath, packageNames) => {
    await writeDependencies(filePath, packageNames, true);
}

async function writeDependencies(filePath, packageNames, devDep) {  
    var obj = await readJsonFile(filePath);
    obj = await addDependencies(obj, packageNames, devDep);
    await writeJsonFile(filePath, obj);
}

async function readJsonFile(filePath) {
    try {
        const obj = await jsonfile.readFile(filePath);
        if(debug) {
            console.log(`Readed JSON file`);
        }        
        return obj;
    } catch (err) {
        console.error(`Error! Failed to read ${filePath}`);
        console.error(err);
    }
}

async function addDependencies(obj, packageNames, devDep) {
    for(const packageName of packageNames) {
        try {
            const newDependency = await getPackageInfo(packageName);
            if(devDep) {
                await Object.assign(obj.devDependencies, newDependency);
            }else {
                await Object.assign(obj.dependencies, newDependency);
            }
            
        } catch (err) {
            console.error(`Error! Failed add packages!`);
            console.error(err);       
        }
    }
    return obj;
}

async function getPackageInfo(packageName) {
    try {
        const { stdout, stderr } = await exec(`npm view ${packageName} version`);
        if (stderr) {
            throw new Error(`Error! Retrieving the version of package named ${packageName} failed: ${stderr}`);
        }
        const version = stdout.trim();
        return { [packageName]: `^${version}` };
    } catch (err) {
        throw new Error(err.message);
    }
}

async function writeJsonFile(path, obj) {
    try {
        await jsonfile.writeFile(path, obj, { spaces: 2});
        if(debug) {
            console.log(`Added new depencies`);
        }
    } catch (err) {
        console.error('Error! Failed to write package.json:');
        console.error(err);
    }
}

module.exports.addDep = addDep;
module.exports.addDevDep = addDevDep;
