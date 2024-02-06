let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            //console.log("I am a promise and I am resolved")
            resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            //console.log("I am a promise and I am rejected")
            reject(new Error("I am an error"))
    }, 5000)
})

// both promises will execute simultaneoulsy 
// you can put any number of process all will execute at the same time
//console.log(p1,p2);

// To get the value
p1.then((value) => {
    console.log(value)
})

// To catch the errors
//p2.catch((error) => {
//console.log("some error occurred in p2")
//})

// the above 2 at the same time
p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})