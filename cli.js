
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const cli = yargs(hideBin(process.argv));

module.exports = cli;
