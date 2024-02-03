// to get the first child of the body
console.log(document.body.firstChild)

// to get the last child of the body
console.log(document.body.lastChild)

// to get the list of all the child of the body
console.log(document.body.childNodes)

// to convert all the child nodes in the form of a array
let arr=Array.from(document.body.childNodes)
console.log(arr)

a=document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)