const prompt=require("prompt-sync")();
let num1=prompt("Enter the Number 1 : ");
num1=Number.parseInt(num1);
let num2=prompt("Enter the Number 2 : ");
num2=Number.parseInt(num2);
let num3=prompt("Enter the Number 3 : ");
num3=Number.parseInt(num3);
let num4=prompt("Enter the Number 4 : ");
num4=Number.parseInt(num4);
let num5=prompt("Enter the Number 5 : ");
num5=Number.parseInt(num5);

function mean(a,b,c,d,e)
{
    return (a+b+c+d+e)/5;
}

console.log("The mean of above five number  is ",mean(num1,num2,num3,num4,num5));