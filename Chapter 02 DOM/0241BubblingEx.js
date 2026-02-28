let ul = document.querySelector("ul")
ul.addEventListener("click",function(dets){
    // dets.target.classList.toggle("lt") --> this line will now add line-through if not present and if present it will remove it
    dets.target.classList.add("lt")
})