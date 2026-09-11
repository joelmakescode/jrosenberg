import { formatPeriod } from './format-period';

describe('formatPeriod', () => {
  it('formats a closed period in German', () => {
    expect(formatPeriod({ start: '2025-03', end: '2025-08' }, 'de')).toBe(
      'März 2025 – August 2025',
    );
  });

  it('formats a closed period in English', () => {
    expect(formatPeriod({ start: '2025-03', end: '2025-08' }, 'en')).toBe(
      'March 2025 – August 2025',
    );
  });

  it('marks an open period as ongoing', () => {
    expect(formatPeriod({ start: '2026-09' }, 'de')).toBe('September 2026 – heute');
    expect(formatPeriod({ start: '2026-09' }, 'en')).toBe('September 2026 – present');
  });

  it('collapses a single month', () => {
    expect(formatPeriod({ start: '2025-03', end: '2025-03' }, 'de')).toBe('März 2025');
  });
});

describe('formatPeriod for planned projects', () => {
  it('does not claim a planned project runs until today', () => {
    expect(formatPeriod({ start: '2026-11' }, 'de', 'planned')).toBe('geplant ab November 2026');
    expect(formatPeriod({ start: '2026-11' }, 'en', 'planned')).toBe('planned from November 2026');
  });

  it('still shows a closed period for a planned project that has an end', () => {
    expect(formatPeriod({ start: '2026-11', end: '2027-02' }, 'de', 'planned')).toBe(
      'November 2026 – Februar 2027',
    );
  });
});

describe('formatPeriod for projects in development', () => {
  it('runs up to today', () => {
    expect(formatPeriod({ start: '2026-09' }, 'de', 'in-progress')).toBe('September 2026 – heute');
    expect(formatPeriod({ start: '2026-09' }, 'en', 'in-progress')).toBe(
      'September 2026 – present',
    );
  });
});

describe('formatPeriod with a year only', () => {
  it('keeps the bare year when no month is given', () => {
    expect(formatPeriod({ start: '2027' }, 'de', 'planned')).toBe('geplant ab 2027');
    expect(formatPeriod({ start: '2027' }, 'en', 'planned')).toBe('planned from 2027');
  });

  it('combines a year with a month period', () => {
    expect(formatPeriod({ start: '2027', end: '2027-06' }, 'de')).toBe('2027 – Juni 2027');
  });
});
