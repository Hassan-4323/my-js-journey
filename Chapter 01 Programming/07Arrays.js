// let arr = [12,13,14,15,16];
// arr[2] = 21;
// arr.push(23); // add value at the end
// arr.pop(); // remove value from end
// arr.shift(); // remove value from start
// arr.unshift(0); // add value in start which one in this case is 0
// arr.splice(2,1); // remove value from index 2 and only one value is removed
//  slice ==> slice only gives us the copy from where we need it and we stor it in new variable
// let newarr = arr.slice(0,3); // this will give new array from 12,13,14;
// newarr.reverse();

// ============== ascending and descending ==================
// let array = [12,31,24,11,10]
// let sr = array.sort(function(a,b){
//     return a - b; // this will give in ascending
//     return a + b; // this will give in descending
// })

// ============= FOREACH =================
// let arr = [1,2,3,4,5,6,7]
// arr.forEach(function(val){
//     console.log(val);
// })

// ============= MAP ===================
// map tab use karna jab apko ek new array banana ha pichley array ka data ka basis per
// map dekti hi saath ma mun ma ek blank array bana lia karo

// let arr = [1,2,3,4,5,6];
// let newarr = arr.map(function(val){
//     return 11;
// })

// ============= FILTER ==================
// let arr = [1,2,3,4,5,6,7,8,9]
// let newarr = arr.filter(function(val){
//     if(val>5) return true;
// })

// ============== REDUCE =================
// let arr = [1,2,4,5,6,7]
// let newarr = arr.reduce(function(accumulator, val){
//     return accumulator + val; // accumulator har bar apni value yad rakta ha aur uski start value 0 ha
// },0)

// ============== FIND ====================
// let arr = [
//     {id:1, key:3},
//     {id:2, key:4},
//     {id:1,key:3}
// ]
// let newarr = arr.find(function(val){
//     return val.key === 3
// })

// =============== SOME ==================
// let arr = [11,43,65,87,90]
// let newarr = arr.some(function(val){
//     return val > 85 // this will return true only
// })

// ================ EVERY ================
// let arr = [1,3,4,5,7]
// let newarr = arr.every(function(val){
//     return val > 0 // if ther is one fale the result will be false
// })

// ================= DESTRUCTURING ==================
// let arr = [1,3,4,6,7,8]
//  let [a,b] = arr; // now we remove value of a and b from arr and store it in a and b
// let [a,b,,c] = arr; // now here value of a is 1, b value is 3 c value is 6

// ================== SPREAD OPERTOR ==================
// let arr = [1,3,4,5,67,8]
// let arr2 = [...arr] // now this will gives the copy of arr if we make changes in arr2 then there will be no changes in arr


// !! ================== PRACTICE QUESTIONS =====================
// QUESTION 01 : add one fruit in start and one in last
// let fruits = ["Apple", "Banana", "Mango"]
// fruits.push("Guvava");
// fruits.unshift("Strawberry");

// QUESTION 02 : replace banana with kivi in the above array
// let fruits = ["Apple", "Banana"]
// fruits.pop()
// fruits.push("Kivi")

// QUESTION 03: remove the last item from the array using a method
// let numbers = [1,2,3,4]
// numbers.pop();

// QUESTION 04: add red and blue at index 1
// let colors = ["Gree", "Yellow"]
// colors.splice(1,0, "Red", "Blue");

// QUESTION 05: extract three middle elements from following
// let numbers = [1,2,3,4,5,6]
// let newarr = numbers.slice(1,4)
// console.log(newarr);

// QUESTION 06: sort this array alphabetically and then reverse
// let names = ["Hassan", "Zarar", "Salman", "Ali","Basit"];
// names.sort();
// names.reverse();

// QUESTION 07: use .map to square each number
// let arr = [1,2,3,4]
// let newarr = arr.map(function(val){
//     return val*val;
// })
// console.log(newarr);

// QUESTION 08: use .filter to keep numbers greater than 10
// let arr = [12,11,1,4,14,20]
// let newarr = arr.filter(function(val){
//     if (val > 10) return true;
// })

// QUESTION 09: use .reduce to find the sum of the array:
// let arr = [1,2,3,4,5]
// let newarr = arr.reduce(function(accumulator,val){
//     return accumulator + val;
// },0);

// QUESTION 10: use .find to get the first number less than 10
// let arr = [12,11,10,9,76,8]
// let newarr = arr.find(function(val){
//     return val < 10;
// })

// QUESTION 11: use .some to check if any student has scored below 35
// let arr = [12,32,43,34,56]
// let newarr = arr.some(function(val){
//     return val < 35
// })

// QUESTION 12: use .every to check if all nubmers are even
// let arr = [12,11,13,14,1,15]
// let newarr = arr.every(function(val){
//     return val % 2 === 0
// })

// QUESTION 13: destructure this array to get firstname and lastname
// let names = ["Hassan","Jan"]
// let [firstname, lastname] = names;

// QUESTION 14: merge two arrays using spread operator
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [...arr1,...arr2]

// QUESTION 15: add pakistan to start of this array using spread
// let country = ["India","Bangladesh"]
// country = ["Pakistan", ...country ]

// QUESTION 16: clone this array properly not by refrence
// let arr = [1,2,3]
// let arr2 = [...arr];





