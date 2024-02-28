let g=document.querySelector("button");
let i=document.querySelector("div");

g.addEventListener("click", (e) => {
    let len=15;
    let password="";
    let ss="{}[],/?!@#$%^&*()-+=|\:;'";
    let dig="0123456789";
    let uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lc="abcdefghijklmnopqrstuvwxyz";
    let allChar=ss+dig+uc+lc;
    for (let j = 0; j < len; j++) {
        let randomIndex = Math.floor(Math.random() * allChar.length);
        password += allChar[randomIndex];
    }
    i.innerHTML=password;
})