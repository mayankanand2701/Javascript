let x=function(e){
    alert("Hello World 1 ");
};
let y=function(e){
    alert("Hello World 2 ");
}
btn.addEventListener("click",x);
btn.addEventListener("click",y);
let p=prompt("Enter your favourite Number ? ");

// it works only if the function object are same so we have created a method (x) for it
if(p=="2") btn.removeEventListener("click",x);