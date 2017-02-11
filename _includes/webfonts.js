! function () {
  "use strict";

  var a = "{{ site.url }}/assets/css/fonts.css";

  function b(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
  }

  function c(a) {
    return window.localStorage && localStorage.font_css_cache && localStorage.font_css_cache_file === a
  }

  function d() {
    if (window.localStorage && window.XMLHttpRequest)
      if (c(a)) e(localStorage.font_css_cache);
    else {
      var d = new XMLHttpRequest;
      d.open("GET", a, !0), b(d, "load", function () {
        4 === d.readyState && (e(d.responseText), localStorage.font_css_cache = d.responseText, localStorage.font_css_cache_file = a)
      }), d.send()
    }
    else {
      var f = document.createElement("link");
      f.href = a, f.rel = "stylesheet", f.type = "text/css", document.getElementsByTagName("head")[0].appendChild(f), document.cookie = "font_css_cache"
    }
  }

  function e(a) {
    var b = document.createElement("style");
    b.innerHTML = a, document.getElementsByTagName("head")[0].appendChild(b)
  }

  window.localStorage && localStorage.font_css_cache || document.cookie.indexOf("font_css_cache") > -1 ? d() : b(window, "load", d)
}();
