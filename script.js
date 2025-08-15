// script.js
// Theme (dark/light) with localStorage + prefers-color-scheme
(function initTheme(){
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const shouldDark = saved ? saved === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', shouldDark);
})();

// Toggle button
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
  const syncBtn = () => {
    const isDark = document.documentElement.classList.contains('dark');
    themeBtn.setAttribute('aria-pressed', String(isDark));
    themeBtn.textContent = isDark ? '🌞' : '🌙';
  };
  syncBtn();
  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    syncBtn();
  });
}

// Back to top
const toTop = document.getElementById('toTop');
if (toTop) {
  const onScroll = () => {
    if (window.scrollY > 500) toTop.hidden = false; else toTop.hidden = true;
  };
  window.addEventListener('scroll', onScroll);
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  onScroll();
}

// Contact form demo
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    if (msg) { msg.hidden = false; }
  });
}

// Footer year
const y = document.getElementById('year');
if (y) { y.textContent = new Date().getFullYear(); }
