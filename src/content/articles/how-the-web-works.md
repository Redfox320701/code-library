---
title: "How the Web Works: A Beginner's Map"
description: URLs, servers, requests, and responses — the pieces that move a page from a faraway computer to your screen.
topic: Web Development
level: Beginner
tags: [http, urls, browsers, fundamentals]
pubDate: 2026-10-25
minutes: 6
---

You type an address, a page appears. Between those two moments, a small, well-organized sequence of events takes place. Understanding it is the foundation of all web development.

## The cast of characters

- **Your browser** (the client) — the program on your device that requests and displays pages.
- **The server** — a computer (usually far away) that stores websites and sends them out on request.
- **The network** — everything in between.

## What a URL is made of

A web address isn't magic; it has labeled parts:

```text
https://example.com/articles/how-the-web-works
```

- `https` — the **protocol**: the set of rules for the conversation.
- `example.com` — the **domain**: the human-readable name of the server.
- `/articles/how-the-web-works` — the **path**: which specific resource on that server you want.

## The request-response cycle

Everything on the web is a conversation with exactly two turns:

1. Your browser sends a **request** — "give me the page at this path."
2. The server sends back a **response** — usually the contents of that page.

That's the whole game. Every link you click, every image that loads, every form you submit is one of these cycles.

## What's in a response

When you request an ordinary page, the server returns (mostly) three kinds of files:

- **HTML** — the structure and text content.
- **CSS** — the appearance: colors, layout, spacing.
- **JavaScript** — the behavior: what happens when you click things.

The browser fetches the HTML first, reads it like an instruction sheet, then fetches the CSS and JavaScript it references. That's why a page's text sometimes appears before its styling "pops in."

## Status codes: the server's mood

Every response includes a numeric status. You'll encounter these constantly:

- `200` — success, here's your content.
- `404` — the path doesn't exist.
- `500` — the server broke trying to handle your request.

## Two kinds of pages: static and dynamic

- A **static** site is pre-built: the server has the finished HTML file and hands it over as-is. Simple, fast, cheap to host. This very site is static.
- A **dynamic** site builds the page on each request — assembling data, rendering templates, maybe querying a database. Social networks and stores work this way.

Both use the same request-response cycle. The difference is whether the page exists before you ask for it.

## Front-end and back-end

You'll hear web work divided into two halves:

- **Front-end** — everything the browser does: the HTML, CSS, and JavaScript that users see and interact with.
- **Back-end** — everything the server does: storing data, checking logins, deciding what a response contains.

The boundary between them is the request-response cycle itself.

## Practice

1. Open any website, right-click, and choose "View Page Source" — that's the raw HTML your browser received.
2. In your browser's developer tools (F12), open the "Network" tab and reload the page. Watch each file arrive: the document, the stylesheets, the scripts, the images. Each row is one request-response cycle.
3. Visit a deliberately missing URL on that site and confirm you get a 404.

Once the cycle feels solid, [async/await in JavaScript](../async-await-explained/) shows how front-end code manages requests that take time.
