// Question 1

function input()
{
    let age=prompt("Enter your age : ");
    age=Number.parseInt(age);
    // the below line is for Question Number 3
    if(age<0) console.error("Invalid Age Enterd");
    if(age>=18)alert("You can Drive");
    else alert("You can't Drive");
}
// input()

// Question 2

input()
let r=confirm("Do you want to see the Promt Again ?");
while(r==true)
{
    input()
    r=confirm("Do you want to see the Promt Again ?");
    if(r==false)break;
}
alert("Game Over !")