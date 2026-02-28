let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    document.querySelector("#emailError").textContent = ""
    document.querySelector("#passError").textContent = ""


    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailans = emailRegex.test(email.value)
    let passwordans = passRegex.test(password.value)

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect"
        document.querySelector("#emailError").style.display = "initial"
        isValid = false;
    }

    if(!passwordans){
        document.querySelector("#passError").textContent = "Password is incorrect"
        document.querySelector("#passError").style.display = "initial"
        isValid = false;
    }

    if(isValid){
        document.querySelector("#result").textContent = "Everything is correct"
    }


})