import { localized } from '../shared/localized';
import { PROJECTS } from './projects';

describe('PROJECTS', () => {
  it('has unique slugs', () => {
    const slugs = PROJECTS.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('uses url-safe slugs', () => {
    for (const project of PROJECTS) {
      expect(project.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it('has a period in YYYY-MM or YYYY format', () => {
    for (const project of PROJECTS) {
      expect(project.period.start).toMatch(/^\d{4}(-\d{2})?$/);
      if (project.period.end) {
        expect(project.period.end).toMatch(/^\d{4}(-\d{2})?$/);
        expect(project.period.end >= project.period.start).toBe(true);
      }
    }
  });

  it('has text in both languages', () => {
    for (const project of PROJECTS) {
      for (const lang of ['de', 'en'] as const) {
        expect(project.summary[lang].length).toBeGreaterThan(0);
        expect(project.description[lang].length).toBeGreaterThan(0);
        // Titel sind entweder ein Eigenname oder in beiden Sprachen gefüllt.
        expect(localized(project.title, lang).length).toBeGreaterThan(0);
      }
    }
  });
});

describe('PROJECTS sections', () => {
  it('fills every section of the home page', () => {
    const byStatus = (status: string) => PROJECTS.filter((project) => project.status === status);
    expect(byStatus('done').length).toBeGreaterThan(0);
    expect(byStatus('in-progress').length).toBeGreaterThan(0);
    expect(byStatus('planned').length).toBeGreaterThan(0);
  });
});
