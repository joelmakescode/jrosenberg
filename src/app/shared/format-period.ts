import { Lang, Period, ProjectStatus } from '../data/types';

const PRESENT: Record<Lang, string> = { de: 'heute', en: 'present' };
const FROM: Record<Lang, string> = { de: 'geplant ab', en: 'planned from' };

export function formatPeriod(period: Period, lang: Lang, status: ProjectStatus = 'done'): string {
  const start = formatMonth(period.start, lang);

  if (!period.end) {
    return status === 'planned' ? `${FROM[lang]} ${start}` : `${start} – ${PRESENT[lang]}`;
  }

  const end = formatMonth(period.end, lang);
  return start === end ? start : `${start} – ${end}`;
}

function formatMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  if (!year || !month) return value;
  const date = new Date(Date.UTC(year, month - 1, 1));
  return new Intl.DateTimeFormat(lang, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
