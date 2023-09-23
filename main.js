const toggleTheme = document.querySelector(".theme-toggle");
const body = document.querySelector("body");

const userPrefersDark =
  window?.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");

console.log(userPrefersDark);
console.log(storedTheme);

if (userPrefersDark) {
  body.classList.add("dark-mode");
}

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
