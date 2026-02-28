// Arithmetic, Coparison, Logical, Assignemt, Uniary, Ternary (+ - * ** % / = == === < <= >= ! != !== !! && || ?:)   ** (Exponentiation) means 2 ** 3 => 8


//  ---------------- Arihmetic Operators ----------------------
// + - * / **

// ----------------- Comparison Operators ----------------------
// = == === >= <= != !== < >
// 1) = (Not strict Comparison) => this only assign value directly

// 2) == (Stric Comparison) => this only compare like 12 == 12 so it is true but problem comes when we say 12 == "12" this also result true but it is not actually true means it does not check the type

// 3) === => this will fix the problem of == now if we wrie 12 === "12" so result will false

// 4) != (Not Strict) => It is just like == but it is opposit like 12 != "12" --> false

// 5) !== (Strict) => It is just like === but is opposite like 12 !== "12" --> true

// --------------------------- Assignemt Operator -------------------------------

// =, +=, -=, %=, /=

// --------------------------- Logical Operator ----------------------------------
// && || !

// --------------------------- Uniary Operator -----------------------------------
// + - ! typeof ++ -- means that works on sigle value
// +"5" converts to number means 5 ====== (TRICK)======

// --------------------------- Ternay Operator ------------------------------------
// ?: If true then after question mark the code will run but if false then the code after the : will be run like
// Example

let a = 12;
let b = 13;

a > b ? console.log("Ture") : console.log("false");


// ---------------------------- Typeof and Instanceof -------------------------------
// InstaceOf is always work with [], {}, and functions(){} 
let c = 12;
console.log(typeof(c));

let d = {}; // ----> this is object
console.log(d instanceof Array); // ----> this gives us false bc d is instance of object not array

let e = 12;
console.log(e instanceof Number); // ----> this will give false bc it works with [],{} and functions

// typeof work with primitives and instanceof work with refrence




// --------------------------- PRACTICE QUESTIONS ---------------------------------

let marks = 78;
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "Fail";
console.log(grade);

let points = 120;
let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
console.log(status);

let loggedIn = true;
let notLoggedIn = false;
let checkStatus = loggedIn && notLoggedIn ? "Allow" : "Deny";
console.log(checkStatus);

let num1 = 5;
num1++;
console.log(num1);

let num2 = 4;
++num2;
console.log(num2);

let num3 = 4;
let num4 = num3++;
console.log(num3, num4);

let num5 = 4;
let num6 = ++num5;
console.log(num5, num6);

let num7 = 7;
console.log(num7--);
console.log(num7);

let num8 = 8;
let result = num8++ + ++num8; 
console.log(result);

let likes = 100;
function likePost(){
    return ++likes;
}
console.log(likePost()); // 101
console.log(likes); // 101

let count = 10;
if(count-- === 10){
    console.log("Matched");
}
else {
    console.log("Not Matched");
}

let n1 = 5;
let n2 = n1++ + n1++ + ++n1;
console.log(n1, n2);

let n3 = 10;
let n4 = ++n3 + n3++ + --n3;
console.log(n3, n4);

let n5 = 3;
let res = n5++ * 2 + ++n5;
console.log(n5, res);

let n6 = 5;
console.log(n6++ === 5);
console.log(n6);

let studentSore = 50;
let studentResult= studentSore++ > 50 ? "Pass" : "Fail";
console.log(studentResult, studentSore);

let counter = 0;
if(++counter && counter++ && ++counter){
    console.log("True Block");
}
else{
    console.log("False Block");
}
console.log(counter);

let nu1 = 1;
let nu2 = 2;
let nu3 = nu1++ > nu2 ? ++nu1 : nu2++;
console.log(nu1, nu2, nu3);

let i = 5;
let j = i-- + --i + i++;
console.log(i, j);

let coins = 9;
let reward = coins++ >= 10 ? "Bonus" : "No Bonus";
console.log(reward, coins);

let level = 2;
let power = ++level === 3 ? level++ : --level;
console.log(level, power);

let a1 = 5;
let b1 = a1++ + ++a1 + a1++;
let c1 = b1-- + --b1;
console.log(a1, b1, c1);
