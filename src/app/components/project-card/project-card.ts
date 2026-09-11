import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/types';
import { LanguageService } from '../../i18n/language';
import { formatPeriod } from '../../shared/format-period';
import { localized } from '../../shared/localized';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();

  protected readonly i18n = inject(LanguageService);
  protected readonly title = computed(() => localized(this.project().title, this.i18n.lang()));
  protected readonly period = computed(() =>
    formatPeriod(this.project().period, this.i18n.lang(), this.project().status),
  );
}
