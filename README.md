# Sinto web project management

Simple project management, with the Browser-sync and gulp packages in the background.

* Development in the src directory.
* Publishing from the public directory.

GitHub:

* [https://github.com/andteki/sinto.git](https://github.com/andteki/sinto.git)

## Install

```cmd
npm i -g sinto
```

## Using

Make a project:

```cmd
mkdir app01
cd app01
```

Generate default web directories and files:

```cmd
sin init
```

Install default dependecies:

```cmd
npm i
```

## Development server

```cmd
sin serve
```

## Building

```cmd
sin build
```

This command is generate public directory from src directory.

## Commands

* sin init - Initilalize the project
* sin serve - Start development server
* sin build - Start public generation
* sin api - Generate fake REST API with hai-server
* sin webpack - Generate Webpack project
* sin pup - Generate Puppeteer test with Mocha
* sin rmno - Delete node_modules directory
* sin ts - Generate tsconfig.json and add dependencies
* sin web - Generate HTML and empty CSS files
* sin esbuild - Generate esbuild project

The Default task manager is gulp. Development serve is browser-sync.

## Fake REST API server

The sin api command generate fake REST API project directory.

Using:

```cmd
sin api
npm i
```

Generated files:

```txt
app01/
  |-database.json
  |-hai-server.json
  |-package.json
  `-README.md
```

## Webpack project generator

The sin webpack command generate a webpack project.

Using:

```cmd
sin webpack
npm i
```

Generated directories and files:

```txt
app01/
  |-assets/
  |-dist/
  |  `-index.html
  |-src/
  |  |-js/
  |  |  `-index.js
  |  `-scss/
  |     `-style.scss
  |-package.json
  |-README.md
  `-webpack.config.js
```

## Puppeteer test with Mocha

The **sin pup** command generate a Puppeteer test with Mocha default test file.

The **sin pup** command does not install the dependencies, it just writes them into the package.json file. Install the dependencies with the **npm i** or **pnpm i** command.

Using:

```cmd
sin pup
npm i
```

Generated directoriy and file:

```txt
app01/
  `-test/
      `-apptest.js
```

Automatically adds the test script and dependencies to the package.json file.

```json
{
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "mocha": "^x.y.z",
    "puppeteer": "^x.y.z"    
  }
}
```

The version numbers are updated.

Write the tests in test directory and run the tests:

```cmd
npm test
```

## TypeScript

### TypeScript config and dependencies

The **sin addts** command generate a tsconfig.json and add dependencies to package.json.

The **sin addts** command does not install the dependencies, it just writes them into the package.json file. Install the dependencies with the **npm i** or **pnpm i** command.

Using:

```cmd
sin init
sin addts
npm i
```

### TypeScript Node.js project

The **sin ts** command generate a TypeScript Node.js project.

Using:

```cmd
sin ts
npm i
```

Generated directories and files:

```txt
app01/
  |-src/
  |  |-assets/
  |  |-app.ts
  |  |-index.html
  |  `-style.css
  |-bs-config.json
  |-gulpfile.js  
  |-package.json
  |-README.md
  `-tsconfig.json  
```

## ESBuild project generator

The sin esbuild command generate a esbuild project.

Using:

```cmd
sin esbuild
pnpm i
pnpm dev
pnpm start
```

Generated directories and files:

```txt
app01/
  |-public/
  |  |-index.html
  |  `-style.css
  |-src/
  |  `-index.js
  |-package.json
  `-README.md
```

Update the src/app.ts your index file.

Example:

* src/app.ts
* src/index.ts
* src/app.js
* src/index.js
* src/script.js

To build production run next command:

```cmd
pnpm build
```

This command is generate dist directory from src directory. The build command not copy the public directory.
