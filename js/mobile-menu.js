const initMobileMenu = () => {
  const burger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile__link');

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle('nav-mobile--open');

    burger.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('js-lock', isOpen);
  };

  burger.addEventListener('click', toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('nav-mobile--open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('js-lock');
    });
  });
};

initMobileMenu();