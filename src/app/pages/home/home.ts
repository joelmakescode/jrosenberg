import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { LanguageService } from '../../i18n/language';
import { Seo } from '../../shared/seo';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly i18n = inject(LanguageService);
  private readonly seo = inject(Seo);

  protected readonly profile = PROFILE;
  protected readonly githubLabel = stripScheme(PROFILE.links.github);
  protected readonly linkedinLabel = PROFILE.links.linkedin && stripScheme(PROFILE.links.linkedin);
  protected readonly done = PROJECTS.filter((project) => project.status === 'done');
  protected readonly inProgress = PROJECTS.filter((project) => project.status === 'in-progress');
  protected readonly planned = PROJECTS.filter((project) => project.status === 'planned');

  protected readonly aboutParagraphs = computed(() =>
    PROFILE.about[this.i18n.lang()].split(/\n{2,}/),
  );

  constructor() {
    effect(() => {
      const lang = this.i18n.lang();
      this.seo.update({
        title: `${PROFILE.name} – ${PROFILE.role[lang]}`,
        description: PROFILE.about[lang].split(/\n{2,}/)[0],
        path: '/',
      });
    });
  }
}

function stripScheme(url: string): string {
  return url.replace(/^https?:\/\//, '');
}
