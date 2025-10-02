import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const getInitialTheme = () => {
  if (!browser) return 'light';
  
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const createThemeStore = () => {
  const { subscribe, set } = writable(getInitialTheme());

  return {
    subscribe,
    toggle: () => {
      if (!browser) return;
      
      const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(next);
      localStorage.setItem('theme', next);
      set(next);
    },
    init: () => {
      if (!browser) return;
      
      const theme = getInitialTheme();
      document.documentElement.classList.add(theme);
      set(theme);
    }
  };
};

export const theme = createThemeStore();
