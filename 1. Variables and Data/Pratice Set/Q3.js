// Question 3
const val={
    name:"Mayank",
    section:8,
    isDean:0
}
//val=78

// No an error will be thrown 
// TypeError: Assignment to constant variable.

// Question 4
// trying to add new key to the object defined above
val["valid"]=true
console.log(val)

// trying to edit the value for the existing key in the object
val["name"]="Aman"
console.log(val)

// Trying to reassign a value to the above const varible
// val=89
// TypeError: Assignment to constant variable.