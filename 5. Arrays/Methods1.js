// to delete the element of the specified index
let arr=[1,2,3,4,5,6,7,8,9]
//console.log(arr.length)
//console.log(arr)
//delete arr[0]
//console.log(arr.length)
//console.log(arr)

// to concat more than one array
//let arr1=[11,23,45,667,789,87]
//let narr=arr.concat(arr1)   // it returns the new array doesnot effect the original array
//console.log(narr)

// to sort the array
// it sorts alphabetacially it consider everything above as a string
let arr2=[23,11,34,5,66,7]
console.log(arr2.sort())

// to sort the array in ascending manner
let compare=(a,b)=>{
    return a-b;
}
console.log(arr2.sort(compare))

// to sort in descending order
let compare1=(a,b)=>{
    return b-a;
}
console.log(arr2.sort(compare1))

// Splice 
let a=[1,2,3,4,5,6,7,8,9]
// the beolow method return all the deleted values
let del=a.splice(2,3,1024,2048,5024) // (starting index,number of elements,all the elements)
console.log(a,del)

// Slice it takes out a piece form the array and crate the new array of sliced elements
let ans=a.slice(2)
console.log(ans)
