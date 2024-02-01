// to take user input in JS
// prompt is used to embed the input when used with html
// in order to take input in console we need to install it in local machine
// we need to inform what is the purpose of prompt
const prompt=require("prompt-sync")();
let age=prompt("Enter your age : ");
console.log(typeof age)
age=Number.parseInt(age)
console.log(typeof age)