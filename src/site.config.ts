export const SITE = {
  title: 'Musings and Madness',
  description:
    'Personal writing by Arun - technical articles, personal musings, book distillations, and essays.',
  author: 'Arun',
  url: 'https://kornalaarun.github.io/musings-and-madness',
  futureUrl: 'https://musingsandmadness.me',
} as const;

/**
 * Where to find me elsewhere. Entries with an empty url are not rendered,
 * so planned channels can sit here until they go live.
 */
export interface Social {
  label: string;
  url: string;
  /** Which half of the site this channel extends. */
  half: 'musings' | 'madness' | 'both';
  note: string;
}

export const SOCIALS: Social[] = [
  { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/arun-kornala/', half: 'both',    note: 'the day job' },
  { label: 'X',         url: 'https://x.com/kornalaarun', half: 'musings', note: 'thinking out loud' },
  { label: 'GitHub',    url: 'https://github.com/Kornalaarun', half: 'madness', note: 'the code behind the madness' },
  { label: 'Instagram', url: '', half: 'madness', note: 'AI stories + trivia (coming)' },
  { label: 'YouTube',   url: '', half: 'madness', note: 'AI stories + trivia (coming)' },
];

export const liveSocials = SOCIALS.filter((s) => s.url);

/** BASE_URL normalised to always end with '/' */
export const BASE: string = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function resolveUrl(path: string): string {
  const clean = path.replace(/^\//, '');
  return clean ? `${BASE}${clean}` : BASE;
}
