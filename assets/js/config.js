// Zentrale Konfiguration der Landingpage.
// Nach dem öffentlichen Release nur hier die Store-Links eintragen –
// alle Store-Buttons und die Download-Weiterleitung (/download) übernehmen sie automatisch.
window.FITCONNECT_CONFIG = {
  // Basis-URL der Website, z. B. "https://konneqtd.com" (ohne Slash am Ende)
  siteUrl: "https://konneqtd.com",

  // App-Store-Link, z. B. "https://apps.apple.com/de/app/konneqtd/id0000000000"
  appStoreUrl: "",

  // Google-Play-Link, z. B. "https://play.google.com/store/apps/details?id=…"
  playStoreUrl: "",
};

// Ab hier nichts ändern.
// Liefert den Store-Link für "ios" oder "android" – aber nur, wenn er eine gültige
// https-Adresse des jeweiligen Stores ist. Leere Werte, Platzhalter oder Tippfehler
// ergeben "", damit nie auf eine fehlerhafte Adresse weitergeleitet oder verlinkt wird.
window.FITCONNECT_STORE_URL = function (platform) {
  var config = window.FITCONNECT_CONFIG || {};
  var stores = {
    ios: { url: config.appStoreUrl, host: "apps.apple.com" },
    android: { url: config.playStoreUrl, host: "play.google.com" },
  };
  var store = stores[platform];
  if (!store || typeof store.url !== "string") return "";
  try {
    var parsed = new URL(store.url.trim());
    return parsed.protocol === "https:" && parsed.hostname === store.host ? parsed.href : "";
  } catch (error) {
    return "";
  }
};
