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
    sessionStorage.getItem("color-scheme") === "dark" ? "light" : "dark";

  sessionStorage.setItem("color-scheme", theme);
  setTheme(theme);
});

if (sessionStorage.getItem("color-scheme") === null) {
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;

  sessionStorage.setItem("color-scheme", prefersDark ? "dark" : "light");
}

setTheme(sessionStorage.getItem("color-scheme"));
