---
title: What Is a Large Language Model?
description: A plain-language tour of LLMs — what they are, how they predict text, and why they sometimes get things confidently wrong.
topic: AI & Machine Learning
level: Beginner
tags: [llm, ai, machine learning, fundamentals]
pubDate: 2026-10-29
minutes: 7
---

Large language models — the technology behind chatbots like ChatGPT, Claude, and Gemini — have become part of everyday computing. But what are they, actually? The honest answer is less mysterious than the hype suggests: they are very good at predicting what text should come next.

## The core idea: next-token prediction

An LLM reads text and continuously asks one question: given everything so far, what's the most likely next piece?

Text is broken into **tokens** — chunks that are usually a word or a piece of a word. ("Unbelievable" might be three tokens: `un`, `believ`, `able`.) The model's entire job is, given a sequence of tokens, to predict a probability distribution over what the next token should be. Pick one, append it, repeat.

That sounds too simple to explain conversation. But predicting text well turns out to require, as a side effect, an enormous amount of world knowledge: grammar, facts, coding patterns, reasoning habits. To guess the next word of a sentence about photosynthesis, you have to know something about photosynthesis.

## How they're trained

Training happens in two broad phases:

1. **Pre-training.** The model reads an enormous amount of text — books, articles, code — and adjusts billions of internal numbers (parameters) to get better at next-token prediction. Nobody labels the data; the text itself is the answer key. This is where general knowledge comes from.
2. **Fine-tuning and alignment.** The raw predictor is then shaped into a helpful assistant: trained on examples of good answers, and often tuned further from human feedback about which responses are better. This is why a modern chatbot answers questions instead of just continuing your sentence.

The result of step 1 is why models can write code; the result of step 2 is why they politely answer "how do I sort a list in Python" rather than predicting a news article continuation.

## Why they sometimes get things wrong

A model doesn't look things up in a database — it generates from statistical patterns. When it's on familiar ground, the pattern is strong and the output is reliable. When it's asked something rare or subtle, the most *statistically plausible* continuation may not be the *true* one. The model has no built-in alarm that distinguishes the two, so it can produce fluent, confident text that's simply wrong — the phenomenon called **hallucination**.

This has a practical lesson for anyone using LLMs to learn coding: treat generated code as a strong first draft, and run it. The compiler is the fact-checker.

## Context: the model's short-term memory

Models have a **context window** — a limit on how much text they can consider at once, measured in tokens. Everything the model "knows" about your conversation lives inside that window. When a conversation exceeds it, earlier material falls out of view. That's why a model in a very long chat can forget what you said at the beginning.

## What LLMs are genuinely good at

- Drafting and editing text, in natural or programming languages.
- Explaining a concept several ways until one clicks.
- Translating between programming languages.
- Boilerplate: the routine code that's tedious to type but follows known patterns.

And what they're weaker at: precise arithmetic over many digits, citing sources reliably, and anything requiring facts that weren't well represented in training data.

## Where this is going

The trend in recent models is toward *reasoning* styles: models that spend more compute thinking through a problem before answering, and toward larger context windows that make the "memory" limitation less painful. But the foundation remains the same machinery: predict, append, repeat — with enough scale that something that looks like understanding emerges.

If you want to feel the machinery directly, try an open model with [Ollama](https://ollama.com) — it runs small language models entirely on your own computer, no internet connection required.
