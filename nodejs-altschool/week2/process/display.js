const process = require('process');

function displayUserDetails({name, age}){
    console.log(`Your name is ${name} and your age is ${age}`);
}

function parseCmdArgs(args) {
    const argsSlice = args.slice(2);
    const name = argsSlice[0].split('=')[1];
    const age = argsSlice[1].split('=')[1];
    return { name, age };
}

const args = process.argv;
const processArgs = parseCmdArgs(args)

displayUserDetails(processArgs);

