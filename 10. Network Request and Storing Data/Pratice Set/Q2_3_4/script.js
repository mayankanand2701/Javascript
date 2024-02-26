// Question 3
// To get the data stored in the local storage and print it

let sn=localStorage.getItem("Note");
alert("Your Note is : "+sn);

// Question 2
// Program to store a note at the local storage

let a=prompt("Enter your Note : ");
if(a){
    localStorage.setItem("Note",a);
}

// Question 4
let c=confirm("Do you want to delete the Note ?");
if(c){
    localStorage.removeItem("Note");
    alert("Note deleted successfully!");
}






