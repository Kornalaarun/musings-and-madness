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
}

export const SOCIALS: Social[] = [
  { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/arun-kornala/' },
  { label: 'X',         url: 'https://x.com/kornalaarun' },
  { label: 'GitHub',    url: 'https://github.com/Kornalaarun' },
  { label: 'Instagram', url: '' }, // AI stories + trivia channel, coming
  { label: 'YouTube',   url: '' }, // AI stories + trivia channel, coming
];

export const liveSocials = SOCIALS.filter((s) => s.url);

/** BASE_URL normalised to always end with '/' */
export const BASE: string = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function resolveUrl(path: string): string {
  const clean = path.replace(/^\//, '');
  return clean ? `${BASE}${clean}` : BASE;
}
