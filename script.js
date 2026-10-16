/**
 * Matěj Janoška – Osobní vizitka
 * JS: Theme toggle · Hamburger menu · Active nav · Scroll reveal
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. THEME TOGGLE ─────────────────────────────────── */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('mj-theme') || 'dark';
  root.setAttribute('data-theme', saved);

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('mj-theme', next);
  });

  /* ─── 2. HAMBURGER MENU ───────────────────────────────── */
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu    = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close menu when link clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  /* ─── 3. NAVBAR SCROLL SHADOW ─────────────────────────── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    highlightNav();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ─── 4. ACTIVE NAV LINK ──────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const y = window.pageYOffset + 120;
    sections.forEach(sec => {
      const top  = sec.offsetTop;
      const bot  = top + sec.offsetHeight;
      const id   = sec.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) link.classList.toggle('active', y >= top && y < bot);
    });
  }

  /* ─── 5. SCROLL REVEAL ────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => obs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }

});
