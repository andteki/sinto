const { exec } = require('child_process');

const build = (argv) => {
    exec('npx gulp')
}

module.exports.build = build;
