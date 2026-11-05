
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");

    menuToggle.setAttribute("aria-expanded", !isHidden);
    menuToggle.querySelector("span").textContent = isHidden ? "menu" : "close";
});

const searchToggle = document.getElementById("searchToggle");
const searchInput = document.getElementById("searchInput");

searchToggle.addEventListener("click", () => {
    searchInput.classList.toggle("hidden");

    if (!searchInput.classList.contains("hidden")) {
        searchInput.focus();
    } else {
        searchInput.value = "";
    }
});

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        newsletterMessage.textContent = "Thank you for subscribing!";
        newsletterForm.reset();
    });
}


const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("span");

function updateThemeIcon() {
    const isDark = document.documentElement.classList.contains("dark");
    themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon();
});
