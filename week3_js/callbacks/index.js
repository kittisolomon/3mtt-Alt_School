// A callback with success and error handlers

function getData(url, success, error) {
    if(!url){
        return;
    }

    // load content of the page from the url
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200){
            success(xhr.responseText); //Run success Callback
        }else {
            error(xhr.status) // Run Error Callback
        }
    };
}

function sucess(result){
    console.log("Success");
    console.log(result);
}

function error(status) {
    console.log(`An error with status code ${status} occurred: `);
}

const url = prompt("Enter a URL");
getData(url, sucess, error);