import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Lang } from '../data/types';
import { DICTS } from './dictionary';

const STORAGE_KEY = 'lang';
const DEFAULT_LANG: Lang = 'de';

export const LANGS: readonly Lang[] = ['de', 'en'];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly lang = signal<Lang>(DEFAULT_LANG);
  readonly t = computed(() => DICTS[this.lang()]);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.lang.set(this.detectInitialLang());
    }

    effect(() => {
      const lang = this.lang();
      if (!isPlatformBrowser(this.platformId)) return;
      document.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {}
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  private detectInitialLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'de' || stored === 'en') return stored;
    } catch {}
    return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
  }
}
