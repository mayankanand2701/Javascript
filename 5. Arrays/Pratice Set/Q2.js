const prompt=require("prompt-sync")();
let num;
let arr=[1,45,67,32,99];
do{
    num=prompt("Enter the num : ");
    arr.push(num);
}while(num!=0);
console.log(arr)