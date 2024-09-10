
const packageTsContent = 
{
    name: 'sinto-project',
    version: '0.0.1',
    description: 'A project created by the Sinto command',
    scripts: {
      'start': 'browser-sync start --config bs-config.json',
      'build': 'gulp',
      'ts': 'tsc'
    },
    "dependencies": {
      "bootstrap": "^5.3.3"
    },
    "devDependencies": {
      "browser-sync": "^3.0.2",
      "gulp": "^5.0.0",
      "gulp-clean-css": "^4.3.0",
      "gulp-concat": "^2.6.1",
      "gulp-image": "^6.3.1",
      "gulp-minify": "^3.1.0",
      "gulp-uglify": "^3.0.2",
      "gulp-replace": "^1.1.4",
      "gulp-typescript": "6.0.0-alpha.1"
    },
    "type": "module"
}

module.exports = packageTsContent;
