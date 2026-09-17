export const SITE = {
  title: 'Musings and Madness',
  description:
    'Personal writing by Arun - technical articles, personal musings, book distillations, and essays.',
  author: 'Arun',
  url: 'https://kornalaarun.github.io/musings-and-madness',
  futureUrl: 'https://musingsandmadness.me',
} as const;

/** BASE_URL normalised to always end with '/' */
export const BASE: string = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function resolveUrl(path: string): string {
  const clean = path.replace(/^\//, '');
  return clean ? `${BASE}${clean}` : BASE;
}
