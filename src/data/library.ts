export interface Book {
  title: string;
  author: string;
  status: 'reading' | 'read';
  note?: string;
}

export interface Paper {
  title: string;
  authors: string;
  url?: string;
  note?: string;
}

export interface Link {
  title: string;
  url: string;
  source?: string;
  note?: string;
}

export interface Quote {
  text: string;
  attribution?: string;
}

export interface Idea {
  idea: string;
  note?: string;
}

export const books: Book[] = [
  { title: 'Palace of Illusions', author: 'Chitra Banerjee Divakaruni', status: 'reading' },
  { title: 'The Beginning of Infinity', author: 'David Deutsch', status: 'reading' },
  { title: 'Domain-Driven Design', author: 'Eric Evans', status: 'reading' },
  { title: 'The Maniac', author: 'Benjamin Labatut', status: 'read' },
  { title: 'Liftoff', author: 'Eric Berger', status: 'read' },
];

export const papers: Paper[] = [
  // Add papers here: { title: '', authors: '', url: '', note: '' }
];

export const links: Link[] = [
  // Add links here: { title: '', url: '', source: '', note: '' }
];

export const quotes: Quote[] = [
  // Add quotes here: { text: '', attribution: '' }
];

export const ideas: Idea[] = [
  // Add ideas here: { idea: '', note: '' }
];
