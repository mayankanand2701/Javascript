async function fun(){
        let p1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                        console.log("Initalizing Hack Program ...");
                }, 1000)
        })
        let p2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                        console.log("Hacking Raj username.");
                }, 2000)
        })
        let p3 = new Promise((resolve, reject) => {
                setTimeout(() => {
                        console.log("Username Found : raj2021")      
                }, 4000)
        })
        let p4 = new Promise((resolve, reject) => {
                setTimeout(() => {
                        console.log("Connecting to Facebook...")      
                }, 6000)
        })      
}
const main1=async()=>{
        let a=await fun();
}
main1();