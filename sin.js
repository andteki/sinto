#!/usr/bin/env node

const {debug} = require('./config.json')
const { exec } = require('child_process');

const cli = require('./cli');
const serve = require('./server');
const { createApi } = require('./haiserver/apigen');
const { createWebpack } = require('./webpack/generate');
const { createPuppeteerTest } = require('./gentest/generate');

const { 
  createDirectory, 
  createFile, 
  createPackageJsonFile, 
  createIndexHtmlFile, 
  createGulpfileJsFile, 
  createBsconfigFile 
} = require('./tools/tools');


const init = () => {
  const currentDirectory = process.cwd();

  createDirectory(`${currentDirectory}/src`);
  createDirectory(`${currentDirectory}/assets`);

  createFile(`${currentDirectory}/src/style.css`, '');  
  createFile(`${currentDirectory}/src/app.js`, '');
  createFile(`${currentDirectory}/README.md`, '# Sinto Project');
  
  createPackageJsonFile(currentDirectory);
  createIndexHtmlFile(currentDirectory);
  createGulpfileJsFile(currentDirectory);
  createBsconfigFile(currentDirectory);

  console.log('Base directories and files created.');
};

const build = (argv) => {
  exec('npx gulp')
}

const rmno = (argv) => {
  console.log('Not implemented...')
}

const serverOptions = (yargs) => {
  return yargs.option('p', {
    alias: 'port',
    describe: 'Server port number'
  })
}

cli.command('init', 'Initilize the project', {}, init);
cli.command('serve', 'Start develop server', serverOptions, serve);
cli.command('build', 'Start build with gulp', {}, build);
cli.command('rmno', 'Delete node_modules directory', {}, rmno);
cli.command('api', 'REST API with hai-server', {}, createApi);
cli.command('webpack', 'Webpack client', {}, createWebpack);
cli.command('pup', 'Puppeteer test', {}, createPuppeteerTest);

const main = () => {
  argv = cli.parse();
  if (!argv._[0]) {
    console.log('Használja a "sin init" vagy a "sin serve" parancsot!');
  }
};

main();
