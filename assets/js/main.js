// Setzt die Store-Links aus config.js auf alle Buttons mit data-store="ios|android".
// Solange ein Link fehlt oder ungültig ist, bleibt der Button sichtbar, führt aber nirgendwohin.
(function () {
  var storeUrl = window.FITCONNECT_STORE_URL || function () { return ""; };

  document.querySelectorAll("[data-store]").forEach(function (link) {
    var url = storeUrl(link.getAttribute("data-store"));
    if (url) {
      link.href = url;
      link.removeAttribute("aria-disabled");
    } else {
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    }
  });
})();
