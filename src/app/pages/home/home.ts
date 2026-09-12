import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { LanguageService } from '../../i18n/language';
import { formatPeriod } from '../../shared/format-period';
import { localized } from '../../shared/localized';
import { accentFor } from '../../shared/skill-accent';
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

  protected readonly skills = computed(() =>
    PROFILE.skills.map((group, index) => ({
      label: group.label[this.i18n.lang()],
      accent: accentFor(index),
      items: group.items,
    })),
  );

  protected readonly resume = computed(() =>
    PROFILE.resume.map((entry) => ({
      period: formatPeriod(entry.period, this.i18n.lang()),
      start: entry.period.start,
      title: entry.title[this.i18n.lang()],
      organisation: entry.organisation,
      description: entry.description?.[this.i18n.lang()],
      tasks: (entry.tasks ?? []).map((task) => task[this.i18n.lang()]),
    })),
  );

  protected readonly interests = computed(() =>
    PROFILE.interests.map((group, index) => ({
      label: group.label[this.i18n.lang()],
      accent: accentFor(PROFILE.skills.length + index),
      items: group.items.map((item) => localized(item, this.i18n.lang())),
    })),
  );

  protected readonly qualities = computed(() =>
    PROFILE.qualities.map((group, index) => ({
      label: localized(group.label, this.i18n.lang()),
      accent: accentFor(PROFILE.skills.length + PROFILE.interests.length + index),
      items: group.items.map((item) => localized(item, this.i18n.lang())),
    })),
  );

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
