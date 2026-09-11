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

         Ich interessiere mich primär für Softwarequalität und Softwarearchitektur.`,
    en: `I am 22 years old and I am about to complete my Bachelor of Science in Business Informatics at the Nordakademie Elmshorn.

         I am primarily interested in Software Quality and Software Architecture.`,
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
      items: ['Git', 'Docker', 'IntelliJ IDEA', 'Visual Studio Code'],
    },
    {
      label: { de: 'Lerne gerade', en: 'Currently learning' },
      items: ['C/C++'],
    },
  ],

  links: {
    email: 'joel.ros@web.de',
    github: 'https://github.com/joelmakescode',
  },
};
