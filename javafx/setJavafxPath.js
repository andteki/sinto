const {debug} = require('../config.json');
const { read } = require("fs-extra");
const jsonfile = require('jsonfile');
const hjson = require('hjson');
const fs = require('fs');

const setJavafxPath = (path) => {
  const dir = process.cwd();

  readJsonFile(`${dir}/.vscode/launch.json`).then((data) => {
    var obj = hjson.parse(data);
    obj.configurations.forEach( conf => {
      conf.vmArgs = `--module-path ${path} --add-modules javafx.controls,javafx.fxml`;
    })
    

    var newData = hjson.stringify(obj, {space: 2, quotes: 'all', separator: true});
    console.log('newData: ', newData);
    writeJsonFile(`${dir}/.vscode/launch.json`, newData);
    console.log('launch.json updated.');
  });
}

async function readJsonFile(filePath) {
  try {

      const data = await fs.promises.readFile(filePath, 'utf8');
      if(debug) {
          console.log(`Readed JSON file`);
      }        
      return data;
  } catch (err) {
      console.error(`Error! Failed to read ${filePath}`);
      console.error(err);
  }
}

async function writeJsonFile(path, data) {
  try {
      await fs.promises.writeFile(path, data);
      if(debug) {
          console.log(`Written new JSON file: ${path}`);
          console.log(obj);
      }
  } catch (err) {
      console.error('Error! Failed to write package.json:');
      console.error(err);
  }
}

module.exports.setJavafxPath = setJavafxPath
