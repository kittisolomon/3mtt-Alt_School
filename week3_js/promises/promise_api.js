function getData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("No URL provided");
            return;
        }

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                console.error(`An error with status code ${error} occurred`);
                reject(error);
            });
    });
}


const promises = [
    getData("https://reqres.in/api/unknown/1"),
    getData("https://reqres.in/api/users/2"),
    getData("https://reqres.in/api/unknown")
];

// Promise.all() is a method that takes an array of promises and returns a new promise.
// It runs in parallel and returns an array of the results.

// Promise.all(promises)
// .then((results) => {
//      console.log("Success!", results);
//     }).catch(status => {
//      console.log(`An error with status code ${status} occurred: `);
// });

// Promise.race() waits only for the first settled promise and gets its result (or error).
// Promise.race(promises) 
//     console.log("Success!", result)
// }).catch(status => {
//     console.log(`An error with status code ${status} occurred: `);
// });

// Promise.any() waits for any of the first successful/fulfilled promise
Promise.any(promises)
.then((result) => {
    console.log("Success!", result)
}).catch(status => {
    console.log(`An error with status code ${status} occurred: `);
})