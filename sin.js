#!/usr/bin/env node

const { Command } = require('commander');
const { createWeb } = require('./genweb/genweb');
const { server } = require('./startserver/server');
const { build } = require('./build/build');
const { rmno } = require('./rmno/rmno');
const { createApi } = require('./haiserver/apigen');
const { createWebpack } = require('./webpack/generate');
const { createEsbuildProject } = require('./esbuild/generate');
const { createPuppeteerTest } = require('./gentest/generate');
const { supplementTypescript } = require('./addts/addts');
const { initTypescriptProject } = require('./gents/gents');
const { createIndexHtmlCssFile } = require('./htmlcss/htmlcss');

const program = new Command();

program
    .name('sin')
    .description('Project handler')
    .version('1.10.2');

program
    .command('init')
    .description('Initialize the Node.js web project')
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
    .command('addts')
    .description('Supplement with TypeScript')
    .action(() => {
        supplementTypescript();
    })

program
    .command('ts')
    .description('Initialize TypeScript Node.js project')
    .action(() => {
        initTypescriptProject();
    })

program
    .command('web')
    .description('HTML és üres CSS fájl')
    .action(() => {
        createIndexHtmlCssFile();
    })

program
    .command('esbuild')
    .description('ESBuild client')
    .option('-j, --javascript', 'JavaScript application')
    .option('-t, --typescript', 'TypeScript application (default)')
    .action((options) => {
        createEsbuildProject(options);
    });

program
    .command('javafx')
    .description('JavaFX project No build tools')
    .option('-p, --path [path]', 'Path to javafx')
    .action(( options ) => {
        createJavafxProject(options);
    })

program.parse();
