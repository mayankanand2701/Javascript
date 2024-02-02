// to print the object console
// on click the downarrow of console all its methods will be displayed
console.log(console);

// to display the error
console.error("This is an error");

console.assert(5>53);
// Error : Assertion failed: console.assert
// console.assert(34>3);
// no error

// to clear the console
console.clear();
// The complete console will be cleared and on the above it will show : Console was cleared

// to display the data of any object in tabular form
obj={a:1,b:2,c:3};
console.table(obj);

// to display the warining in yellow color
console.warn("Hello. This is Soda");
// Output : Hello. This is Soda

// to display so information
console.info("This is the information");

// to know the time
console.time("For loop");
for(let i=1;i<=5;i++)console.log(i);
console.timeEnd("For loop");

// same time calculate for while loop
console.time("While loop");
let i=1;
while(i<=5)
{
    console.log(i);
    i++;
}
console.timeEnd("While loop");