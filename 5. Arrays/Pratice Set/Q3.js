// Filter a numbers from array which are divisible by 10
let arr=[1,5,50,10,57,69,90,100]
let ans=arr.filter((e)=>{
    return e%10==0;
})
console.log("All the numbers that are divisible by 10 are : ",ans);