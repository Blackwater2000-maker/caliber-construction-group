// Caliber Construction Group — Main JS

(function () {
  // Theme toggle
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  function applyTheme() {
    root.setAttribute('data-theme', theme);
    if (btn) btn.textContent = theme === 'dark' ? '\u2600' : '\u25D0';
  }

  applyTheme();

  if (btn) {
    btn.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme();
    });
  }

  // Contact form
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      success.style.display = 'block';
      form.reset();
    });
  }

  // Scroll reveal
  if ('IntersectionObserver' in window) {
    const style = document.createElement('style');
    style.textContent = '.reveal{opacity:0;transform:translateY(20px);transition:opacity .5s ease,transform .5s ease}.reveal.visible{opacity:1;transform:none}';
    document.head.appendChild(style);
    const els = document.querySelectorAll('.service,.step,.stat,.project-card,.value-card,.contact-step');
    els.forEach(el => el.classList.add('reveal'));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  }
})();