// for loop
let arr=[2,5,8,3,9,10];
for(let i=0;i<arr.length;i++)console.log(arr[i]);

// for each loop
arr.forEach((e)=>{
    console.log(e);
})

// array from
let name="Mayank";
let a=Array.from(name);
console.log(a);

// for...of
for(let i of arr)
{
    console.log(i);
}

// for...in
for(let i in arr)
{
    console.log(i)
}