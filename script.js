/**
 * ==========================================================================
 * PRO NEO-BRUTALISM PORTFOLIO INTERACTION CONTROLLER
 * Features:
 * - Theme Switcher (Neo-Light & High-Contrast Cyber-Dark)
 * - Dynamic Role Typing / Rotation
 * - Project Category Filtering
 * - 1-Click Email Clipboard Copy with Brutal Toast
 * - Live Dynamic Time Clock
 * - Interactive Project Modal Hydration
 * - Interactive Contact Dispatch Handler
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initRoleRotator();
  initProjectFiltering();
  initClipboardHandlers();
  initLiveClock();
  initProjectModal();
  initContactForm();
  initNavbarScrollEffect();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   1. Theme Switcher (Neo-Light / High-Contrast Dark)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const htmlRoot = document.documentElement;

  // Retrieve saved preference or default to light
  const savedTheme = localStorage.getItem('pradeep-portfolio-theme') || 'light';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(nextTheme);
      showToast(`Switched to ${nextTheme.toUpperCase()} mode!`);
    });
  }

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('pradeep-portfolio-theme', theme);

    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill text-warning';
      } else {
        themeIcon.className = 'bi bi-moon-stars-fill';
      }
    }
  }
}

/* --------------------------------------------------------------------------
   2. Dynamic Role Rotator
   -------------------------------------------------------------------------- */
function initRoleRotator() {
  const rotatorEl = document.getElementById('roleRotator');
  if (!rotatorEl) return;

  const roles = [
    'Frontend & Web Interfaces',
    'Python & Django Backends',
    'Full Stack Web Apps',
    'Modern JavaScript & React',
    'REST APIs & Databases'
  ];

  let currentIndex = 0;

  setInterval(() => {
    rotatorEl.style.opacity = '0';
    rotatorEl.style.transform = 'translateY(4px)';
    rotatorEl.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % roles.length;
      rotatorEl.textContent = roles[currentIndex];
      rotatorEl.style.opacity = '1';
      rotatorEl.style.transform = 'translateY(0)';
    }, 200);
  }, 2800);
}

/* --------------------------------------------------------------------------
   3. Project Category Filter
   -------------------------------------------------------------------------- */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.97)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 30);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Clipboard Copy Handlers & Toast
   -------------------------------------------------------------------------- */
function initClipboardHandlers() {
  const heroCopyBtn = document.getElementById('quickCopyEmailBtn');
  const contactCopyBtn = document.getElementById('copyContactEmailBtn');
  const emailToCopy = 'pradeepdas.dev@gmail.com';

  const copyAction = (btn, originalLabel) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailToCopy)
        .then(() => {
          showToast(`Copied ${emailToCopy} to clipboard`);
          if (originalLabel) {
            btn.innerHTML = `<i class="bi bi-check-lg text-success"></i> Copied!`;
            setTimeout(() => {
              btn.innerHTML = `<i class="bi bi-clipboard"></i> <span>${originalLabel}</span>`;
            }, 2200);
          }
        })
        .catch(() => fallbackCopy(emailToCopy));
    } else {
      fallbackCopy(emailToCopy);
    }
  };

  if (heroCopyBtn) {
    heroCopyBtn.addEventListener('click', () => copyAction(heroCopyBtn, 'Copy Email'));
  }

  if (contactCopyBtn) {
    contactCopyBtn.addEventListener('click', () => copyAction(contactCopyBtn, 'Copy'));
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`COPIED: ${text}`);
    } catch (err) {
      showToast('Please select and copy manually.');
    }
    document.body.removeChild(textArea);
  }
}

function showToast(message) {
  const toast = document.getElementById('brutalToast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   5. Dynamic Local Time Clock
   -------------------------------------------------------------------------- */
function initLiveClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    // Format to user's local timezone (IST representation)
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    };
    clockEl.textContent = new Intl.DateTimeFormat('en-US', options).format(now) + ' IST';
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* --------------------------------------------------------------------------
   6. Project Modal Hydration
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const modalEl = document.getElementById('projectDetailModal');
  if (!modalEl) return;

  const bsModal = new bootstrap.Modal(modalEl);
  const triggerBtns = document.querySelectorAll('.open-project-modal');

  const modalTitle = document.getElementById('modalProjectTitle');
  const modalDetailTitle = document.getElementById('modalDetailTitle');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalTech = document.getElementById('modalProjectTech');
  const modalImg = document.getElementById('modalProjectImg');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title') || 'Project Showcase';
      const desc = btn.getAttribute('data-desc') || '';
      const tech = btn.getAttribute('data-tech') || '';
      const img = btn.getAttribute('data-img') || '';

      if (modalTitle) modalTitle.textContent = title;
      if (modalDetailTitle) modalDetailTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalTech) modalTech.textContent = tech;
      if (modalImg && img) modalImg.src = img;

      bsModal.show();
    });
  });
}

/* --------------------------------------------------------------------------
   7. Contact Form Simulation & Feedback
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successAlert = document.getElementById('formSuccessAlert');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast('⚠️ Please fill in all required fields!');
      return;
    }

    // Professional button loading state
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>SENDING MESSAGE...</span> <div class="spinner-border spinner-border-sm ms-2" role="status"></div>`;

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        form.reset();
        if (successAlert) {
          successAlert.classList.remove('d-none');
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        showToast('✅ Message sent successfully! I will get back to you soon.');
      } else {
        showToast(data.message || '⚠️ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      showToast('⚠️ Network error. Please try again or email directly.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalContent;
    }
  });
}

/* --------------------------------------------------------------------------
   8. Navbar Scroll Styling
   -------------------------------------------------------------------------- */
function initNavbarScrollEffect() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   9. Mobile Navigation Drawer Controller
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggleBtn');
  const drawer = document.getElementById('mobileMenuDrawer');
  const icon = document.getElementById('mobileMenuIcon');
  if (!toggleBtn || !drawer) return;

  function toggleMenu(forceOpen) {
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !drawer.classList.contains('open');
    if (shouldOpen) {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (icon) {
        icon.className = 'bi bi-x-lg fs-5';
      }
    } else {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (icon) {
        icon.className = 'bi bi-list fs-5';
      }
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close drawer when any link inside it is tapped
  const navLinks = drawer.querySelectorAll('.mobile-nav-link, a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close when tapping outside the navbar
  document.addEventListener('click', (e) => {
    const navbar = document.getElementById('mainNavbar');
    if (navbar && !navbar.contains(e.target) && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  // Auto-close if screen resized to desktop (>= 992px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  }, { passive: true });
}

