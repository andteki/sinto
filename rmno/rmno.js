const fs = require('node:fs');

const rmno = () => {
    const dir = 'node_modules';
    fs.rm(dir,{ recursive: true, force: true } ,err => {
      if (err) {
        throw err;
      }    
      console.log(`${dir} is deleted!`);
    });    
}

module.exports.rmno = rmno;
