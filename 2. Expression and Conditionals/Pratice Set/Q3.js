const prompt=require("prompt-sync")();
let num=prompt("Enter the  Number : ");
num=Number.parseInt(num);
if(num%2==0 && num%3==0)console.log("Divisible by 2 and 3 both.");
else console.log("Not Divisible by 2 and 3 both.");