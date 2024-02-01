const prompt=require("prompt-sync")();
let num=prompt("Enter the num : ");
num=Number.parseInt(num);
let arr=[1,45,67,32,99];
arr.push(num)
console.log(arr)