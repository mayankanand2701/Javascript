// remember cookies are not overwritten they are added one below the others
// cookies are stored in the form of key value pair
console.log(document.cookie)
document.cookie = "name=mayank12345"
document.cookie = "name2=mayankraj"
document.cookie = "name=aman"

// to add any cookie by giving the input to the website
let key = prompt("enter your key")
let value = prompt("enter your value")

// encodeURIComponent : it takes any string as input and make it a key and same for value
// if encodeURIComponent was not written in case in the key or value if , is written then the string after 
// , will not be taken as input for the name
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)

// it encodes the ; in some format and store it 
// like i have given the input for key=a;; and for value=value
// the browser stored it as : h%3B%3B=value
// now in order to decode this we need to run
// docodeURIComponent("h%3B%3B") in the browser it will give the output as a;;