const cardsContainer = document.getElementById("cardsContainer");
const refreshBtn = document.getElementById("refreshBtn");

async function fetchUsers() {
  cardsContainer.innerHTML = `
    <div class="col-span-full text-center text-xl text-gray-300">
      Loading users...
    </div>
  `;

  try {
    const response = await fetch("https://randomuser.me/api/?results=3");
    const data = await response.json();

    cardsContainer.innerHTML = "";

    data.results.forEach((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      const email = user.email;

      const card = document.createElement("div");
      card.className = "bg-[#1b2a42] rounded-2xl p-6 flex items-center gap-5 shadow-lg";

      card.innerHTML = `
        <img
          src="${user.picture.large}"
          alt="${fullName}"
          class="w-20 h-20 rounded-full object-cover border-4 border-white/10"
        />

        <div>
          <h2 class="text-3xl font-bold text-white">${fullName}</h2>
          <p class="text-gray-300 text-xl mt-1">${email}</p>
          <span class="inline-block mt-4 bg-blue-700 text-white text-lg px-5 py-2 rounded-full">
            Active
          </span>
        </div>
      `;

      cardsContainer.appendChild(card);
    });
  } catch (error) {
    cardsContainer.innerHTML = `
      <div class="col-span-full text-center text-red-400 text-xl">
        Failed to load users.
      </div>
    `;
    console.error("Error fetching users:", error);
  }
}

refreshBtn.addEventListener("click", fetchUsers);

fetchUsers();