const fs = require('fs');
const path = require('path');

const poemFilePath = path.join(__dirname, 'files', 'countries.json');

// Get file stats asynchronously and print them 
fs.stat(poemFilePath, (err, stats) => {
    if(err) {
        console.log(err)
    } else {
       console.log(stats);
        
    // Get specific stats
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    const fileSize = stats.size / 100;
    console.log(`${fileSize} KB`);
    }

});
