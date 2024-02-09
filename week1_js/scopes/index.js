// Scope - This is the current context of a code, it defines 
// the accessibility of variables and object within that context.
 

let size = 20;

let displayUser = () => {
    let fullName = 'Jon Doe';
    console.log('This is a local Variable: ' + fullName);
    console.log('This is the global size: ' + size);

}

// console.log(size);
// console.log(fullName);

displayUser();