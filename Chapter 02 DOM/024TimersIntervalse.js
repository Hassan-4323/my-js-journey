// let count = 10;

// let interval = setInterval(function(){
//     if(count>=1){
//         count--;
//         console.log(count)
//     }
//     else clearInterval(interval)
// },2000)

let count = 0;
let progress = document.querySelector(".progress-bar")
let percent = document.querySelector("#percent")

let interval = setInterval(function(){
    if(count<=99){
         count++
         progress.style.width = `${count}%`
         percent.textContent = `${count}%`
    }
   else{
    document.querySelector("h2").textContent = "Downloaded"
    clearInterval(interval)
   }
},30)
