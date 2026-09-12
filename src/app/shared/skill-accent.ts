import { PROFILE } from '../data/profile';

const ACCENT_COUNT = 6;

export interface TechTag {
  name: string;
  accent: number | null;
}

export function accentFor(index: number): number {
  return (index % ACCENT_COUNT) + 1;
}

interface SkillMatch {
  accent: number;
  order: number;
}

const SKILL_INDEX = buildSkillIndex();

function buildSkillIndex(): Map<string, SkillMatch> {
  const index = new Map<string, SkillMatch>();
  let order = 0;

  PROFILE.skills.forEach((group, groupIndex) => {
    for (const item of group.items) {
      for (const alias of item.split('/')) {
        const key = normalize(alias);
        if (key && !index.has(key)) {
          index.set(key, { accent: accentFor(groupIndex), order });
        }
      }
      order += 1;
    }
  });

  return index;
}

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function sortTech(tech: readonly string[]): TechTag[] {
  return tech
    .map((name, position) => ({ name, position, match: SKILL_INDEX.get(normalize(name)) }))
    .sort((a, b) => {
      const left = a.match?.order ?? Number.MAX_SAFE_INTEGER;
      const right = b.match?.order ?? Number.MAX_SAFE_INTEGER;
      return left === right ? a.position - b.position : left - right;
    })
    .map(({ name, match }) => ({ name, accent: match?.accent ?? null }));
}
