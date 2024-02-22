const f = () => {
    try {
            let a = 0;
            // console.log(program)
            console.log("Program ran successfully")
            return
    }
    catch (err) {
            console.log("This is an error")
            console.log(p)
    }
    finally {
            // this will always execute either their is error in try or catch 
            // but if it was not written under finally then if their was error in catch then the below
            // statement would have not executed
            console.log("I am a good boy")
            // Close the file
            // Exit the Loop
            // Write to the log file
    }
}
f()
console.log("End")

// as u have written return under try block and the complete code is written under function then also the
// catch block will get executed