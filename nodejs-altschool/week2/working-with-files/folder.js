const fs = require('fs')
const path = require('path')

// Open a folder
const folderPath = path.join(__dirname, 'files');

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder opened successfully')
    console.log(files)
});

// Create a folder
const newFolderPath = path.join(__dirname, 'files',  'new_folder');
// fs.mkdir(newFolderPath, (err, ) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('Folder created successfully');
// });

// Rename a folder
const folderRename = path.join(__dirname, 'files', 'renameFolderName');
// fs.rename(newFolderPath, folderRename, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('Folder renamed successfully')
// });

// Delete a folder

fs.rmdir(folderRename, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Folder deleted successfully')
});