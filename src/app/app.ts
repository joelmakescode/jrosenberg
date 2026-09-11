import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PROFILE } from './data/profile';
import { LanguageService } from './i18n/language';
import { LangToggle } from './components/lang-toggle/lang-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LangToggle],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
