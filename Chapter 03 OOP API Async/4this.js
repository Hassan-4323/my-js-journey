// gloabal scope ma this ki value window hoti ha
// console.log(this);

// function scope ma this ki value window hi hoti ha
function abcd(){
    console.log(this);
}
// abcd();

// obj ka andar funtion jo bi ho wo method kehlata ha
let obj = {
    name: "Hassan",
    age: function(){
        console.log(this);
    }
}
// obj.age()

// event handler, this wo banda hota ha jis ab addevent laga ho
// let h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){
//      console.log(this);
// });

// class
class Class{
    constructor(){
        console.log("Hello");
        this.a = 12;
    }
}
let val = new Class();
console.log(val);



