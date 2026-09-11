import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Lang } from '../../data/types';
import { LANGS, LanguageService } from '../../i18n/language';

@Component({
  selector: 'app-lang-toggle',
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangToggle {
  protected readonly i18n = inject(LanguageService);
  protected readonly langs = LANGS;

  protected label(lang: Lang): string {
    return lang.toUpperCase();
  }
}
