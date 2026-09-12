import { Profile } from './types';

export const PROFILE: Profile = {
  name: 'Joel Rosenberg',

  role: {
    de: 'Softwareentwickler mit Fokus auf Backend und Web',
    en: 'Software developer focused on backend and web',
  },

  location: {
    de: 'Deutschland - Hamburg',
    en: 'Germany - Hamburg',
  },

  status: {
    de: 'Arbeitgeber: Lufthansa Industry Solutions GmbH & Co. KG',
    en: 'Employer: Lufthansa Industry Solutions GmbH & Co. KG',
  },

  about: {
    de: `Ich bin 22 Jahre alt und absolviere meinen Bachelor of Science in Wirtschaftsinformatik an der Nordakademie Elmshorn.

         Ich interessiere mich primär für Softwarequalität und Softwarearchitektur.

         Meine kommende Bachelorarbeit wird eine Eigenentwicklung zum Messen
         von Softwarequalität in internen Projekten der LHIND.`,
    en: `I am 22 years old and I am about to complete my Bachelor of Science in Business Informatics at the Nordakademie Elmshorn.

         I am primarily interested in Software Quality and Software Architecture.

         The topic of my upcoming bachelor exam is going to be about software quality measured
         in local projects from LHIND.`,
  },

  skills: [
    {
      label: { de: 'Sprachen', en: 'Languages' },
      items: ['Java', 'GoLang', 'TypeScript/JavaScript'],
    },
    {
      label: { de: 'Frameworks', en: 'Frameworks' },
      items: ['Spring Boot', 'Angular', 'React', 'JUnit', 'Hibernate', 'GormDB', 'Ogen'],
    },
    {
      label: { de: 'Werkzeuge', en: 'Tools' },
      items: ['Git', 'Docker', 'IntelliJ IDEA'],
    },
    {
      label: { de: 'Lerne gerade', en: 'Currently learning' },
      items: ['C/C++'],
    },
  ],

  resume: [
    {
      period: { start: '2023-09' },
      title: {
        de: 'Dualer Student Softwareentwicklung',
        en: 'Dual student, software development',
      },
      organisation: 'Lufthansa Industry Solutions GmbH & Co. KG',
      description: {
        de: 'Entwicklung von Web-Anwendungen in Kundenprojekten, u. a. für Volkswagen und Audi.',
        en: 'Building web applications in client projects, among them Volkswagen and Audi.',
      },
    },
    {
      period: { start: '2023-09' },
      title: {
        de: 'Bachelor of Science, Wirtschaftsinformatik',
        en: 'Bachelor of Science, Business Informatics',
      },
      organisation: 'Nordakademie Elmshorn',
    },
    {
      period: { start: '2020-03', end: '2023-09' },
      title: {
        de: 'Aushilfskraft (Mini-Job)',
        en: 'Casual employee',
      },
      organisation: 'Junge Die Bäckerei.',
      description: {
        de: 'Auf Minijob-Basis als Schichtleiter eingesetzt.',
        en: 'Worked part-time as a shift lead.',
      },
      tasks: [
        {
          de: 'Kassenabrechnung und Tagesabschluss',
          en: 'Counting the till and closing out the day',
        },
        {
          de: 'Öffnen und Schließen der Filiale',
          en: 'Opening and closing the shop',
        },
        {
          de: 'Einarbeitung neuer Aushilfen',
          en: 'Getting new part-time staff started',
        },
        {
          de: 'Warenpräsentation und Nachbestellung von Backwaren',
          en: 'Arranging the counter and reordering baked goods',
        },
        {
          de: 'Einhaltung der Hygiene- und Frischevorgaben',
          en: 'Keeping to hygiene and freshness requirements',
        },
      ],
    },
    {
      period: { start: '2014', end: '2023' },
      title: {
        de: 'Allgemeine Hochschulreife (Abitur)',
        en: 'Abitur (university entrance qualification)',
      },
      organisation: 'Stormarnschule Ahrensburg',
    },
  ],

  interests: [
    {
      label: { de: 'Hobbys', en: 'Hobbies' },
      items: [
        { de: 'Tischtennis', en: 'Table Tennis' },
        { de: 'Software Entwicklung', en: 'Software Development' },
        'Gaming',
      ],
    },
    {
      label: { de: 'Interessen', en: 'Interests' },
      items: [
        { de: 'Entwicklung auf dem Raspberry Pi', en: 'Development on a Raspberry Pi' },
        { de: 'Softwarearchitektur', en: 'Software architecture' },
        { de: 'Prozessmodellierung', en: 'Modelling of processes' },
      ],
    },
  ],

  links: {
    email: 'joel.ros@web.de',
    github: 'https://github.com/joelmakescode',
  },
};
