// There are 7 Primitive Data Types in JS
// NN BB SS U

// N : Null
// N : Number
// B : Boolean
// B : BigInt
// S : String
// S : Symbol
// U : Undefined

let a=null;
let b=345;
let c=true; // can be false
let d=BigInt("567")
let e="Harry"
let f=Symbol("I am a Nice Symbol")
let g=undefined
console.log(a,b,c,d,e,f,g)

// to know which type of datatype a variable is
console.log(typeof b)

// Non Primitive Data Type
// Objects in JS
const result={
    "Maths":99,
    "Chemistry":96,
    "Biology":69,
    "Physics":88,
    "Extra":undefined
}
console.log(result)
console.log(result["Maths"])