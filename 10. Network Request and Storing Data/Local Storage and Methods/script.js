// to set the the data in the form of key value pair
let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

// to set the data in the form of key
localStorage.setItem(key, value)

// to get the item with the particular key
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        // to remove a particular item with the given key
        localStorage.removeItem(key)
}

if (key == 0) {
        // to clean the complete localstorage on a time
        localStorage.clear()
}
