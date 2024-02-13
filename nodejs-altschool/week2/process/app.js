const process = require('process');

// Get Node version
const nodeVersion = process.versions;
//console.log(nodeVersion);

// Get Node.js release
const nodeRelease = process.release;
// console.log(nodeRelease);

// Exit a running script cleanly, anything after it is not executed
// process.exit(0);

// Write to stdout (Terminal)
// process.stdout.write('Hello NodeJs');

// Read command line arguments
const args = process.argv;
console.log(args);


