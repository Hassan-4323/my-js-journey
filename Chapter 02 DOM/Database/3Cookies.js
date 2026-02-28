// ============ COOKIES ============
// you can store data upto 4kb in cookies
// while in session and in local you can store data upto 5MB
// when you store the data in cookies and then you reload the page then it will go to the server automatically

// document.cookie = "email = email@test.com"

localStorage.setItem("name", JSON.stringify(["Hassan", "Jan"]))
let fr = JSON.parse(localStorage.getItem("name")) // -> this will give me origional array