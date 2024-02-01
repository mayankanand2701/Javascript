const prompt=require("prompt-sync")();
let num=prompt("Enter the num : ");
while(num!=50)
{
    console.log(num);
    num=prompt("Enter the num : ");
}
console.log("You have entered the correct number");