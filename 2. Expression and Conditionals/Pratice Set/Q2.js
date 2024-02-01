const prompt=require("prompt-sync")();
let day=prompt("Enter the Day Number : ");
day=Number.parseInt(day);
switch(day%7)
{
    case 1:console.log("Monday");
           break;
    case 2:console.log("Tuesday");
           break;
    case 3:console.log("Wednesday");
           break;
    case 4:console.log("Thursday");
           break;
    case 5:console.log("Friday");
           break;
    case 6:console.log("Saturday");
           break;
    default:console.log("Sunday");
}