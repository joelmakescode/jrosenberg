import { PROFILE } from '../data/profile';
import { accentFor, sortTech } from './skill-accent';

describe('accentFor', () => {
  it('cycles through the six accent colours', () => {
    expect(accentFor(0)).toBe(1);
    expect(accentFor(5)).toBe(6);
    expect(accentFor(6)).toBe(1);
  });
});

describe('sortTech', () => {
  it('orders tags like the main skill list', () => {
    const groups = PROFILE.skills.map((group) => group.items);
    const [firstLanguage] = groups[0];
    const [firstFramework] = groups[1];

    const sorted = sortTech([firstFramework, firstLanguage]).map((tag) => tag.name);
    expect(sorted).toEqual([firstLanguage, firstFramework]);
  });

  it('keeps unlisted tags at the end in their original order', () => {
    const sorted = sortTech(['Jira', 'CSS', 'Java']).map((tag) => tag.name);
    expect(sorted).toEqual(['Java', 'Jira', 'CSS']);
  });

  it('leaves unlisted tags without an accent', () => {
    const [tag] = sortTech(['Jira']);
    expect(tag.accent).toBeNull();
  });

  it('gives tags of the same skill group the same accent', () => {
    const [java, golang] = sortTech(['Java', 'GoLang']);
    expect(java.accent).toBe(golang.accent);
    expect(java.accent).toBe(1);
  });

  it('treats a slash in a skill name as an alias', () => {
    expect(sortTech(['TypeScript'])[0].accent).toBe(1);
    expect(sortTech(['C++'])[0].accent).toBe(4);
  });

  it('matches regardless of capitalisation', () => {
    expect(sortTech(['angular'])[0].accent).toBe(2);
  });
});
