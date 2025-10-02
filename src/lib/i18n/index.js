import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import translations from './translations';

const defaultLocale = 'pt';

function createI18n() {
  const locale = writable(defaultLocale);
  
  if (browser) {
    const stored = localStorage.getItem('locale');
    if (stored && translations[stored]) {
      locale.set(stored);
    }
  }

  const t = derived(locale, ($locale) => (key) => {
    const keys = key.split('.');
    let value = translations[$locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  });

  return {
    locale,
    t,
    setLocale: (newLocale) => {
      if (translations[newLocale]) {
        locale.set(newLocale);
        if (browser) {
          localStorage.setItem('locale', newLocale);
        }
      }
    }
  };
}

export const { locale, t, setLocale } = createI18n();
