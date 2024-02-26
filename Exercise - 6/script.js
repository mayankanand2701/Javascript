const add = document.querySelector('.add');
const deletebtn = document.querySelector('.deletebtn');
const i1 = document.querySelector('.i1');
const i2 = document.querySelector('.i2');

add.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = i1.value
    let descc = i2.value
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    console.log(e)
    todo.innerHTML = `
    <h1>${titlec} </h1>
    <p> ${descc}</p>
    `
    i1.value = ""
    i2.value = ""
  })
  
deletebtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML = ""
  })