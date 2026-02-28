// ================== FUNCTIONS ===================
// WHAT, WHY, HOW

// ================= FIRST METHOD TO WRITE FUNCTION ==================
function user(){
    // function declaration
}

// ================= SECOND METHOD TO WRITE FUNCTION =================
let fnc = function(){ // here fnc is the name of function
    // function expression
}

// ================= FAT ARROW FUNCTION =================
let fat = ()=>{
    // arrow function
}

// EXAMPLE 
function dance(d1){
    console.log(`${d1} is dancing`);
}
// dance("Donkey");
// dance("Horse");

// new example
function add(a1,a2){ // add(v1,v2 is parameters)
    // console.log(a1+a2);
}
add(1,3); // add(1,3 is arguments)

// =========== DEFAULT, SPREAD AND REST PARAMETERS =============

// -------------------------- DEFAULT ----------------------------
function addition(v1,v2){ // if user didn't give values then we write it as addition(v1=0, v2=0)
    // console.log(v1+v2); // this will give NaN
}
addition();

// -------------------------- REST and SPREAD --------------------------------
// REST ---> agar functions ka parameters ma lagy ... then wo rest operator ha
// SPREAD ---> agar arrays and objects ma lagy ... then wo spread operator hai
function values(...val){
    // console.log(val);
}
values(1,2,3,4,5,6,7,8,9,10)

// ============== RETURN VALUES AND EARLY RETURN VALUES =============
function retn(c){
    return 12+c;
}
let retun = retn(23);
// console.log(retun);

// ---------- FIRST CLASS FUNCTION -------------
// FCF---> functions ko value ki tarah treat kar sak ty ho
function user(loggin){
    loggin();
}

user(function(){
    // console.log("hey");
});
// second example
function calculator(sum){
    sum();
}
calculator(function(){
    // console.log("Add");
})

// ================= HIGHER ORDER FUNCTIONS ==================
// HOF ---> hof wo funciton hota ha jo ki return kary function ya pir accept kary aik function apny parameter ma

function abcd(){ // this abcd is hof

}
abcd(function(){// this abcd is not hof

})

// second example
function ghq(){
    return function(){
        // console.log("Hi");
    }
}
ghq()(); // ()() because one is for external funtion and second one is for return ftn

// ================ PURE VS IMPURE FUNCTIONS ====================
// PURE ---> aisy fnc jo ki bahir ki value ko na badal da 
// Impure ---> aisy fnc jo ki bahir ki values ko badal da

// PURE example
let a = 13;
function ty(){
    console.log("Hi"); // from this fnc the value of a is not effected
}

// IMPURE example
let c = 12;
function yi(){
    c++; // from this fnc the value of c is increasing so this is impure fnc
}
yi();
// =================== IMPORTANT ===========================================
// =================== IMPORTANT ===========================================
// =================== IMPORTANT ===========================================
// =================== IMPORTANT ===========================================
// !! =================== CLOSURE AND LEXICAL SCOPING ======================
// =================== IMPORTANT ===========================================
// =================== IMPORTANT ===========================================
// =================== IMPORTANT ===========================================
// =================== IMPORTANT ===========================================
// =================== IMPORTANT ===========================================

// closure --> aisa function jo return karta ha aik aur function aur return hone wala fnc hamesha use karega parent fnc ka koi variable

function wy(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

// LEXICAL SCOPING ---> means kisi be cheez ka scope kia like
function iye(){
    let t = 12; // scope of t is from line 128 to 134
    function oiu(){
        let p = 13; // scope of p is from line 130 to 133 like that
        function lsi(){
            let q = 14;
        }
    }
}

// ============== IIFE (immediately invoked function expression) ===============
// means function bana do without giving any name and then wrap it it () and in last call it 
(function(){
    // console.log("Hi how are you");
})();

// ========= HOISTING DIFFERENCE BETWEEN DECLARATION AND EXPRESSION ===========
// HOISTING DECLARATION :
lsi(); // this is working
function lsi(){
    // console.log("HIe")
}
// HOISTING EXPRESSION
// asi(); // this is not working
let asi = function(){
    console.log("Ki");
}

// =================== PRACTICE QUESTION =================
// QUESTION 01 : convert this to arrow function
// function multiply(a,b){
//     return a * b;
// }

// let multiply = (a,b) => {
//     return a * b;
// }

// QUESTION 02 : identify parameters and arguments
function welcome(name){ // name is parameter
    //console.log(name); // name is variable
}
welcome("Hassan"); // Hassan is argument

// QUESTION 03 : predict the output
function sayHi(name = "Guest"){
    // console.log("Hi", name);
}
sayHi();


// QUESTION 04 : use rest parameter to accept any number of scores and return the total

function accept(...score){
    let total = 0;
    score.forEach(function(val){
        total = total + val;
    });
    return total;
}
// console.log(accept(1,2,3,4,5));

// QUESTION 05 : make this fnc to eraly return fnc
function checkAge(age){
    if(age<18){
        console.log("Too young");
    }
    else{
        console.log("Allowed");
    }
}

function convertCheckAge(age){
    if(age< 18) return "Too young";
    return "Allowed";
}
// console.log(convertCheckAge(23));

// QUESTION 06 : what does it mean when we say "functions are first class citizen"?
// this means you can use functions as a variables means treat them as a variable, means you can pass functions in  parameters also


// QUESTION 07 : can you assign a function to a variable and then call it? show how?

let x = function(){

}
x();

// QUESTION 08 : call a function into another function and execute it inside

function hig(hi){
    hi();
}
hig(function(){
    // console.log("Hello")
})

// QUESTION 09 : which one is the higher order function
// [1,2,3].map(function(x){ // map is higher order function
    // return x*2;
// });


// QUESTION 10 : is this is pure or impure function
let total = 0;
function addTotal(num){
    total = total + num; // this is impure function because you increase the total
}

// QUESTION 11 : convert the above function to a pure function
let totals = 0;
function addTotal(num){
    let newTotal = totals;
    newTotal = newTotal + num;
}

// QUESTION 12 : kia count hoga 
function outer() {
    let counting = 0;
    return function(){
        counting++;
        // console.log(counting);
    }
}
// const counter = counting();
// counting();
// counting();

// QUESTION 13: convert this normal question into IIFE

function init(){
    // console.log("Initialized");
}

 (function initt() {
    // console.log("Initialized");
 }) ();

 // QUESTION 14: what is the use of IIFE
 // jab ap private ftn banaty ho to app iife use karty ho
let hassan = (function () {
    let score = 0;
    return {
        getScore: function(){
            // console.log(score);
        },
        setScore: function(val){
            score = val;
        },
    };
})();

// QUESTION 15: 
// function greet(name = "Guest") {
//     return "Hello " + name;
// }

// console.log(greet());
// console.log(greet("Hassan"));

// QUESTION 16:
// let x1 = 10;

// function test(x1){
//     x1 = x1 + 5;
//     return x1;
// }

// console.log(test(10));
// console.log(x1);


// QUESTION 17:
// function outer(){
//     let a = 5;
//     function inner(){
//         return a * 2;
//     }
//     return inner();
// }

// console.log(outer());


// !! WRITE A BMI CALCULATOR
function bmi(weight,height){
    return weight / (height * height);
}
// console.log(bmi(55,1.7).toFixed(2));

// !! WRITE A DISCOUNT CALCULATOR HOF (HIGHER ORDER FUNCTION)
function discountCalcuator(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}
let discounter = discountCalcuator(10);
// console.log(discounter(200));

// !! WRITE A COUNTER VALUE FUNCTION using closure MEANS INCREASE COUNT VALUE
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let co = counter();
// console.log(co());

// !! CREATE A PURE FUNCTION TO TRANSFORM A VALUE
function double(val){
    return val * 2;
}
// console.log(double(5));

// !! USE IIFE TO ISOLATE A VALUE
(function(){
    const password = "Secret password";
    // console.log(password);
})();
// console.log(password); // this line will now give error

// !! MINI PROJECT STUDENT GRADE SYSTEM
// ================= STUDENT RESULT MANAGER =================

// PURE FUNCTION → calculate total
function calculateTotal(marks){
    return marks.reduce((sum, m) => sum + m, 0);
}

// PURE FUNCTION → calculate percentage
function calculatePercentage(total, subjectCount){
    return (total / (subjectCount * 100)) * 100;
}

// PURE FUNCTION → calculate grade
function calculateGrade(percentage){
    if(percentage >= 90) return "A";
    if(percentage >= 75) return "B";
    if(percentage >= 60) return "C";
    return "Fail";
}

// CLOSURE → student data privacy
function createStudent(name){
    let marks = [];

    return {
        addMarks: function(...nums){
            marks.push(...nums);
        },

        getResult: function(){
            let total = calculateTotal(marks);
            let percentage = calculatePercentage(total, marks.length);
            let grade = calculateGrade(percentage);

            return {
                name,
                total,
                percentage: percentage.toFixed(2),
                grade
            };
        }
    };
}

// ================= USING THE PROJECT =================

let student1 = createStudent("Hassan");

student1.addMarks(85, 90, 78, 88, 92);

let result = student1.getResult();

console.log("Name:", result.name);
console.log("Total Marks:", result.total);
console.log("Percentage:", result.percentage + "%");
console.log("Grade:", result.grade);
