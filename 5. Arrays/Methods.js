// to convert a array to string
let num=[34,9,67,22]
let res=num.toString()
console.log(res,typeof res)

// to join all the elemnts of the array using a seperator
let r=num.join("_")
console.log(r,typeof r)

// to get the last element of the array
// it updates the same array by removing the last element from it
let p=num.pop() // return the poped element
console.log(num,p)

// to add the new element at the end of the array 
let q=num.push(99)  // return the new length of the array
console.log(num,q)

// to remove the first element of the array 
let x=num.shift()  // returns the first element of the array
console.log(num,x)

// to add the element at the begining of the array
let c=num.unshift(100)  // returns the length of the array
console.log(num,c)

