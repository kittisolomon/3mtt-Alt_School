const fs = require('fs');
const path = require('path');

const poemFilePath = path.join(__dirname, 'files', 'poem.txt');
const countriesFilePath = path.join(__dirname, 'files', 'countries.json');


// Read a file asynchronously from the file path
// Note: utf8 is the default encoding. You can also specify other encodings like ascii, binary, etc.
// Use utf8 for text files and binary for binary files

fs.readFile(countriesFilePath, 'utf8', (err, data) => {
    if(err){
        console.log(`An error occured while opening from the filr: ${err}`);
        return;
    }
    // console.log(data);
});


// Read a file synchronously from the file path
const poemData = fs.readFileSync(poemFilePath, 'utf8');
console.log(poemData);