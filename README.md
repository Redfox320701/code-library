# Code Library

A free, CommonLit-style library of educational coding articles. Built with
[Astro](https://astro.build), hosted on GitHub Pages, and editable through
[Pages CMS](https://pagescms.org) — no servers, no database.

**Live site:** https://redfox320701.github.io/code-library/

## How the pieces fit

- Articles are Markdown files in `src/content/articles/`.
- Each article's frontmatter carries `title`, `description`, `topic`, `level`,
  `tags`, `pubDate`, and `minutes` (read time).
- Pushing to `main` triggers the GitHub Actions workflow in
  `.github/workflows/deploy.yml`, which rebuilds the site and publishes it.
- `.pages.yml` configures Pages CMS so articles can be written and published
  from a browser at <https://app.pagescms.org> (sign in with GitHub).

## Writing a new article

### From the browser (easiest)

1. Go to <https://app.pagescms.org> and sign in with GitHub.
2. Open this repository, then the **Articles** collection.
3. Click new entry, fill in the fields, write the body, and save.
4. The site rebuilds automatically; the article appears within a couple of
   minutes.

### From the command line

```bash
# create src/content/articles/my-article.md with frontmatter, then:
git add src/content/articles/my-article.md
git commit -m "Add article: <title>"
git push
```

Frontmatter template:

```markdown
---
title: Your Article Title
description: One or two sentences summarizing the article.
topic: Python            # Python | Web Development | JavaScript | AI & Machine Learning | Tools & Workflow | Computer Science
level: Beginner          # Beginner | Intermediate | Advanced
tags: [fundamentals]
pubDate: 2026-11-01
minutes: 6
---

Your article in Markdown. Code blocks get syntax highlighting automatically.
```

## Local development

```bash
npm install
npm run dev       # dev server at http://localhost:4321/code-library/
npm run build     # static output in dist/
```

## Resource check

Run `scripts/status.sh` for a quick snapshot of disk, RAM, and the size of
this project — useful in a Codespace or CI environment to confirm the build
stays lightweight.
