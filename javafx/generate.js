const { createFile, createDirectory } = require('../tools/tools.js');
const appContent = require('./appContent');
const settingsContent = require('./settingsContent');
const launchContent = require('./launchContent');
const gitignoreContent = require('./gitignoreContent');
const { exit } = require('browser-sync');
const { setJavafxPath } = require('./setJavafxPath');

const  createJavafxProject = (argv) => {

  if (argv.path != undefined) {
    setJavafxPath(argv.path);
    exit(0);
  }

  const dir = process.cwd();  
  createDirectory(`${dir}/.vscode`);
  createDirectory(`${dir}/lib`);
  createDirectory(`${dir}/src`);
  createFile(`${dir}/src/App.java`, appContent);
  createFile(`${dir}/.vscode/settings.json`, settingsContent);
  
  createFile(`${dir}/src/mainScene.fxml`, '');

  createFile(`${dir}/README.md`, '# Sinto JavaFX project\n');
  createFile(`${dir}/.vscode/launch.json`, launchContent);

  createFile(`${dir}/.gitignore`, gitignoreContent);
  createFile(`${dir}/lib/.gitkeep`, '');
  
}

module.exports.createJavafxProject = createJavafxProject;
