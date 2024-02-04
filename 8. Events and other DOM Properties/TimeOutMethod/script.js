// alert("I am Alert! ");

// to display this alert after 2 seconds
let a=setTimeout(function(){
    alert("I am inside Set Time Out.");
},2000);
// console.log(a);
// It will output the timer ID
// Output : 1

// to stop the above timeout method
// let c=prompt("Do you want to see the Time out alter (Y/N) ? ")
// if(c=="N")clearTimeout(a);
// Output: Nothing will be displayed after 2 second

// to execute any function with the help of timeout
const sum=(a,b)=>{
    console.log("I am calcualting the sum of numbers and the result is : "+(a,b));
};
// setTimeout(sum,5000,2,5);

// to execute the above method again and again after some interval given as input
//let c=setInterval(sum,5000,2,5);
//clearInterval(c);