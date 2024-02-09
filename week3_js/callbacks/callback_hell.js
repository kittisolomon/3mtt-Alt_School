// A callback with success and error handlers

function getData(url, success, error) {
    if(!url){
        return;
    }

    // load content of the page from the url
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = () => {
        if(xhr.status === 200){
            success(xhr.responseText); //Run success Callback
        }else {
            error(xhr.status) // Run Error Callback
        }
    };
}

function successHandler(result) {
    console.log("Finally done!");
    console.log(result);
}

function errorHandler(status) {
    console.log(`An error with status code ${status} occurred: `);
}

const url = prompt("Enter a URL");

// Using multiple callbacks can result in a callback hell.
getData(url, (res1) => {
    console.log("Success 1: ", res1);
    getData("https://reqres.in/api/users/2", (res2) => {
        console.log("Success 2: ", res2);
        getData("htps://reqres.in/api/users/3", (res3) => {
            console.log("Success 3: ", res3);
            getData("https://reqres.in/api/users/4", successHandler, errorHandler);
        }, errorHandler)
    }, errorHandler)
}, errorHandler);