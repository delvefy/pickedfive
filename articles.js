/* ============================================================
   Picked5 — article manifest (single source of truth, newest first)

   This is a .js file (not .json) on purpose. A <script src="articles.js">
   tag loads under the file:// protocol, so the home page works even when
   you just double-click index.html. A fetch() of a local .json file would
   be blocked by the browser's file:// security policy.

   To publish a new ranking: prepend an entry to the "articles" array and
   bump "updated". Keep it valid JavaScript (no trailing commas). See produce.txt.
   ============================================================ */
window.ARTICLES = {
  site: "Picked5",
  updated: "2026-06-01T00:00:00Z",
  articles: [
    {
      slug: "top-mobile-phones-2026",
      title: "Top 5 Mobile Phones of 2026",
      category: "Smartphones",
      date: "2026-06-01",
      summary: "The fastest phones you can buy this year, scored on raw performance first, then value, then reliability. The big names don't win by default.",
      url: "articles/top-mobile-phones-2026.html",
      picks: [
        "OnePlus 15",
        "RedMagic 11 Pro",
        "Galaxy S26 Ultra",
        "iPhone 17 Pro Max",
        "Pixel 10 Pro"
      ]
    }
  ]
};
