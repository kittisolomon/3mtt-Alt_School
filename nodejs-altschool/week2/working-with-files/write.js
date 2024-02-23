const fs = require('fs');
const path = require('path');

// Writing a file asynchronously
const textFilePath = path.join(__dirname, 'files', 'newFile.txt');
const content = 'This is a new file, I just created.';

// File gets created in the file system because it does not exist yet
fs.writeFile(textFilePath, content, (err) => {
    if(err){
        console.log(`Opps an error occured: ${err}`);
        return;
    }
    console.log('File written successfully');
});

// Append to a file
const addedContent = '\nThis is a another new line.';
fs.appendFile(textFilePath, addedContent, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Addition to file success!')
});