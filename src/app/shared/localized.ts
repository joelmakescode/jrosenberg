import { Lang, Localized } from '../data/types';

export function localized(value: string | Localized, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}
