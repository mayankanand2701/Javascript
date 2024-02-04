// to print the span
console.log(document.getElementsByTagName('span')[0])

// it shows elemnts as an object with its properties
console.dir(document.getElementsByTagName('span')[0])

// to print the inner html
console.log(first.innerHTML)

// to change/set anything with innerHTML it is only valid for elements only
first.innerHTML="<i>I am Italic</i>"

// to print the outer html
console.log(first.outerHTML)
// Output : <span id="first"><i>I am Italic</i></span>
// we can aslo set the outer html same way as innerHTML above

// to print the data of firschild
console.log(document.body.firstChild.data)
// Output :   Hello World
console.log(document.body.firstChild.nodeValue)
// Output :   Hello World

// to get the content of the body as text
console.log(document.body.textContent)
// Output :   Hello World
//            I am Italic