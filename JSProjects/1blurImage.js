const users = [
  {
    name: "Arsalan Khan",
    pic: "https://images.unsplash.com/photo-1524860769472-246b6afea403?w=600&auto=format&fit=crop&q=60",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone"
  },
  {
    name: "Muhammad Ali",
    pic: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=600&auto=format&fit=crop&q=60",
    bio: "main character energy 🎬 | coffee > everything ☕✨"
  },
  {
    name: "Hassan jan",
    pic: "https://images.unsplash.com/photo-1562860149-691401a306f8?w=600&auto=format&fit=crop&q=60",
    bio: "walking through dreams in doc martens 🌥️ | late night thinker"
  },
  {
    name: "Salman Khan",
    pic: "https://media.istockphoto.com/id/2159388249/photo/hacker-scammer-computer-technology-cyber-security-concept-attack-and-data-digital-dangers-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=DqNZp-4drFtzckC3co6jRqlSVAskTBdV3CcZl-sDw0U=",
    bio: "too glam to give a damn 💅 | filter free soul"
  }
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

/* ---------- SHOW USERS FUNCTION ---------- */
function showUsers(arr) {

  cardsContainer.innerHTML = ""; // Clear previous cards

  arr.forEach(function (user) {

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(content);

    cardsContainer.appendChild(card);
  });

  // Optional: Show message if no users found
  if (arr.length === 0) {
    cardsContainer.innerHTML = "<h2 style='color:white'>No user found</h2>";
  }
}

/* ---------- INITIAL LOAD ---------- */
showUsers(users);

/* ---------- SEARCH FUNCTION ---------- */
inp.addEventListener("input", function () {

  const value = inp.value.toLowerCase();

  const filteredUsers = users.filter(function (user) {
    return user.name.toLowerCase().startsWith(value);
  });

  showUsers(filteredUsers);
});