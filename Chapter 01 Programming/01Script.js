// --------------- var let const ------------------

var a = 12;

// ------------ var ---------------
//  problems with var: 
//    window ma add hota hai
//    functions scoped hota hai
//    value change hota hai and with same name and no error is happens

console.log(a);

// Scope , ( Global, Block, Functional)
// ------------------ Global Scope  ------------------

var a = 12; // This is global scope or it is a functional scoped means it is used in funcitons

// ------------------ Block scope ------------------
{
    // {} ---> anything used in this braces is block scope and 
    //         var block ko repect nahi karta, means this var is uese everywhere in the code

    // so we use let 

    let a = 12; // this is block scope
}

// ------------------ Functional Scope ------------------
function user () {
    if(ture){
        var c = "Hassan";
    }
}
//  let is used in the {}



// --------------------- NEW TOPIC ---------------------
// ------------------- REASSIGNMENT AND REDECLARATION -----------------------

var a = 12;
a = 15;

let b = 20;
b = 30;

//  so we can redeclare a like
var a = 20;

// but we cannot redeclare with b, this will show error like
// let b = 35;


// ------------------ TDZ (TEMPORAL DEAD ZONE) ------------------
console.log(c);



let c = 25;

// so tdz means ----> uthna area jitnay ma js ko pata to ha lakin wo apko value nahi da sakhta
// means tdz of c is from 55 to 58 and on 59 it is now declared
// it is just present in let, const, but not in var


// ------------------ HOISTING IMPACT PER TYPE ------------------
// Hoisting means ----> ek variable ko jab js ma bana ty hain to wo do hisso main toot jata ha aik declare and doosra initilize , declare part ooper reh jata ha and initialzie neechay reh jata ha 

// HOISTING IMPACT WITH VAR 
var d = 45;
var d = undefined;
d = 45; 

// so that's why in TDZ if we write console first and then declare the value (var) that only shows undefined not showing any error

// --------------- EXERCISE ---------------
// 01
var g = 12;

{
    var g = 21;
}

console.log (g); // this is will print 21 bc var did not respect {}

// 02 
let h = 23; // this is blcok scope but initialize golbally
{
    let h = 54;
    console.log(h); // this will print 54 bc let is block scope {} that is why it will check first it {} 
}
console.log(h); // this will print 23











