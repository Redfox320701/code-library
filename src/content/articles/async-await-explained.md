---
title: Async/Await, Explained Plainly
description: Why JavaScript code sometimes needs to wait, and how async functions and await make waiting readable again.
topic: JavaScript
level: Intermediate
tags: [async, promises, javascript, concurrency]
pubDate: 2026-10-27
minutes: 8
---

JavaScript runs your code one line at a time — a single thread, no cutting in line. But real programs constantly do things that take time: fetch data from an API, read a file, wait for a user's click. `async` and `await` are the language's cleanest answer to that problem. To understand why they exist, it helps to see what came before.

## The problem: slow operations

Imagine fetching weather data:

```javascript
const response = fetch('https://api.example.com/weather');
// ...and the next line runs IMMEDIATELY, before the data arrives
```

`fetch` starts a network request and returns instantly — it can't pause your whole program while the internet takes its time. So JavaScript hands you a **Promise**: an object representing a value that will exist *later*.

## Promises: a placeholder for later

```javascript
fetch('https://api.example.com/weather')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

A Promise is a box that will eventually contain a value (or an error). You attach `.then()` callbacks to open the box when it's ready, and `.catch()` for when something goes wrong.

This works, but chains of `.then()` get hard to read — especially with loops and conditions mixed in. Code that "waits" ends up shaped differently from code that doesn't.

## async/await: promises that read like ordinary code

```javascript
async function loadWeather() {
  try {
    const response = await fetch('https://api.example.com/weather');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

Two new keywords, and the shape of the problem disappears:

- `async` marks a function as one that uses awaits. It always returns a Promise.
- `await` pauses *this function* — not the whole program — until the Promise settles, then hands you the value.

Lines read top to bottom, `try/catch` handles errors the way you already know, and loops work the way you'd expect. It's still Promises underneath; `await` is syntax that lets you write them like synchronous code.

## Waiting for several things at once

A common mistake: awaiting requests one after another when they could run side by side.

```javascript
// Sequential — slower: total time is the SUM of both requests
const a = await fetch('/api/first');
const b = await fetch('/api/second');

// Parallel — faster: both requests in flight at once
const [a, b] = await Promise.all([fetch('/api/first'), fetch('/api/second')]);
```

`Promise.all` starts every request immediately and resolves when all of them finish. Use it whenever your awaits don't depend on each other.

## async functions return Promises

One detail that trips people up: an async function always returns a Promise, even if you return a plain value.

```javascript
async function getAnswer() {
  return 42;
}

getAnswer().then((value) => console.log(value));  // 42
const value = await getAnswer();                  // also 42
```

So async functions compose: another function can `await` the result of yours.

## When not to await

`await` only works inside `async` functions (or at the top level of a module). And it isn't free — each `await` genuinely pauses that function until its Promise settles. If you don't need the result, don't wait for it; fire the request and move on.

## Practice

1. Write an async function `loadUser(id)` that fetches `https://jsonplaceholder.typicode.com/users/1` and returns the parsed JSON.
2. Wrap it in `try/catch` and log a friendly message on failure.
3. Use `Promise.all` to load users 1 and 2 at once, then print both names.

Async/await is the backbone of modern front-end code — every data-fetching app you'll build uses it daily.
