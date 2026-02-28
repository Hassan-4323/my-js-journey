// let h1 = document.querySelector("h1")
// h1.addEventListener("click",function(){
//     h1.style.color = "red"
// })

// function dblClick(){
//     p.style.color = "orange"
// }

// let p = document.querySelector("p")
// now i want to add the addeventlistner
// p.addEventListener("dblclick",dblClick)
// now i want to remove the addeventlistner
// p.removeEventListener("dblclick",dblClick)

// ============ input =============
// let inp = document.querySelector("input")
// inp.addEventListener("input",function(dets){
//     if(dets.data !== null){
//         console.log(dets);
//     }
// })

// ============ CHANGE =============
// let select = document.querySelector("select")
// let h3 = document.querySelector("h3")
// select.addEventListener("change", function(dets){
//   console.log(dets.target.value);
//     h3.textContent = `${dets.target.value} has selected`
// })

// ============ practice example 1=============
// let h1 = document.querySelector("h1")
// window.addEventListener("keydown", function(dets){
//     if(dets.key === " "){
//         h1.textContent = "SPC"
//     }
//     else{
//         h1.textContent = dets.key
//     }
// })

// ============ practice example 2=============
let btn = document.querySelector(".btn")
let fileinp = document.querySelector(".fileinp")
btn.addEventListener("click", function(){
    fileinp.click();
})

fileinp.addEventListener("change", function(dets){
    // console.log(dets.target.files[0].name)
    const file = dets.target.files[0]
    if(file){
        btn.textContent = file.name
    }
})
