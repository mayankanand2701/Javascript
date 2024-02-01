// var is globally scoped and can be redeclared within its scope
// let is blocked scoped and can not be redeclared
// so modern developer used let not var
// const can not be redeclared

var a=6;
var a=10;
// No error
console.log(a)

let b=8;
// let b=9;  
// TypeError: Assignment to constant variable.
console.log(b);

const author="Mayank";
// author="Hi";      
// TypeError: Assignment to constant variable.
console.log(author)
