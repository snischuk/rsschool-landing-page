const initThemeSwitcher = () => {
  const root = document.documentElement;
  const themeInputs = document.querySelectorAll('input[name="theme"]');

  themeInputs.forEach((input) => {
    input.checked = input.value === root.dataset.theme;

    input.addEventListener('change', () => {
      const theme = input.value;

      root.dataset.theme = theme;
      localStorage.setItem('coffee-house-theme', theme);
    });
  });
};

initThemeSwitcher();