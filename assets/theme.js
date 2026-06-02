(function () {
  function getInitial() {
    try {
      var saved = localStorage.getItem('p5-theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch (_) {
      return 'dark';
    }
  }
  document.documentElement.setAttribute('data-theme', getInitial());

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('#themeToggle');
    if (!btn) return;
    var cur = document.documentElement.getAttribute('data-theme');
    var next = cur === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('p5-theme', next); } catch (_) {}
  });
})();
