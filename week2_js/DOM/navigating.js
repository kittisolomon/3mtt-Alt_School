// Navigating the DOM

// Children: childNodes, firstChild, lastChild

// list all child nodes of the body tag
// console.log(document.body.childNodes); // Note newline characters is a Text node, which is a child of the body tag

// list all children of the body tag
// console.log(document.body.children); // children are not Text nodes

// get the first child of the body tag
// console.log(document.body.firstChild); // Same as document.body.childNodes[0]

// get the last child of the body tag
//console.log(document.body.lastChild); // same as document.body.length -1 

// check if the ody tag has children
//console.log(document.body.hasChildNodes());

// looping through children of the body tag

//  let len =  document.body.childNodes.length;
//  for( let i = 0; i < len; i++){
//     console.log(document.body.childNodes[i]);
//  }

// Siblings: previousSibling, nextSibling

// get the previous sibling of the body tag
 //console.log('Previous Sibling', document.body.previousSibling );
 console.log('Previous Sibling', document.body.previousElementSibling);

 // get the Next sibling of the body tag
 //console.log('Next Sibling', document.body.nextSibling);
 console.log('Next Sibling', document.body.nextElementSibling);

 // Parent: parentNode
// get the parent of the head tag
console.log('Parent Node', document.body.parentNode);


