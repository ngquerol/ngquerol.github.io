const themeToggle = document.querySelector("#theme-toggle");

const setTheme = function(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.className = "icon-dark";
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.className = "icon-light";
  }
};

themeToggle.addEventListener("click", function() {
  const theme =
    localStorage.getItem("color-scheme") === "dark" ? "light" : "dark";

  localStorage.setItem("color-scheme", theme);
  setTheme(theme);
});

if (localStorage.getItem("color-scheme") === null) {
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;

  localStorage.setItem("color-scheme", prefersDark ? "dark" : "light");
}

setTheme(localStorage.getItem("color-scheme"));
