import en from './en';
import fr from './fr';
import type { Translation } from './types';

const translations: Record<string, Translation> = { en, fr };

export type Lang = 'en' | 'fr';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'fr') return 'fr';
  return 'en';
}

export function useTranslations(lang: Lang): Translation {
  return translations[lang];
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  const path = url.pathname;

  if (currentLang === 'en' && targetLang === 'fr') {
    return '/fr' + path;
  }
  if (currentLang === 'fr' && targetLang === 'en') {
    return path.replace(/^\/fr/, '') || '/';
  }
  return path;
}
