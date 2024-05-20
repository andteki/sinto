const browserSync = require('browser-sync');
const fs = require('fs');
const configFilePath = 'bs-config.json';

const readConfigFile = (configFilePath, callback) => {
  fs.readFile(configFilePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    try {
      const config = JSON.parse(data);
      callback(null, config);
    } catch (parseError) {
      callback(parseError);
    }
  });
};

const initializeServer = (argv, config) => {  
  if (argv.port != undefined) {
    config.port = argv.port;
  }
  browserSync.init(config);
  console.log(`BrowserSync listening: localhost:${port}`);
}

const serve = (argv) => {
    readConfigFile(configFilePath, (error, config) => {
      if(error) {
        console.error('Error! The configuration file cannot be read!')
        console.error(error)
        return;
      }
      initializeServer(argv, config)
    })
};

module.exports.server = serve;
