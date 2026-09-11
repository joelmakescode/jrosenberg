import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/profile';
import { LanguageService } from '../../i18n/language';
import { Seo } from '../../shared/seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  protected readonly i18n = inject(LanguageService);
  private readonly seo = inject(Seo);

  constructor() {
    effect(() => {
      const texts = this.i18n.t().notFound;
      this.seo.update({
        title: `${texts.title} – ${PROFILE.name}`,
        description: texts.text,
        path: '/404',
      });
    });
  }
}
