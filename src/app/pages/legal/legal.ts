import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LEGAL } from '../../data/legal';
import { PROFILE } from '../../data/profile';
import { LanguageService } from '../../i18n/language';
import { Seo } from '../../shared/seo';

@Component({
  selector: 'app-legal',
  imports: [RouterLink],
  templateUrl: './legal.html',
  styleUrl: './legal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Legal {
  protected readonly i18n = inject(LanguageService);
  private readonly seo = inject(Seo);

  protected readonly legal = LEGAL;

  constructor() {
    effect(() => {
      const texts = this.i18n.t().legal;
      this.seo.update({
        title: `${texts.title} – ${PROFILE.name}`,
        description: `${texts.title} – ${PROFILE.name}`,
        path: '/impressum',
      });
    });
  }
}
