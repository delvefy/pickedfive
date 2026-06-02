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
  updated: "2026-06-02T12:00:00Z",
  articles: [
    {
      slug: "top-gaming-laptops-2026",
      title: "Top 5 Gaming Laptops of 2026",
      category: "Gaming Laptops",
      date: "2026-06-02",
      summary: "The most powerful portable gaming rigs of 2026, scored on raw performance first, then value, then reliability. The most expensive RTX 5090 flagships don't all finish where their spec sheets suggest.",
      url: "articles/top-gaming-laptops-2026.html",
      picks: [
        "Lenovo Legion Pro 7i Gen 10",
        "ASUS ROG Strix SCAR 18 (2026)",
        "HP Omen Max 16",
        "Alienware 18 Area-51",
        "Razer Blade 16 (2026)"
      ]
    },
    {
      slug: "top-cars-2026",
      title: "Top 5 Cars of 2026",
      category: "Cars",
      date: "2026-06-02",
      summary: "The most-decorated new cars of 2026, scored on performance first, then value, then reliability. The award winners don't all finish where you'd expect.",
      url: "articles/top-cars-2026.html",
      picks: [
        "VW Golf GTI / R",
        "Tesla Model Y",
        "Hyundai Palisade",
        "Dodge Charger",
        "Lucid Gravity"
      ]
    },
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
