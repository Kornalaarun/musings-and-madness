---
title: "RSS in 2026: What It Is and Why It Still Works"
description: "A short technical note on how RSS feeds work, how to subscribe to them, and how to generate one from a static site."
date: 2026-09-10
topics: ["web", "rss", "static-sites"]
placeholder: true
---

> **Note:** This is a placeholder article to demonstrate layout and code blocks. It will be replaced with real writing.

RSS (Really Simple Syndication) is a 25-year-old format that predates most of the modern web and outlasted most of the companies that once promoted it. Its staying power is a function of its simplicity: a feed is a plain XML file that lists the recent entries of a site, with enough metadata for a reader to display them.

## The format

An RSS 2.0 feed is structured like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Musings and Madness</title>
    <link>https://example.com</link>
    <description>Personal writing by Arun</description>

    <item>
      <title>On Noticing</title>
      <link>https://example.com/blog/on-noticing</link>
      <description>A short reflection on paying attention.</description>
      <pubDate>Mon, 01 Sep 2026 00:00:00 GMT</pubDate>
      <guid>https://example.com/blog/on-noticing</guid>
    </item>
  </channel>
</rss>
```

The `<guid>` element is the item's permanent identifier. Most readers use it to decide whether an item is new.

## Generating from Astro

The `@astrojs/rss` package makes feed generation straightforward. Create `src/pages/rss.xml.ts`:

```typescript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../site.config';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) =>
    !data.draft && !data.placeholder
  );

  posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
```

## Why keep using it

Algorithmic feeds optimise for engagement. RSS feeds deliver items in order, without ranking, without tracking, without editorial interference. If you publish something, subscribers see it. That constraint is, depending on your perspective, a limitation or the entire point.

For readers who want to follow specific writers rather than specific platforms, RSS remains the most reliable transport layer available.

---

## Footnote on Atom

Atom is an alternative feed format that addresses some of RSS 2.0's ambiguities. Both are widely supported by modern feed readers. The practical differences for most publishers are negligible.

---

*This is a sample technical note to demonstrate code blocks, syntax highlighting, and scrollable mobile code.*
