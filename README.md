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

Generate default directories and files:

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
