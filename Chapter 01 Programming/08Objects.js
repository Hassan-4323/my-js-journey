// ================= KEY VALUE STRUCTURE ===================
// means one side there is key and then its value is present on right side
// let obj = {
//     name: "Hassan",
//     age: 23,
//     hobby: "Playing Cricket and Editing"
// }
// obj.age;
// obj['age'];

// these two methode are working for to access anything in obj then question arises that why there are two methods so the answer is :
// let aa = "name"; // i want to access this name from obj then we :
// obj[aa]; // this will now give name which is Hassan

// =============== NESTING AND DEEP ACCESS ====================
// const user = {
//     name: "hassan",
//     address: {
//         city: "Nowshera",
//         pin: 24101,
//         location: {
//             lat: 23.3,
//             lng: 77.7
//         }
//     }
// }
// user.address.location.lng
// if in case you want to access lng in future for 22 times then we can do it as:
// let {lat,lng} = user.address.location // we can say that is destructuring

// ================= for in ===================
// let user = {
//     name: "Hassan",
//     age: 23,
//     email: "test@test.com"
// }

// for(let key in user){
//     console.log(key, user[key])
// }

// ================ object.keys and object.entries ================
// let user = {
//     name: "Hassan",
//     age: 23,
//     email: "test@test.com"
// }
// Object.keys(user) // this gives us an array in the form of ['name', 'age', 'email']
// Object.entries(user) // this gives us an array of array in form of [Array(2), Array(2), Array(2)] 

// ================== SPREAD OPERATOR ================== 
// let user2 = {...user};

// ================== OBJECT.ASSIGN ====================
// let user = {
//     name: "Hassan",
//     age: 23,
//     email: "test@test.com"
// }

// Object.assign({},user);
// Object.assign({price:"Infinity"},user);

// ============== DEEP CLONE ==================
// let user1 = {
//     name: "Hassan",
//     age: 23,
//     email: "test@test.com",
//     address:{
//         city : "Nowshera"
//     }
// }
// now i want to copy user exactly
// let user2 = {...user1};
// and now i want to change the city name in user2 only not in user1
// user2.address.city = "Mardan"
// now the problem comes that in user1 the city name also changed but we did'nt want't
// so deep clone can cover it

// so to cover this problem we can convert user1 into string by using JSON
// let user2 = JSON.parse(JSON.stringify(user1))
// user2.address.city = "Mardan"

// =============== OPTIONAL CHAINING ==================
// let user1 = {
//     name: "Hassan",
//     age: 23,
//     email: "test@test.com",
//     address:{
//         city : "Nowshera"
//     }
// }
// now i want to access city which is present in address but in case if the name of address changes in future then how we can fix it 
// user1.address.city;//  this will give correct answer 
// user1?.address?.city // now if name of address is change to addresses then it will give undefined bc ? means if hai to da do agar nahi ha error na do

// ============= COMPUTED PROPERTIES ================
// let role = "admin" // i want to access it inside the user1 so we can do it by :
// let user1 = {
//     name: "Hassan",
//     age: 23,
//     email: "test@test.com",
//     address:{
//         city : "Nowshera"
//     }
//     [role] = "Hassan"
// }

// !! =================== PRACTICE PROBLEMS =================
// QUESTION 01: create an object for a student with name, age and isEnrolled
// let student = {
//     name: "Hassan",
//     age: 23,
//     isEnrolled: true
// }

// QUESTION 02: can object key be a number or boolean, try this:
// const obj = {
//     true: "yes",
//     42: "answer"
// }
// console.log(obj[42]);

// QUESTION 03: access the first-name from the following object
// const user = {
//     "first-name":"Hassan"
// }
// user['first-name']

// QUESTION 04: given a dynamic key let key = "age" how will you access user[key]
// let key = "age";
// const user = {
//     age: 26
// }
// user[key]

// QUESTION 05: from the object below print the latitude
// const locations = {
//     city: "nowshera",
//     coordinates:{
//         lat:23,
//         lng:77.4
//     }
// }
// locations.coordinates.lat

// QUESTION 06: desturcture the city and lat from the locations object
// const locations = {
//     city: "nowshera",
//     coordinates:{
//         lat:23,
//         lng:77.4
//     }
// }
// let {city} = locations;
// let {lat} = locations.coordinates;

// QUESTION 07: destructure the first-name as a variable called first-name
// const user={
//     "first-name" : "Hassan Jan"
// }
// let {'first-name':firstName} = user;

// QUESTION 08: use for in loop to log all keys in this object
// const course ={
//     title:"javascript",
//     duration:"4 week"
// }
// for(let key in course){
//     console.log(key)
// }

// QUESTION 09: use object.entries to print all key value pairs
// const course ={
//     title:"javascript",
//     duration:"4 week"
// }
// Object.entries(course).forEach(function(val){
//     console.log(val[0] + " : "+  val[1])
// })

// QUESTION 10: copy this object
// const origional = { a: 1, b:2}
// const copy = {...origional}

// QUESTION 11: what is problem with this
// const obj1 = {info:{score:80}};
// const clone = {...obj1};
// clone.info.score = 100;
// console.log(obj1.info.score);
// problem is this that there is present nested object in it so only refrence will pass there , so in 3rd line we have change the value to 100 so its origionl value is also changed

// QUESTION 12: deep clone the obj1 saftley
// const obj1 = {info:{score:80}};
// let newobj = JSON.parse(JSON.stringify(obj1))
// newobj.info.score = 100;
// now only newobj value will be changed and obj1 value will be remain safe

// QUESIOTN 13: rewrite this using optional chaining
// const person = {}
// console.log(person.profile.name); // this will give an error
// to fix this problem we can write ?
// console.log(person?.profile?.name) // now this will give undefined not error

// QUESTION 14: use a variable to dynamically assign a property
const key = "role";
let obj = {
    name : "hassan",
    [key] : "admin"
}
