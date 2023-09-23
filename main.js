const toggleTheme = document.querySelector(".theme-toggle")
const body = document.querySelector("body")

toggleTheme.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})
