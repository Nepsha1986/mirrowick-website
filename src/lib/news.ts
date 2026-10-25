import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

export type Post = CollectionEntry<'news'>;

/** `en/hello-world` → `hello-world`: the post's address inside its language. */
export const slugOf = (post: Post): string => post.id.split('/').slice(1).join('/');
export const langOf = (post: Post): string => post.id.split('/')[0];

/** One language's posts, newest first; drafts only in `astro dev`. */
export async function postsIn(lang: Locale): Promise<Post[]> {
  const all = await getCollection(
    'news',
    (p) => langOf(p) === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
