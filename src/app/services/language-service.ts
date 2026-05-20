import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Lang } from '../interfaces/translation';
import { TRANSLATIONS } from '../data/translation.data';
import { DOCUMENT } from '@angular/common';
import { UiTranslation } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly doc = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.getSavedLang());
  readonly isArabic = computed(() => this.lang() === 'ar');
  readonly dir = computed(() => (this.isArabic() ? 'rtl' : 'ltr'));

  constructor() {
    effect(() => {
      const l = this.lang();
      this.doc.documentElement.lang = l;
      this.doc.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
      this.doc.body.classList.toggle('ltr', l === 'en');
      try {
        localStorage.setItem('lang', l);
      } catch {
        
      }
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }
  toggle(): void {
    this.lang.update((l) => (l === 'ar' ? 'en' : 'ar'));
  }

  // Translate a UI string key 
  tKey(key: keyof UiTranslation): string {
    return TRANSLATIONS[this.lang()][key];
  }

  // Translate a { ar, en } data object 
  tr(obj: { ar: string; en: string }): string {
    return obj[this.lang()];
  }

  private getSavedLang(): Lang {
    try {
      return localStorage.getItem('lang') === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  }
}
