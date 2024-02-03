// To change the card title to red using class attribute
// let title=document.getElementsByClassName("card-title")[0];
// console.log(title);
// title.style.color="red";

// To change the card title to red using id attribute
// let title=document.getElementById("first-title");
// console.log(title);
// title.style.color="cyan";

// to get the list of titles for all the card we use query selector
// to give each card differnt color
let titles=document.querySelectorAll(".card-title");
console.log(titles);
titles[0].style.color="green";
titles[1].style.color="blue";
titles[2].style.color="orange";
