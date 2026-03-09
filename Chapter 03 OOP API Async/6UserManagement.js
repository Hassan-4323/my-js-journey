const { use } = require("react");

let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.users.push({
            username:username.value,
            role:role.value,
            bio:bio.value
        })
    },
    addUsers: function () { },
    removeUsers: function () { }
}

userManager.init();