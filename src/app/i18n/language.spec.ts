import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language';

describe('LanguageService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
  });

  it('restores the stored language and does not overwrite it on start', () => {
    localStorage.setItem('lang', 'en');

    const service = TestBed.inject(LanguageService);
    TestBed.tick(); // lässt den persistierenden Effect laufen

    expect(service.lang()).toBe('en');
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('persists a language change and syncs the html lang attribute', () => {
    const service = TestBed.inject(LanguageService);

    service.setLang('en');
    TestBed.tick();

    expect(localStorage.getItem('lang')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
    expect(service.t().nav.home).toBe('Home');
  });

  it('falls back to the browser language when nothing is stored', () => {
    const service = TestBed.inject(LanguageService);
    expect(['de', 'en']).toContain(service.lang());
  });
});
