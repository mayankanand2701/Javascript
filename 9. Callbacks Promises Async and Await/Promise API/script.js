let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 1");
           // reject(new Error("Error"));
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 2");
            //reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 3");
    }, 3000);
});

// After 1 second the Value 1 will be printed after resolving
// p1.then((value) => {
//          console.log(value)
// })

// After 2 second the Vlaue 2 will be printed after resolving
// p2.then((value) => {
//          console.log(value)
// })

// After 2 second the Value 3 will br Printed after resolving
// p3.then((value) => {
//         console.log(value)
// })

// to print all the theree values once all the promises are resolved in the real world the time can be anything
//let promise_all = Promise.all([p1, p2, p3])  // it generates the array of resolved value from each promise
// promise_all.then((value) => {                // the time at which the value is printed depends on which promise 
//   console.log(value)                       // took the maximum time in this case after 3 seconds
// })                                           // array will be printed : ['Value 1', 'Value 2', 'Value 3']

// in the above if any of the promise gives the error then promise_all method will not run the output will be error
// after doing this we will not get an error we will see the status:values
// let promise_all = Promise.allSettled([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value)
// })

// let promise_all = Promise.race([p1, p2, p3])
// promise_all.then((value) => {
//   console.log(value)
// })

// let promise_all = Promise.resolve(6)

//let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value) => {
//        console.log(value)
// })