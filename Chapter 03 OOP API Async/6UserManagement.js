let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUsers();
    },
    addUsers: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        });
        form.reset();
        this.renderUi();
    },
    renderUi: function () {
    document.querySelector("#usersContainer").innerHTML = "";

    this.users.forEach((user, index) => {

        let card = document.createElement("div");
        card.className = "w-[200px] h-[230px] bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center flex flex-col items-center";

        let img = document.createElement("img");
        img.src = user.photo;
        img.className = "w-14 h-14 rounded-full object-cover mb-2";

        let name = document.createElement("h3");
        name.className = "text-sm font-semibold";
        name.textContent = user.username;

        let role = document.createElement("p");
        role.className = "text-xs text-gray-400";
        role.textContent = user.role;

        let bio = document.createElement("p");
        bio.className = "text-xs mt-2 text-gray-300";
        bio.textContent = user.bio;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(bio);

        // 👇 IMPORTANT PART
        card.dataset.index = index;
        card.addEventListener("click", this.removeUsers.bind(this));

        document.querySelector("#usersContainer").appendChild(card);
    });
},
    removeUsers: function (e) {
        let index = e.currentTarget.dataset.index;

        this.users.splice(index, 1); // remove from array

        this.renderUi(); // re-render cards
    }
}

userManager.init();