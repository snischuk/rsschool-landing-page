const initMobileMenu = () => {
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".nav-mobile");
  const mobileLinks = document.querySelectorAll(".nav-mobile__link");

  const closeMenu = () => {
    mobileMenu.classList.remove("nav-mobile--open");
    burger.classList.remove("header__burger--active");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("js-lock");
  };

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle("nav-mobile--open");

    burger.classList.toggle("header__burger--active", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
    burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.classList.toggle("js-lock", isOpen);
  };

  burger.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
};

initMobileMenu();
