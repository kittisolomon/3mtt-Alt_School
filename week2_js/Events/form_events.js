//focus on the first input field in the form
document.querySelector('#name').focus();

// On focus of input, alert "You're editing the name field!"

// document.querySelectorAll('input').forEach((input) => {
//     input.addEventListener('click', (e) => {
//          console.log("Your are editing: " + e.target.name + " field");
//     });
// });

document.querySelector('#form1').addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelectorAll("input").forEach((input) => {
        if(input.value == ""){
            console.log(input.name + " Can not be empty")
        }else {
            console.log("Your " + input.name + " is: " + input.value);
        }
    })
})


