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
  updated: "2026-06-02T18:00:00Z",
  articles: [
    {
      slug: "top-smartwatches-2026",
      title: "Top 5 Smartwatches of 2026",
      category: "Smartwatches",
      date: "2026-06-02",
      summary: "Five smartwatches that earned their spot in 2026, scored on Performance, Value and Reliability — from the Apple Watch Ultra 3 to the bargain OnePlus Watch 3.",
      url: "articles/top-smartwatches-2026.html",
      picks: [
        "Apple Watch Ultra 3",
        "Garmin Fenix 8 Pro",
        "OnePlus Watch 3",
        "Galaxy Watch Ultra (2025)",
        "Pixel Watch 4"
      ]
    },
    {
      slug: "top-headphones-2026",
      title: "Top 5 Headphones of 2026",
      category: "Headphones",
      date: "2026-06-02",
      summary: "Sony's WH-1000XM6 reclaims the crown for 2026, with the B&W Px7 S3 and Bose QC Ultra 2 tied behind it, Sennheiser's HDB 630 winning on pure sound, and AirPods Max 2 bringing up the rear.",
      url: "articles/top-headphones-2026.html",
      picks: [
        "Sony WH-1000XM6",
        "Bowers & Wilkins Px7 S3",
        "Bose QC Ultra (2nd Gen)",
        "Sennheiser HDB 630",
        "Apple AirPods Max 2"
      ]
    },
    {
      slug: "top-tablets-2026",
      title: "Top 5 Tablets of 2026",
      category: "Tablets",
      date: "2026-06-02",
      summary: "From the M5 iPad Pro to the $499 Xiaomi Pad 7 Pro, the five tablets worth buying in 2026 — scored on Performance, Value and Reliability.",
      url: "articles/top-tablets-2026.html",
      picks: [
        "iPad Pro 13\" (M5, 2025)",
        "OnePlus Pad 3",
        "iPad Air 13\" (M3, 2025)",
        "Galaxy Tab S11 Ultra",
        "Xiaomi Pad 7 Pro"
      ]
    },
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
