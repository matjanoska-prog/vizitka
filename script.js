/**
 * Matěj Janoška – Osobní portfolio & digitální vizitka
 * JS: Tmavý/světlý režim · Hamburger menu · Aktivní odkazy · Scroll reveal · Filtrování projektů
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. PŘEPÍNAČ TMÁVÉHO / SVĚTLÉHO REŽIMU ──────────────── */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('mj-theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', nextTheme);
      localStorage.setItem('mj-theme', nextTheme);
    });
  }

  /* ─── 2. MOBILNÍ HAMBURGER MENU ──────────────────────────── */
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu    = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Zavření menu po kliknutí na libovolný odkaz v menu
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  /* ─── 3. STÍN A ZMENŠENÍ NAVBARU PŘI SCROLLU ─────────────── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    highlightNav();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ─── 4. DYNAMICKÉ ZVÝRAZNĚNÍ AKTIVNÍHO ODKAZU V NAVIGACI ─── */
  const sections = document.querySelectorAll('main section[id]');

  function highlightNav() {
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link) {
        const isActive = scrollPosition >= top && scrollPosition < top + height;
        link.classList.toggle('active', isActive);
      }
    });
  }

  /* ─── 5. ANIMOVANÉ ZOBRAZENÍ PRVKŮ (SCROLL REVEAL) ────────── */
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }

  /* ─── 6. INTERAKTIVNÍ FILTROVÁNÍ PROJEKTŮ ─────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Nastavení aktivního stavu tlačítka filtru
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (filterValue === 'all' || category === filterValue) {
            card.classList.remove('is-hidden');
            // Znovu aktivujeme animaci, pokud byla skryta
            card.classList.add('active');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });
  }

});
