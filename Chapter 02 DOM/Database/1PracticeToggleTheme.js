const body = document.body;
const btn = document.querySelector("#toggleTheme");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function setDarkOrLight() {
    const isDark = mediaQuery.matches;
    body.classList.toggle("dark", isDark);
    body.classList.toggle("light", !isDark);
}

// Load saved theme or use system preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    setDarkOrLight();
}

// Toggle button
btn.addEventListener("click", function () {
    const isDark = body.classList.contains("dark");

    body.classList.toggle("dark", !isDark);
    body.classList.toggle("light", isDark);

    localStorage.setItem("theme", isDark ? "light" : "dark");
});

// Listen for system theme change (only if no manual theme saved)
mediaQuery.addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
        setDarkOrLight();
    }
});