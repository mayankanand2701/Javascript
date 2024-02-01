const prompt=require("prompt-sync")();
let num=prompt("Enter the age : ");
num=Number.parseInt(num);
(num>18)?console.log("You can Drive"):console.log("You can't Drive");