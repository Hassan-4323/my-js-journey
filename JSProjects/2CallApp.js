const addNote = document.querySelector("#addBtn");
const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector(".close-btn");
const form = document.querySelector(".add-form");
const generateBtn = document.querySelector(".generate-btn");

const container = document.querySelector(".cards-wrapper");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

const fullNameInput = document.querySelector('input[placeholder="Full Name"]');
const townInput = document.querySelector('input[placeholder="Home Town"]');
const bookingsInput = document.querySelector('input[placeholder="Bookings"]');
const imageInput = document.querySelector('input[placeholder="Image URL"]');

let isAnimating = false;

const defaultMembers = [
    {
        fullNameValue: "Hassan jan",
        townValue: "Singapore",
        bookingsValue: 3,
        imageValue: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
    },
    {
        fullNameValue: "Ali Raza",
        townValue: "Dubai",
        bookingsValue: 5,
        imageValue: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    },
    {
        fullNameValue: "Ahmed",
        townValue: "London",
        bookingsValue: 2,
        imageValue: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200"
    }
];

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function setTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function initializeStorage() {
    if (!localStorage.getItem("tasks")) {
        setTasks(defaultMembers);
    }
}

function saveToLocalStorage(obj) {
    const tasks = getTasks();
    tasks.push(obj);
    setTasks(tasks);
}

/* ---------------- FORM ---------------- */

addNote.addEventListener("click", () => {
    formContainer.style.display = "flex";
});

closeForm.addEventListener("click", () => {
    formContainer.style.display = "none";
});

generateBtn.addEventListener("click", () => {

    const fullNameValue = fullNameInput.value.trim();
    const townValue = townInput.value.trim();
    const bookingsValue = bookingsInput.value.trim();
    const imageValue = imageInput.value.trim();

    if (!fullNameValue || !townValue || !bookingsValue || !imageValue) {
        alert("Please fill all fields");
        return;
    }

    saveToLocalStorage({
        fullNameValue,
        townValue,
        bookingsValue,
        imageValue
    });

    form.reset();
    formContainer.style.display = "none";
    showCards();
});

/* ---------------- CARDS ---------------- */

function createCard(task) {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="profile">
            <img src="${task.imageValue}" />
            <div class="info">
                <h2>${task.fullNameValue}</h2>
                <div class="details">
                    <div>
                        <p class="label">Home town</p>
                        <p>${task.townValue}</p>
                    </div>
                    <div>
                        <p class="label">Bookings</p>
                        <p>${task.bookingsValue} times</p>
                    </div>
                </div>
                <div class="buttons">
                    <button class="call-btn">📞 Call</button>
                    <button class="msg-btn">Message</button>
                </div>
            </div>
        </div>
    `;

    return card;
}

function showCards() {

    container.innerHTML = "";

    const tasks = getTasks();
    const visibleTasks = tasks.slice(0, 3);

    visibleTasks.forEach(task => {
        container.appendChild(createCard(task));
    });

    updateStyles();
}

function updateStyles() {
    const cards = container.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;
        card.style.transform = `translateY(${index * 20}px) scale(${1 - index * 0.05})`;
        card.style.opacity = 1 - (index * 0.1);
    });
}

/* ---------------- ROTATION ---------------- */

function rotateTasks(direction) {

    if (isAnimating) return;
    isAnimating = true;

    const cards = container.querySelectorAll(".card");
    if (!cards.length) return;

    const topCard = cards[0];

    topCard.classList.add(direction === "up" ? "slide-up" : "slide-down");

    setTimeout(() => {

        let tasks = getTasks();

        if (direction === "up") {
            tasks.unshift(tasks.pop());
        } else {
            tasks.push(tasks.shift());
        }

        setTasks(tasks);
        showCards();
        isAnimating = false;

    }, 400);
}

upBtn.addEventListener("click", () => rotateTasks("up"));
downBtn.addEventListener("click", () => rotateTasks("down"));

initializeStorage();
showCards();