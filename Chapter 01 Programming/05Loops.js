// For, While, ForEach 

// kaha sa jana ha ---> kaha tak jana hai ---> kaisy jana hai =====> FOR
// kaha sa jana ha ---> kab rukna hai  ---> Kaisy jana hai =====> WHILE

// ---------------- FOR LOOP STRUCTURE ---------------------------

for(let i = 1; i < 101; i++){
    // console.log(i);
}

// ------------------------ while loop structure ------------------
// start;
// while(end){
//     code
//     change;
// }

let j = 1;
while(j<33){
    // console.log(j);
    j++;
}

// ----------------- Do While loop sturcture -------------------
let k = 1;
do {
    // console.log(k);
    k++;
}
while(k<25);


// --------------------- PRACTICE QUESTIONS -------------------------
// QUESTION 01 --> print numbers from one to ten use for loop
for(let a = 1; a<11; a++){
    // console.log(a);
}

// QUESTION 02 --> print numbers form ten to one use while loop
let b = 10;
while (b>0){
    // console.log(b);
    b--;
}

// QUESTION 03 --> print even numbers from one to twenty use for loop
for(let c = 1; c<21; c++){
    if(c % 2 == 0){
        // console.log(c);
    }
}


// QUESTION 04 --> print odd numbers from one to fifteen use while loop
let d = 1;
while(d<16){
    if(d % 2 === 1){
        // console.log(d);
    }
    d++;
}

// QUESTION 05 --> print multiplication table of 5
for(let e=1;e<11;e++){
        // console.log(5 * e);
        // console.log(`5 * ${e} =  ${5 * e}`);
}

// QUESTION 06 --> print sum of numbers from one to hundered using a loop
let sum = 0;
for(let g=1; g<101; g++){
    sum = sum + g;
}
// console.log(sum);

// QUESTION 07 --> print all numbers between one and fifty that are divisible by three
for(let h=1; h<51; h++){
    if(h%3===0){
        // console.log(h);
    }
}

// QUESTION 08 --> Ask the user for a number and print whether each number from one to that number is even or odd
// let newValue = prompt("Enter any number")
// for(let l=0; l<newValue;l++){
    // if(l % 2 === 0){
        // console.log(`${l} is even`);
    // }
    // else{
        // console.log(`${l} is odd`);
    // }
// }

// QUESTION 09 -->  Count how many numbers between one to 100 are divisible by both 3 and 5

for(let z = 1; z<101; z++){
    if(z % 3 === 0 && z % 5 === 0){
        // console.log(z);
    }
}

// QUESTION 10 --> Stop at first multiple of seven
for(let n = 1; n<15; n++){
    if(n % 7 === 0){
        break;
    }
    // console.log(n);
}


// QUESTION 11 --> Write a loop from 1 to 100 that
//            . Prints each number
//            . stops completely when it finds the first number divisible by 7

for(let o = 1; o<101; o++){
    // console.log(o);
    if(o % 7 === 0){
        break;
    }
}

// QUESTION 12 --> skip multiples of 3 
// write a loop from 1 to 20 that :
//      . skips numbers divisible by 3 
//      . prints all others
//  hint: continue 
// Expected output: 1,2,4,5,7,8,10......

for(let v = 1; v<21; v++){
    if(v % 3 === 0){
        continue;
    }
    // console.log(v);
}

// QUESTION 13 --> print first 5 odd numbers only 
// write a loop from 1 to 100 that : 
//      . prints only 5 odd numbers 
//      . then stops the loop

let count = 0;
for(let x=1; x<101; x++){
    if(x % 2 === 1){
        count++;
        console.log(x);
    }

    if(count === 5) break;

}
