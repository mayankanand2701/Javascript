// Synchronous Programming
// as they will execute on after the other
// const prompt=require("prompt-sync")();
// let name=prompt("What is your name ? ");
// let rollno=prompt("What is your roll number ? ");
// let score=prompt("How much you score ? ");
// console.log(name," holding roll number ",rollno," scored marks ",score);

// Asynchronous Programming
// console.log("Time Started");
// setInterval(function(){
//     console.log("I am Inside Interval");
// },3000);
// console.log("Time Ended");

// Callbacks
function loadScript(src,callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("Loades script with src : "+src);
        callback(null,src);
    }
    script.onerror=function(){
        console.log("Error in loading the page : "+src);
        callback(new Error("src got some error"));
    }
    document.body.appendChild(script);
}
function hello(error,src)
{
    if(error)
    {
        console.log(error);
        return;
    }
    alert("Hello World : "+src);
}

// Pyramid of Doom
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
        if (error) {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                        console.log(error)
                        sendEmergencyMessageToCeo();
                        return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                        if (error) {
                                console.log(error)
                                sendEmergencyMessageToCeo();
                                return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                                if (error) {
                                        console.log(error)
                                        sendEmergencyMessageToCeo();
                                        return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                        if (error) {
                                                console.log(error)
                                                sendEmergencyMessageToCeo();
                                                return
                                        }
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                                if (error) {
                                                        console.log(error)
                                                        sendEmergencyMessageToCeo();
                                                        return
                                                }
                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                        if (error) {
                                                                console.log(error)
                                                                sendEmergencyMessageToCeo();
                                                                return
                                                        }
                                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                                if (error) {
                                                                        console.log(error)
                                                                        sendEmergencyMessageToCeo();
                                                                        return
                                                                }
                                                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                        })
                                                })
                                        })
                                })
                        })
                })
        })
})
