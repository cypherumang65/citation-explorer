// Applies the saved light/dark choice before the page paints (a separate file, so the security policy needs no inline script).
(function () {
  try {
    var t = localStorage.getItem("ce2_theme");
    if (t === "light" || t === "dark" || t === "sepia" || t === "contrast") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
// Anti-clickjacking: GitHub Pages can't send X-Frame-Options, so if another site embeds this page in a
// frame, hide it (so it can't be used to trick clicks) and try to open it as the top page instead.
(function () {
  try {
    if (window.top !== window.self) {
      document.documentElement.style.visibility = "hidden";
      try { window.top.location.replace(window.location.href); } catch (e) {}
    }
  } catch (e) { document.documentElement.style.visibility = "hidden"; }
})();
