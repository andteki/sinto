const {debug} = require('../config.json')
const { createFile  } = require('../tools/tools');
const jsonfile = require('jsonfile');
const haiPackageContent = require('./hai-serverPackageContent.json');
const haiConfigContent = require('./haiconfigContent.json');
const databaseContent = require('./databaseContent.json');

const createApi = () => {
    const dir = process.cwd();
  
    createFile(`${dir}/database.json`, '');  
    createFile(`${dir}/README.md`, '# Sinto Fake REST API\n');
    
    createPackageJsonFile(dir);
    createHaiConfigJsonFile(dir);
    createDatabaseFile(dir);
  
    console.log('Fake REST API created.');
}

const createPackageJsonFile = (directory) => {
    const packageJsonPath = `${directory}/package.json`;
    jsonfile.writeFileSync(packageJsonPath, haiPackageContent, { spaces: 2 });
    if(debug) {
        console.log('package.json file created.');
    }
}

const createHaiConfigJsonFile = (dir) => {
    const haiconfigJsonPath = `${dir}/hai-server.json`;
    jsonfile.writeFileSync(haiconfigJsonPath, haiConfigContent, { spaces: 2 });
    if(debug) {
        console.log('hai-server.json file created.');
    }
}

const createDatabaseFile = (dir) => {
    const databaseJsonPath = `${dir}/database.json`;
    jsonfile.writeFileSync(databaseJsonPath, databaseContent, { spaces: 2 });
    if(debug) {
        console.log('database.json file created.');
    }

}

module.exports.createApi = createApi;
