// Arrays are objects in JS and are mutable
// array can be of similar types or different types
let a=[91,72,84,66,99];
console.log(a);
let b=[91,72,84,66,99,"Not Present"];
console.log(b);
let c=[91,72,84,66,99,null];
console.log(c);
let d=[91,72,84,66,99,false];
console.log(d);

// to print any value from the index
console.log(a[4]);

// if we call for any index for which is is not defined the output will be undefined
console.log(a[5]);

// to find the length of the array 
console.log("The length of the array is =",a.length);

// adding a aditional value to the array defined above
a[5]=100
console.log(a[5]);
console.log("The length of the array is =",a.length);

// changing the value of the array 
a[0]=95;
console.log(a)

// to check the type of array
console.log(typeof a)