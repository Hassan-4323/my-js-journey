document.getElementById("loadBtn").addEventListener("click", function () {
  const output = document.getElementById("output");
  output.innerHTML = "Loading...";

  fetch("https://randomuser.me/api/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const user = data.results[0];

      output.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Country:</strong> ${user.location.country}</p>
      `;
    })
    .catch(function (error) {
      output.innerHTML = "Error loading user data";
      console.log(error);
    });
});