// Scope : its defines the level of visibility of a  variable

let firstName = "Jon";

function scopeTest(){
   
    console.log(firstName);
    firstName = "David";
    if(firstName != ''){
        console.log(firstName);
        // let lastName = "Doe";
    }

    // console.log(lastName);
}

scopeTest();
console.log(firstName);


