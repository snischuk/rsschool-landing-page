function initTheme() {
  const savedTheme = localStorage.getItem('coffee-house-theme');

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  document.documentElement.dataset.theme = savedTheme || systemTheme;
}

initTheme();