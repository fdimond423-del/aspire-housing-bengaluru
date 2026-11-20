/**
 * ASPIRE HOUSING - Core Interactive Engine
 * Handles Logo Preloader, Sticky Navigation, Scroll Animations,
 * Dynamic Filters, EMI Calculators, and Site Visit Modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLogoIntro();
  initStickyHeader();
  initMobileMenu();
  initCounters();
  initEmiCalculator();
  initModalScheduler();
  initPropertyFilter();
  initScrollAnimations();
  initAOS();
  init3DCardTilt();
  initCardSpotlight();
  initInteractiveTabs();
});

/* ==========================================================================
   AOS (ANIMATE ON SCROLL) ENGINE WITH FAILSAFE REVEAL
   ========================================================================== */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      offset: 40,
      disableMutationObserver: false
    });
  } else {
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.visibility = 'visible';
    });
  }

  // Safety fallback after 600ms to guarantee zero blank elements
  setTimeout(() => {
    document.querySelectorAll('[data-aos]').forEach(el => {
      if (!el.classList.contains('aos-animate')) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
          el.classList.add('aos-animate');
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      }
    });
  }, 600);
}

/* ==========================================================================
   LUXURY RADIAL MOUSE SPOTLIGHT ENGINE
   ========================================================================== */
function initCardSpotlight() {
  const cards = document.querySelectorAll('.glass-card, .project-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   3D MOUSE PARALLAX TILT ENGINE
   ========================================================================== */
function init3DCardTilt() {
  const cards = document.querySelectorAll('.glass-card, .project-card, [data-tilt]');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   INTERACTIVE TABS
   ========================================================================== */
function initInteractiveTabs() {
  const tabButtons = document.querySelectorAll('.interactive-tab-btn');
  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab-target');
      const parent = btn.closest('.tabs-container') || document;
      
      parent.querySelectorAll('.interactive-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (targetId) {
        parent.querySelectorAll('.tab-content-panel').forEach(panel => {
          if (panel.id === targetId) {
            panel.style.display = 'block';
            panel.style.opacity = '0';
            setTimeout(() => { panel.style.opacity = '1'; }, 10);
          } else {
            panel.style.display = 'none';
          }
        });
      }
    });
  });
}

/* ==========================================================================
   1. ANIMATED LOGO INTRO (PRELOADER)
   Only shows the Aspire Housing animated logo before smoothly transitioning.
   ========================================================================== */
function initLogoIntro() {
  const preloader = document.getElementById('logoIntroPreloader');
  if (!preloader) return;

  const path = window.location.pathname;
  const isHome = path.endsWith('index.html') || path.endsWith('/') || path === '';
  const hasSeenIntro = sessionStorage.getItem('aspire_intro_seen');

  function dismissIntro(instant = false) {
    if (instant) {
      preloader.style.display = 'none';
      return;
    }
    preloader.classList.add('hide');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 800);
  }

  // If already seen on this session and user is on an inner page, skip instantly
  if (hasSeenIntro && !isHome) {
    dismissIntro(true);
    return;
  }

  // Pure Logo Animation - automatically reveals site smoothly without any button
  setTimeout(() => {
    dismissIntro(false);
    sessionStorage.setItem('aspire_intro_seen', 'true');
  }, 2300);
}

/* ==========================================================================
   2. STICKY HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileDrawerClose');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   4. STATS COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          const current = Math.floor(easeOutQuad * target);
          el.innerText = prefix + current.toLocaleString('en-IN') + suffix;
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.innerText = prefix + target.toLocaleString('en-IN') + suffix;
          }
        }

        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ==========================================================================
   5. INTERACTIVE EMI & REAL ESTATE CALCULATOR
   ========================================================================== */
function initEmiCalculator() {
  const amountSlider = document.getElementById('calcAmount');
  const downSlider = document.getElementById('calcDown');
  const tenureSlider = document.getElementById('calcTenure');
  const rateSlider = document.getElementById('calcRate');

  if (!amountSlider) return;

  const valAmount = document.getElementById('valAmount');
  const valDown = document.getElementById('valDown');
  const valTenure = document.getElementById('valTenure');
  const valRate = document.getElementById('valRate');
  const emiOutput = document.getElementById('calcEmiMonthly');
  const principalOutput = document.getElementById('calcPrincipalTotal');
  const interestOutput = document.getElementById('calcInterestTotal');

  function calculate() {
    const totalAmount = parseFloat(amountSlider.value);
    const downPayment = parseFloat(downSlider.value);
    const tenureYears = parseFloat(tenureSlider.value);
    const annualRate = parseFloat(rateSlider.value);

    // Sync labels
    if (valAmount) valAmount.innerText = '₹' + (totalAmount / 100000).toFixed(1) + ' Lakhs';
    if (valDown) valDown.innerText = '₹' + (downPayment / 100000).toFixed(1) + ' Lakhs';
    if (valTenure) valTenure.innerText = tenureYears + ' Years';
    if (valRate) valRate.innerText = annualRate + '%';

    const principal = Math.max(0, totalAmount - downPayment);
    const monthlyRate = (annualRate / 12) / 100;
    const months = tenureYears * 12;

    let monthlyEmi = 0;
    if (monthlyRate > 0 && principal > 0) {
      monthlyEmi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    } else if (principal > 0) {
      monthlyEmi = principal / months;
    }

    const totalPayment = monthlyEmi * months;
    const totalInterest = Math.max(0, totalPayment - principal);

    if (emiOutput) emiOutput.innerText = '₹' + Math.round(monthlyEmi).toLocaleString('en-IN') + '/mo';
    if (principalOutput) principalOutput.innerText = '₹' + (principal / 100000).toFixed(2) + ' L';
    if (interestOutput) interestOutput.innerText = '₹' + (totalInterest / 100000).toFixed(2) + ' L';
  }

  [amountSlider, downSlider, tenureSlider, rateSlider].forEach(slider => {
    if (slider) slider.addEventListener('input', calculate);
  });

  calculate();
}

/* ==========================================================================
   6. SITE VISIT SCHEDULER MODAL
   ========================================================================== */
function initModalScheduler() {
  const modal = document.getElementById('siteVisitModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const triggerBtns = document.querySelectorAll('[data-open-modal="visit"]');
  const form = document.getElementById('modalVisitForm');
  const projectInput = document.getElementById('modalProjectField');

  if (!modal) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const proj = btn.getAttribute('data-project-name');
      if (proj && projectInput) {
        projectInput.value = proj;
      }
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Booking Confirmed! ✓</span>`;
      submitBtn.style.background = '#10b981';

      setTimeout(() => {
        alert('Thank you! Your Site Visit request has been received. Our senior relationship manager from Aspire Housing will call you shortly.');
        closeModal();
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
      }, 700);
    });
  }
}

/* ==========================================================================
   7. PROPERTY LIVE FILTER (Projects Page / Home)
   ========================================================================== */
function initPropertyFilter() {
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const propertyCards = document.querySelectorAll('[data-category]');

  if (!filterButtons.length || !propertyCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      propertyCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.reveal-on-scroll');
  if (!fadeElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  fadeElements.forEach(el => observer.observe(el));
}
