// data types
// Primitives --> Al those values you are copying it, then you will get new copy of it 
// Refrences  --> You copy one thing , but you cannot get real copy , only you will get refrence of it means refrence of parent

// Primitive --> String, Number, Booleam, Null, Undefined, Symbol and BigInt
// Refrence --> Array [], Objects {} and Functions ()

// Primitive Example
let a = 12;
let b = a;


// Refrence Example
let c = [1,2,3]
let d = c;

// Symbol --> Future ma hum koi be libraries use karengy ab is case ma kai bar kuch fields hoti ha , jinse similar hum be bana deity ha aur ghalti sa hamari banai hove fields us library ka origional field ko change kar da ty ha

// Example 
let user = {
    userid : 12,
    username : "Hassan"
}
user.userid = 13; // now this will replce 12

// Second example of Symbol
let u1 = Symbol("u1");
let u2 = Symbol("u1"); 
// these both will gives similare result but they are not equall, means they are unique, u1 is separete and u2 is separate


// -------------------- BIGINT -------------------------
let i = 9007199254740991n;


// ---------------------- Refrence examle ----------------

let g = [
    u = "Hassan"
]
let h = g;
h.u = "Jan"; // now this will output in J instead of Hassan

// --------------------- DYNAMIC TYPING ---------------------
// Means there is no static data type like int, float , double etc
// while in JS there is let, var, const

// static example
// int k = 12;
// a = true;

// Dynamic Example
let k = 12;
k = true;
k = "Hassan";
k = [];
// means types are changing 
// But we prefer static typing bc if we write 12k lines of code and if we define in line 4 a = 12; and then we suddenly change it by mistake a = true, so in dynamic typing it will not gives an error that's why wr prefer static


// ------------------------ TYPE OF QUIRKS --------------------------
// (e.g typeof null === 'Object')
// Means you can check the type of anything istead of guessing it
// typeof nan is number
// and typeof null is object
// Nan === NaN in JS they are not equal this will give us false answer, so we say this is quirks
// [] + [] ----> '', array + array gives us string this is quirks



// --------------------------- TYPE CORECION (== AND ===)
// This is a concept where one type is convert automatically to another type like: 

// "3" + 1 this result in 31 // becuse + plus do two work one is concat and other is addition
// "3" - 1 this result in 2 // while here - has no options



// -------------------------- TRUTHY VS FALSY VALUES ---------------------
// null, NaN, Undefined, document.all, "" => if these type of values are comes then JS say it is false values
// =================== TRICK FOR CHECKING THIS ================== 
// !!Null, !!Undefined, !!NaN this will result in false
// NaN is failed mathematical operation 




























