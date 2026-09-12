import { Project } from './types';

export const PROJECTS: readonly Project[] = [
  {
    slug: 'car-game',
    title: 'ParkMe',
    status: 'done',
    summary: {
      de: 'Mein erstes Schulprojekt im Informatik-Unterricht',
      en: 'My first school project in computer science class',
    },
    description: {
      de: `Ein simples Spiel, das den Nutzer herausfordert, ein Auto in eine Parklücke zu parken, ohne gegen ein Objekt zu stoßen.`,
      en: `A simple game that challenges the player to park a car in a parking space without bumping into anything.`,
    },
    period: { start: '2022-08', end: '2022-12' },
    tech: ['Greenfoot API', 'Java'],
    repoUrl: 'https://github.com/joelmakescode/ParkMe.git',
  },
  {
    slug: 'watch-out',
    title: 'Watch Out',
    status: 'done',
    summary: {
      de: 'Mein zweites Schulprojekt im Informatik-Unterricht',
      en: 'My second school project in computer science class',
    },
    description: {
      de: `Ein Werkzeug zum Erkennen eines Menschen. Beim Erkennen der Person ertönt ein lautes Signal und die Distanz der Person wird auf einem Display ausgegeben.`,
      en: `A device that detects a person nearby. As soon as someone is detected, a loud signal sounds and the distance to that person is shown on a display.`,
    },
    period: { start: '2023-01', end: '2023-03' },
    tech: ['Arduino', 'C', 'C++'],
    repoUrl: 'https://github.com/joelmakescode/Watch-Out-.git',
  },
  {
    slug: 'volkswagen-ag',
    title: { de: 'Volkswagen AG als Kunde (LHIND)', en: 'Volkswagen AG as a client (LHIND)' },
    status: 'done',
    summary: {
      de: 'Mein Einstiegsprojekt bei der LHIND',
      en: 'My entry project at LHIND',
    },
    description: {
      de: `Dieses Projekt dient dem Kunden Volkswagen AG.

Die primäre Funktionalität des Projektes ist es, als einer von vielen beteiligten Dienstleistern die Berechnung der Komponenten im individualisierten Fahrzeugkonfigurator zu übernehmen. Weitere Funktionen sind das Speichern der individuellen Autokonfiguration eines Kunden sowie das Herausgeben einer einmaligen Kennzahl zur Wiederverwendung der Konfiguration.

Dieses Projekt war mein erster Berührungspunkt mit der Welt der Web-Entwicklung. Ich durfte lernen, mit der Programmiersprache Go umzugehen, und wurde mit dem Framework React vertraut gemacht.`,
      en: `This project serves the client Volkswagen AG.

As one of many service providers involved, our main responsibility is calculating the components in the individual vehicle configurator. Further functions are storing a customer's individual car configuration and issuing a unique key that allows the configuration to be retrieved later.

This project was my first contact with the world of web development. I learned to work with the Go programming language and was introduced to the React framework.`,
    },
    period: { start: '2024-03', end: '2024-09' },
    tech: ['GoLang', 'GormDB', 'React', 'TypeScript', 'CSS', 'Jira'],
    repoUrl: '',
  },
  {
    slug: 'audi-ag',
    title: { de: 'Audi AG als Kunde (LHIND)', en: 'Audi AG as a client (LHIND)' },
    status: 'done',
    summary: {
      de: 'Eine Automatisierungsplattform zum Berechnen von Excel-Tabellen',
      en: 'A platform that automates calculations in Excel spreadsheets',
    },
    description: {
      de: `Dies war mein zweites Projekt bei der LHIND. Der Kunde Audi AG beauftragte uns, eine Web-Applikation zu entwickeln, die automatisiert Excel-Tabellen berechnet. Der Inhalt dieser Tabellen darf leider nicht offengelegt werden.

Gewonnene Erfahrungswerte waren das Arbeiten mit Java und Spring Boot als Framework. Zudem durfte ich eigenständig Features im Front- sowie Backend implementieren, ohne unter Aufsicht einer Betreuungsperson zu stehen.`,
      en: `This was my second project at LHIND. The client Audi AG commissioned us to build a web application that performs spreadsheet calculations automatically. The contents of those spreadsheets unfortunately cannot be disclosed.

Along the way I gained experience with Java and the Spring Boot framework. I also implemented features in both the front end and the back end on my own, without a supervisor looking over my shoulder.`,
    },
    period: { start: '2025-01', end: '2025-05' },
    tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'CSS', 'Jira'],
    repoUrl: '',
  },
  {
    slug: 'coritech',
    title: 'CoriTech/HorsePlatform (LHIND)',
    status: 'done',
    summary: {
      de: 'Konfigurator für Pferdezüchter und Kunden',
      en: 'Configurator for horse breeders and their customers',
    },
    description: {
      de: `Ein Konfigurator für Pferdezüchter und Kunden. Primäre Funktion ist das Vermitteln von Hengsten und Stuten, individuell an die Wünsche des Kunden angepasst.

In diesem Projekt durfte ich das erste Mal mein Potenzial und die in den Vorprojekten gewonnenen Erkenntnisse entfalten. Gelegentlich habe ich die Teamleitung und Koordination übernommen, während die eigentliche Teamleitung im Urlaub oder bei einer Fortbildung war.`,
      en: `A configurator for horse breeders and their customers. Its main purpose is matching stallions and mares to a customer's individual requirements.

This was the first project in which I could really apply my potential and everything I had learned in the previous projects. From time to time I took over team lead and coordination duties while the actual team lead was on holiday or attending training.`,
    },
    period: { start: '2026-01', end: '2026-07' },
    tech: ['GoLang', 'GormDB', 'Angular', 'TypeScript', 'CSS', 'Azure DevOps'],
    repoUrl: '',
  },
  {
    slug: 'ecoplatform',
    title: 'EcoPlatform',
    status: 'in-progress',
    summary: {
      de: 'Eine Webseite zum virtuellen Handeln mit fiktiven finanziellen Mitteln.',
      en: 'A website for trading virtually with fictional funds.',
    },
    description: {
      de: `Dieses Hobbyprojekt ist eine Eigenentwicklung in GoLang.

Der Datenfluss wird über das drei-Schichten-Modell abgebildet (Handler, Service, Repository). Im Vordergrund dieses Projektes steht das Behandeln der Antworten des Backends und der Reaktivität des Frontends.`,
      en: `This hobby project is my own development, written in Go.

The data flow follows the three-layer model (handler, service, repository). The focus of this project is handling the responses coming from the backend and the reactivity of the front end.`,
    },
    period: { start: '2026-03' },
    tech: ['GoLang', 'Angular', 'GormDB', 'Ogen'],
    repoUrl: 'https://github.com/joelmakescode/EcoPlatform.git',
  },
  {
    slug: 'the-splitting',
    title: 'The Splitting',
    status: 'in-progress',
    summary: {
      de: 'Ein Java Plugin für Minecraft.',
      en: 'A Java plugin for Minecraft.',
    },
    description: {
      de: `Dieses Hobbyprojekt ist eine Eigenentwicklung. Das Java Plugin dient als Modifikation des Spieles Minecraft und implementiert ein Spiel im RPG-Genre.

Daten der Spieler werden im JSON-Format vorerst gespeichert. Eine offizielle Schnittstelle ist noch geplant. Vorerst dient die SpigotMC-Schnittstelle als Kommunikationsweg zum Spiel.`,
      en: `This hobby project is my own development. The Java plugin modifies the game Minecraft and implements a game in the RPG genre.

Player data is stored in JSON format for the time being. An official interface is still planned; until then the SpigotMC interface serves as the channel of communication with the game.`,
    },
    period: { start: '2026-07' },
    tech: ['Java', 'SpigotMC', 'JUnit', 'Mockito'],
    repoUrl: 'https://github.com/joelmakescode/the-splitting.git',
  },
  {
    slug: 'diese-webseite',
    title: { de: 'Diese Webseite', en: 'This website' },
    status: 'in-progress',
    summary: {
      de: 'Statisches Portfolio in Angular, zweisprachig, ohne Backend.',
      en: 'Static portfolio built with Angular, bilingual, no backend.',
    },
    description: {
      de: `Ein bewusst schlichtes Portfolio: eine Startseite, eine Detailseite pro Projekt, keine Datenbank und kein Backend.

Die Inhalte liegen als typisierte TypeScript-Daten im Repository und werden beim Build zu statischem HTML vorgerendert. Dadurch lädt jede Seite sofort und geteilte Links bekommen eine korrekte Vorschau. Gehostet auf Cloudflare Pages, Deploy automatisch bei jedem Push.`,
      en: `A deliberately plain portfolio: one landing page, one detail page per project, no database and no backend.

Content lives as typed TypeScript data in the repository and is prerendered to static HTML at build time. Every page loads instantly and shared links get a proper preview. Hosted on Cloudflare Pages, deployed automatically on every push.`,
    },
    period: { start: '2026-09' },
    tech: ['Angular', 'TypeScript', 'CSS', 'Cloudflare Pages'],
    repoUrl: 'https://github.com/joelmakescode/jrosenberg',
  },
  {
    slug: 'plugin-interface',
    title: { de: 'Java Plugin Schnittstelle', en: 'Java plugin interface' },
    status: 'planned',
    summary: {
      de: 'Eine Schnittstelle zur Datenerfassung der Spieler meines Minecraft-Plugins.',
      en: 'An interface for collecting player data from my Minecraft plugin.',
    },
    description: {
      de: `Eine Schnittstelle zur Datenerfassung der Spieler meines Minecraft-Plugins.

Anforderungen: noch zu planen.`,
      en: `An interface for collecting data about the players of my Minecraft plugin.

Requirements: still to be defined.`,
    },
    period: { start: '2027' },
    tech: ['GoLang', 'GormDB', 'Ogen'],
  },
];
