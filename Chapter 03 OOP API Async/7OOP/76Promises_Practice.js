// Question 01: simple task completed

// new Promise(function(){
//     setTimeout(()=>{
//         console.log("Hello World");
//     },3000)
// });

// Question 02: number greater that 10 resolve or reject
let pr = new Promise(function(res, rej){
    setTimeout(()=>{
        let rn = Math.floor(Math.random()*10);
        if (rn > 7) res("Resolved with " + rn);
        else rej("Rejected with " + rn);
    },2000)
});
pr.then(function(val){
    console.log(val);
})
.catch(function(val){
    console.log(val);
})