// DOM manipulation
// =================== SELECTING ELEMENTS ===================
// getElementById, getElementsByClassName, querySelector, querySelectorAll

// let h1 = document.querySelector("h1")
// h1.innerText = "Hello i am Hassan"
// h1.textContent = "Nice banda ha yar y"
// h1.innerHTML = "<i>Hassan Jan is good person </i>"
// console.log(h1)

// =================== ATTRIBUTE MANIPULATION ==================
// let a = document.querySelector("a")
// a.href = "https://www.google.com" // this is first method to change the value
// a.setAttribute("href", "https://www.google.com")

// let img = document.querySelector("img")
// img.setAttribute("src","https://images.unsplash.com/photo-1770150511105-714f4f5c0d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8")

// ------------ get attribute --------------
// let a = document.querySelector("a")
// console.log(a.getAttribute("href"))

// ------------ Dynamic DOM manipulation ------------
// let h1 = document.createElement("h1")
// h1.textContent = "Hello Hassan"
// document.body.prepend(h1)

// first create the element then append or prepend it
// append means add element in the last and prepend means add element in the top means in body

// let h1 = document.createElement("h1")
// h1.textContent = "Hello Hassan"
// document.querySelector("body").prepend(h1);

// let h1 = document.createElement("h1")
// h1.textContent = "I am number 4"
// document.querySelector("div").appendChild(h1);

// ================== STYLE UPDATE ====================
// let h1 = document.querySelector("h1")
// h1.style.color = "red"
// h1.style.fontFamily = "Gilroy"

// ------------------ ACCESS CLASS NAME ----------------
// let h1 = document.querySelector("h1")
// h1.classList.add("hulu")
// h1.classList.remove("hulu")
// h1.classList.toggle("hulu"); ---> toggle means ha to hata do nahi ha to laga do

// !! =================== PRACTICE PROBELMS ===================
// QUESTION 01 what is dom and how does it represent the html structure

// QUESTION 02 name the types of nodes in the DOM tree. (node, element, text, comment)

// QUESITON 03 what is the difference between element node and text node? (element node actuall html tag hota hai and text node andar ka content hota ha, and element node has children and text node has no children)

// QUESTION 04 what is difference between getElementById and querySelector?

// QUESITON 05 what does getElementByClassName return? is it an array? (no it is not an array but it is an html collection that looks like an array)

// QUESTION 06 user querySlectorAll to select all buttons with class ".buy-now".
// let buynow = document.querySelectorAll(".buy-now");
// console.log(buynow);

// TASK 1 : Select the heading of a page by ID and change its text to "Welcome to JS"
// let heading = document.querySelector("#Heading")
// heading.textContent = "Welcome to JS"

// TASK 2 : Select all <li> elements and print their text using a loop
// let lis = document.querySelectorAll("li")
// lis.forEach(function(val){
//     console.log(val.textContent)
// })

// QUESTION 07 what is the difference between innerText, textContent and innerHtml
// QUESTION 08 when you should use innerText and textContent
// (TextContent is faster and it gives all the text which is presnet inside the element whether its display is non or not while innerText is slow and it gives the content which is visible)

// QUESITON 09 add a title attribute using js
// let div = document.querySelector("div")
// div.title = "Hello Gi"

// QUESTION 10 remove the disable attribute from a button
// let button = document.querySelector("button")
// button.removeAttribute("disabled")

// QUESTION 11: what does createElement() do? what's returned?
// let h1 = document.createElement("h1");
// console.log(h1);

// QUESTION 12: what's the difference between appendchild and prepend()?
// append add in last and prepend add in start of the specific element

// QUESTION 13: can we remove an element using removeChild()?
// yes we can remove an element with removeChild.

// QUESTION 14: create a new list item <li> New Task </li> and add it to the end of a <ul>.
// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// li.textContent = "New Task"
// ul.appendChild(li)

// QUESTION 15: create a new image element with a placeholder source and add it at the top of the div.

// let img = document.createElement("img")
// img.setAttribute("src", "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg")

// img.classList.add("placeholder")
// let div = document.querySelector("div").prepend(img)

// QUESTION 16: select the first item in a list and delete it from the DOM
// let ul = document.querySelector("ul")
// let li = document.querySelector("li")
// ul.removeChild(li);

// QUESTION 17: how to you change the background color of an element?
// let div = document.querySelector("div")
// let h1 = document.querySelector("h1")
// h1.style.backgroundColor = "green"
// h1.style.color = "Red"

// QUESTION 18: what is the difference between .classList.add() and .classList.Toggle()?
// .classList.add() --> this will add the class and .classList.Toggle()--> this will add the class if not present and remove it if not present

// QUESTION 19 : add a highlight class to every even item in a list
// let li = document.querySelectorAll("ul li:nth-child(2n)")
// li.forEach(function(elem){
//     elem.classList.add("highlight");
//     console.log(elem)
// })

// QUESTION 20: set the font size of all p elements to 18px using .style
let p = document.querySelectorAll("p")
p.forEach(function(elem){
    elem.style.fontSize = "20px";
})
