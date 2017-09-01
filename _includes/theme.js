function disableDarkTheme() {
  [
    document.getElementById("dark-syntax"),
    document.getElementById("dark-style")
  ].forEach(function (a) {
    a && document.body.removeChild(a);
  })
}

function enableDarkTheme() {
  var a = document.createElement("link");
  a.id = "dark-style";
  a.rel = "stylesheet";
  a.href = "{{ site.url }}/assets/css/dark-style.css";
  a.media = "screen";

  var b = document.createElement("link");
  b.id = "dark-syntax";
  b.rel = "stylesheet";
  b.href = "{{ site.url }}/assets/css/dark-syntax.css";
  b.media = "screen";

  var c = document.createDocumentFragment();
  c.appendChild(a);
  c.appendChild(b);

  document.body.appendChild(c);
}

function applyTheme(isDarkTheme) {
  var toggleIcon = document.getElementById("theme-toggle");
  toggleIcon.classList.toggle("icon-dark", !isDarkTheme);
  toggleIcon.classList.toggle("icon-light", isDarkTheme);
  isDarkTheme ? enableDarkTheme() : disableDarkTheme();
}

var toggle = document.querySelector("#theme-toggle");
toggle.title = "Toggle Dark Theme";
toggle.style.cursor = "pointer";
toggle.addEventListener("click", function () {
  var applyDarkTheme = !JSON.parse(sessionStorage["dark-style"]);
  applyTheme(applyDarkTheme);
  sessionStorage["dark-style"] = applyDarkTheme;
});

document.addEventListener("DOMContentLoaded", function () {
  !sessionStorage["dark-style"] && (sessionStorage["dark-style"] = false)
  applyTheme(JSON.parse(sessionStorage["dark-style"]));
});
