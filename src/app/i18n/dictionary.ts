import { Lang } from '../data/types';

const DE = {
  nav: {
    skipToContent: 'Zum Inhalt springen',
    language: 'Sprache',
    home: 'Startseite',
    backHome: 'Zurück zur Startseite',
  },
  home: {
    about: 'Über mich',
    skills: 'Fähigkeiten',
    resume: 'Lebenslauf',
    interests: 'Hobbys & Interessen',
    projects: 'Projekte',
    projectsIntro: 'Abgeschlossene Arbeiten.',
    inProgress: 'In Entwicklung',
    inProgressIntro: 'Woran ich gerade arbeite.',
    planned: 'Geplant',
    plannedIntro: 'Was als Nächstes ansteht.',
    contact: 'Kontakt',
    email: 'E-Mail',
    empty: 'Hier entsteht gerade etwas.',
  },
  project: {
    back: 'Zurück zur Übersicht',
    period: 'Zeitraum',
    tech: 'Technologien',
    repository: 'Repository ansehen',
    demo: 'Live ansehen',
    noRepo: 'Kein öffentliches Repository.',
    statusDone: 'Abgeschlossen',
    statusInProgress: 'In Entwicklung',
    statusPlanned: 'Geplant',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Diese Seite gibt es nicht (mehr). Vielleicht hilft die Startseite weiter.',
  },
  legal: {
    title: 'Impressum',
    providerHeading: 'Angaben gemäß § 5 DDG',
    contactHeading: 'Kontakt',
    phoneLabel: 'Telefon',
    responsibleHeading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
    addressAsAbove: 'Anschrift wie oben',
    liabilityHeading: 'Haftung für Inhalte und Links',
    liabilityText:
      'Die Inhalte dieser Seite habe ich mit Sorgfalt erstellt. Für ihre Richtigkeit, ' +
      'Vollständigkeit und Aktualität kann ich jedoch keine Gewähr übernehmen. Für die Inhalte ' +
      'verlinkter externer Seiten sind ausschließlich deren Betreiber verantwortlich; zum ' +
      'Zeitpunkt der Verlinkung waren dort keine Rechtsverstöße erkennbar.',
    copyrightHeading: 'Urheberrecht',
    copyrightText:
      'Die auf dieser Seite veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. ' +
      'Eine Vervielfältigung oder Verwendung außerhalb der Grenzen des Urheberrechts bedarf ' +
      'meiner vorherigen Zustimmung.',
    privacyHeading: 'Datenschutz',
    privacyText:
      'Diese Seite setzt keine Cookies, bindet keine externen Schriftarten oder Skripte ein und ' +
      'verwendet keine Analyse-Werkzeuge. Beim Aufruf verarbeitet der Hoster Cloudflare technisch ' +
      'notwendige Zugriffsdaten wie die IP-Adresse, um die Seite ausliefern zu können. Schreibst ' +
      'du mir eine E-Mail, verwende ich deine Angaben ausschließlich zur Beantwortung deiner Anfrage.',
  },
  footer: {
    sourceCode: 'Quellcode dieser Seite',
    imprint: 'Impressum',
  },
};

export type Dict = typeof DE;

const EN: Dict = {
  nav: {
    skipToContent: 'Skip to content',
    language: 'Language',
    home: 'Home',
    backHome: 'Back to home',
  },
  home: {
    about: 'About',
    skills: 'Skills',
    resume: 'CV',
    interests: 'Hobbies & interests',
    projects: 'Projects',
    projectsIntro: 'Finished work.',
    inProgress: 'In development',
    inProgressIntro: 'What I am working on right now.',
    planned: 'Planned',
    plannedIntro: 'What is coming next.',
    contact: 'Contact',
    email: 'Email',
    empty: 'Something is taking shape here.',
  },
  project: {
    back: 'Back to overview',
    period: 'Period',
    tech: 'Technologies',
    repository: 'View repository',
    demo: 'View live',
    noRepo: 'No public repository.',
    statusDone: 'Completed',
    statusInProgress: 'In development',
    statusPlanned: 'Planned',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist (any more). The home page might help.',
  },
  legal: {
    title: 'Legal notice',
    providerHeading: 'Information pursuant to § 5 DDG',
    contactHeading: 'Contact',
    phoneLabel: 'Phone',
    responsibleHeading: 'Responsible for the content pursuant to § 18 (2) MStV',
    addressAsAbove: 'address as above',
    liabilityHeading: 'Liability for content and links',
    liabilityText:
      'The content of this site was created with care. I cannot, however, guarantee that it is ' +
      'accurate, complete or up to date. The operators of linked external sites are solely ' +
      'responsible for their content; no legal violations were apparent at the time of linking.',
    copyrightHeading: 'Copyright',
    copyrightText:
      'The content published on this site is subject to German copyright law. Any reproduction ' +
      'or use beyond the limits of copyright law requires my prior consent.',
    privacyHeading: 'Privacy',
    privacyText:
      'This site sets no cookies, loads no external fonts or scripts and uses no analytics ' +
      'tools. When you open it, the host Cloudflare processes technically necessary access data ' +
      'such as your IP address in order to deliver the page. If you send me an email, I use your ' +
      'details solely to answer your enquiry.',
  },
  footer: {
    sourceCode: 'Source code of this site',
    imprint: 'Legal notice',
  },
};

export const DICTS: Record<Lang, Dict> = { de: DE, en: EN };
