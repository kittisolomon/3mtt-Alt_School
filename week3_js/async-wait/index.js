 const url = prompt("Enter a URL");
//Async before a function turns it into a promise
//Await ensures a function is executed before continuing. It works if the function is asynchronous.
async function getData(url) {
    if (!url) {
        console.log("URL not provided");
        return;
    }

    const response = await fetch(url);

    if (!response.ok) {
        console.log(`An error with status code ${response.status} occurred`);
        return; // Or throw an error if you want to propagate it to the next catch block
    }

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(`Error parsing JSON: ${error.message}`);
        return; // Or throw an error if you want to propagate it to the next catch block
    }
}

// // consuming the fetch API 
// getData(url)
//     .then((result) => {
//         if(result){
//         console.log("Success!", result);
//         }
//     }).catch(error => {
//         console.log(`An error with status code ${error} occurred: `);
// });

//Technically, the getData function is asynchronous, and we can do the following:
// await getData(url) but we can't do that here because await is only valid within an async function.

// await getData(url) // Won't work because await is only valid within an async function.
// A trick is to wrap the function in an IIFE async function.
(async () => {
    const result = await getData(url);
    console.log("Success!", result);
})();
