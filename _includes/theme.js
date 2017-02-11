function disableDarkTheme() {
  [
    document.getElementById("dark-syntax"),
    document.getElementById("dark-style")
  ].forEach(function (a) {
    a && document.body.removeChild(a)
  })
}

function enableDarkTheme() {
  var a = document.createElement("link");
  a.id = "dark-style", a.rel = "stylesheet", a.href = "{{ site.url }}/assets/css/dark-style.css", a.media = "screen";

  var b = document.createElement("link");
  b.id = "dark-syntax", b.rel = "stylesheet", b.href = "{{ site.url }}/assets/css/dark-syntax.css", b.media = "screen";

  var c = document.createDocumentFragment();
  c.appendChild(a), c.appendChild(b), document.body.appendChild(c)
}

function toggleDarkTheme() {
  JSON.parse(sessionStorage["dark-style"]) ? enableDarkTheme() : disableDarkTheme()
}

var avatar = document.querySelector("#theme-toggle");
avatar.title = "Toggle Dark Theme",
avatar.style.cursor = "pointer",
avatar.addEventListener("click", function () {
  var a = JSON.parse(sessionStorage["dark-style"]);

  sessionStorage["dark-style"] = !a, toggleDarkTheme()
}), document.addEventListener("DOMContentLoaded", function () {
  sessionStorage["dark-style"] || (sessionStorage["dark-style"] = !1), toggleDarkTheme()
});
