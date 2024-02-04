let a=document.getElementsByTagName("div")[0];
// a.innerHTML=a.innerHTML+"<h1>Hello World</h1>";

let div=document.createElement("div");
div.innerHTML="<h1>Hello World</h1>";
//a.append(div);
//a.prepend(div);

// you will see no changes as above but now the element comes out of the container
// a.before(div); 
// a.after(div);

// to replace
a.replaceWith(div);