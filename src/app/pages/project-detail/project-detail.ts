import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { LanguageService } from '../../i18n/language';
import { Seo } from '../../shared/seo';
import { formatPeriod } from '../../shared/format-period';
import { localized } from '../../shared/localized';
import { sortTech } from '../../shared/skill-accent';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {
  readonly slug = input.required<string>();

  protected readonly i18n = inject(LanguageService);
  private readonly seo = inject(Seo);

  protected readonly project = computed(() =>
    PROJECTS.find((project) => project.slug === this.slug()),
  );

  protected readonly title = computed(() => {
    const project = this.project();
    return project ? localized(project.title, this.i18n.lang()) : '';
  });

  protected readonly statusLabel = computed(() => {
    const project = this.project();
    if (!project) return '';
    const texts = this.i18n.t().project;
    switch (project.status) {
      case 'done':
        return texts.statusDone;
      case 'in-progress':
        return texts.statusInProgress;
      case 'planned':
        return texts.statusPlanned;
    }
  });

  protected readonly tech = computed(() => {
    const project = this.project();
    return project ? sortTech(project.tech) : [];
  });

  protected readonly period = computed(() => {
    const project = this.project();
    return project ? formatPeriod(project.period, this.i18n.lang(), project.status) : '';
  });

  protected readonly paragraphs = computed(() => {
    const project = this.project();
    return project ? project.description[this.i18n.lang()].split(/\n{2,}/) : [];
  });

  constructor() {
    effect(() => {
      const project = this.project();
      const lang = this.i18n.lang();
      if (!project) return;
      this.seo.update({
        title: `${localized(project.title, lang)} – ${PROFILE.name}`,
        description: project.summary[lang],
        path: `/projects/${project.slug}`,
      });
    });
  }
}
