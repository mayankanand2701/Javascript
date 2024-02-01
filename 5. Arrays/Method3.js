let arr=[45,89,78];
//console.log(arr);

// Array Map Method in JS

let a=arr.map((value,index,array)=>{
    //console.log(value,index,arr);
    return value+index;
})
//console.log(a)

// Array Filter Method in JS

let arr1=[12,4,45,78,90,34];
let a1=arr1.filter((e)=>{
    return e<40;
})
//console.log(a1)

// Array Reduce Method in JS
let arr2=[1,2,3,4,5]
let res=arr2.reduce((a,b)=>{
    return a+b;
})
console.log(res)

