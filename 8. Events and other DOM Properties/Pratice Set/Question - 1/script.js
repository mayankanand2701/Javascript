// you can simpliy do this in html also by adding onclick=alert("Clicked btn 1")
// here is the lengthy method
let x=function(e){
    alert("Clicked Button 1");
};
let y=function(e){
    alert("Clicked Button 2");
}
let z=function(e){
    alert("Clicked Button 3");
}
btn1.addEventListener("click",x);
btn2.addEventListener("click",y);
btn3.addEventListener("click",z);