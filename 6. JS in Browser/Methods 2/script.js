// to show a pop up menu with the below message
//alert("Your Code works");

// to take the input from the pop up menu 
alert("Enter the value of a ! ");
let a=prompt("Enter a here : ","100");  // second argumnet can be given as optional or by default value

a=Number.parseInt(a);
alert("You enterd a of type "+(typeof a));

// shocase the use of confirm method
let write=confirm("Do you want to write the input to the page ? ");

// to write the input value in the screen
if(write) document.write(a);
else document.write("Please allow me to write !");

