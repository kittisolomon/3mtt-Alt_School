const path = require('path');

// NOTES:
// Windows uses backslashes (\) as the path separator.
// Mac and Linux use forward slashes (/) as the path separator.
// Examples:
// Windows: ==>  C:\Users\John\Documents\example.txt
// Mac and Linux: ==>  /Users/John/Documents/example.txt

// Get path seperator
//const seperator = path.sep;
//console.log(seperator);

// Get the base name
//const baseName = path.basename('C:\\Users\User\Documents\altschool\nodejs-altschool\week2\path_module\package.json');
//console.log(baseName);

// Get the directory name
//const dirName = path.dirname('C:\\Users\User\Documents\altschool\nodejs-altschool\week2\path_module\package.json');
// console.log(dirName);

// Get the extension name
//const extName = path.extname('C:\Users\User\Documents\altschool\nodejs-altschool\week2\path_module\app.js');
//console.log(extName);

// join paths
const joinPath = path.join('Backend_Engineering', 'path', 'package.json');
// console.log(joinPath);

// Get current working directory/folder
const cwd = path.resolve();
console.log(cwd);

// Get the current directory name. The directory hosting the current node.js script.
const dir = path.dirname(__dirname);
console.log(dir);

// get filename
const fileName = path.parse(__filename);
console.log(fileName.base);

// get folder name
const dirName = path.parse(__dirname);
console.log(dirName.base);