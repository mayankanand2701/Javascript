const prompt=require("prompt-sync")();
let x = Number.parseInt(Math.random()*100);
//console.log(x)
let num=prompt("Enter your Guess : ");
let chances=0;
while(x!=num)
{
    if(num>x)console.log("Your Guess is greater than the Generated Number");
    else if(num<x)console.log("Your Guess is smaller than the Generated Number");
    chances++;
    num=prompt("Enter your Guess : ");
}
console.log("Score : ",100-chances);
console.log("The Random Generated Number was : ",num);

