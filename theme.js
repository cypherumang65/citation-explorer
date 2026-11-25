// Applies the saved light/dark choice before the page paints (a separate file, so the security policy needs no inline script).
(function () {
  try {
    var t = localStorage.getItem("ce2_theme");
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
