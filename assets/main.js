// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.getAttribute('data-open') === 'true';
    navMenu.setAttribute('data-open', String(!open));
    navToggle.setAttribute('aria-expanded', String(!open));
  });
}

// Cookie dialog
const cookieDialog = document.getElementById('cookie-dialog');
const consentKey = 'cookieConsent';
if (cookieDialog && !localStorage.getItem(consentKey)) {
  cookieDialog.showModal();
  cookieDialog.addEventListener('click', e => {
    if (e.target.dataset.action === 'accept') {
      localStorage.setItem(consentKey, 'accepted');
      cookieDialog.close();
    }
    if (e.target.dataset.action === 'decline') {
      localStorage.setItem(consentKey, 'declined');
      cookieDialog.close();
    }
  });
}
