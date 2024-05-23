#!/usr/bin/env node

const { Command } = require('commander');
const { createWeb } = require('./genweb/genweb');
const { server } = require('./startserver/server');
const { build } = require('./build/build');
const { rmno } = require('./rmno/rmno');
const { createApi } = require('./haiserver/apigen');
const { createWebpack } = require('./webpack/generate');
const { createPuppeteerTest } = require('./gentest/generate');
const { supplementTypescript } = require('./gents/gents');

const program = new Command();

program
    .name('sin')
    .description('Project handler')
    .version('1.5.0');

program
    .command('init')
    .description('Initialize the web project')
    .action(() => {
        createWeb();
    });

program
    .command('serve')
    .description('Start develop server')
    .option('-p, --port [port]', 'Server port number')
    .action((options) => {
        server(options);
    });

program
    .command('build')
    .description('Start build with Gulp')
    .action(() => {
        build();
    });

program
    .command('rmno')
    .description('Delete node_modules directory')
    .action(() => {
        rmno();
    });

program
    .command('api')
    .description('REST API with hai-server')
    .action(() => {
        createApi();
    });

program
    .command('webpack')
    .description('Webpack client')
    .action(() => {
        createWebpack();
    });

program
    .command('pup')
    .description('Puppeteer test')
    .action(async () => {
        await createPuppeteerTest();
    })

program
    .command('ts')
    .description('Supplement with TypeScript')
    .action(() => {
        supplementTypescript();
    })


program.parse();
