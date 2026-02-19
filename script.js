/**
 * Navigation: smooth scroll to sections + active link highlighting on scroll.
 */
(function () {
  'use strict';

  var SECTION_IDS = ['hero', 'magician', 'genius', 'automator', 'ui-ai'];
  var navLinks = document.querySelectorAll('.nav-link[data-section]');
  var header   = document.getElementById('site-header');

  /* ── Smooth-scroll anchor links ──────────────────────────────────── */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Active section tracking ──────────────────────────────────────── */
  function setActiveNav() {
    var headerH = header ? header.offsetHeight : 72;
    var scrollY  = window.scrollY + headerH + 80;
    var activeId = SECTION_IDS[0];

    SECTION_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      if (scrollY >= el.offsetTop) activeId = id;
    });

    navLinks.forEach(function (link) {
      var section = link.getAttribute('data-section');
      var isActive = section === activeId;
      link.classList.toggle('text-white',   isActive);
      link.classList.toggle('bg-white/[0.06]', isActive);
      link.classList.toggle('text-dim',    !isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ── Throttled scroll listener ────────────────────────────────────── */
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        setActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  setActiveNav(); // run once on load
})();
