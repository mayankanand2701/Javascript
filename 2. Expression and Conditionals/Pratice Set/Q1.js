const prompt=require("prompt-sync")();
let age=prompt("Enter your age : ");
age=Number.parseInt(age);
if(age>=10 && age<=20)console.log("Lies in the range");
else console.log("Not lie in the range");