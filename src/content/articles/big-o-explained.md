---
title: Big-O Notation, Explained Plainly
description: What O(n), O(log n), and O(n²) actually mean for how fast your code runs — without the math lecture.
topic: Computer Science
level: Intermediate
tags: [algorithms, complexity, performance]
pubDate: 2026-10-28
minutes: 7
---

Big-O notation answers one question: **how does the work your code does grow as the input grows?** It's the vocabulary programmers use to compare algorithms and predict where a program will slow down. The notation looks mathematical, but the underlying idea is plain common sense.

## The question Big-O answers

Suppose you're looking for a name in an unsorted list of a thousand contacts. You check the first, then the second, and so on. In the worst case you check all thousand.

Now the list grows to a million. Your search does proportionally more work: a thousand times more. Doubling the list doubles the work. That behavior — work proportional to input size — is what we call **O(n)**, where n is the input size.

## The common complexity classes

Big-O names a handful of growth patterns. These five cover nearly everything you'll meet:

- **O(1) — constant.** The work doesn't depend on input size. Looking up an item in a Python dictionary or a JavaScript object by key takes the same time whether there are 10 items or 10 million.
- **O(log n) — logarithmic.** Each step cuts the remaining work in half. Binary search on a sorted list is the classic example: a million items take only about 20 steps.
- **O(n) — linear.** Touch every item once. Summing a list, finding a maximum, an unsorted search.
- **O(n log n) — linearithmic.** The cost of good sorting. Sorting a million numbers costs roughly a million times twenty.
- **O(n²) — quadratic.** Touch every pair of items. Nested loops over the same list — comparing every element to every other element — is the everyday example.

## Why O(n²) hurts

The classes look close on paper, but growth is brutal at the top:

| n | O(n) | O(n²) |
|---|------|-------|
| 100 | 100 | 10,000 |
| 1,000 | 1,000 | 1,000,000 |
| 10,000 | 10,000 | 100,000,000 |

An O(n²) algorithm on a small input feels instant. At ten thousand items it's doing a hundred million operations — and users start noticing. This is why experienced developers flinch at nested loops over the same collection.

## A concrete pair of examples

Finding whether a list contains a value, two ways:

```python
# O(n): check each item until found
def contains(items, target):
    for item in items:
        if item == target:
            return True
    return False

# O(1): set membership — a dictionary-like structure
def contains_fast(known_items, target):
    return target in known_items
```

The second requires the items to be stored in a set (built once, O(n)), after which each check is effectively instant. That's a common real trade: pay a little up front to make every future lookup cheap.

## What Big-O ignores (on purpose)

Big-O deliberately drops constants and small terms. An algorithm that does 3n + 50 operations is still O(n), because what matters is the shape of growth, not the exact count. Constant factors do matter in practice — they're just a separate conversation from scaling.

Big-O also usually describes the **worst case**. A linear search that finds its target first try did O(n) work in principle but O(1) in fact. Worst case is the safe thing to promise.

## Reading it in the wild

- A single loop over the input: usually **O(n)**.
- A loop inside a loop over the same input: usually **O(n²)**.
- Halving the search space each step: **O(log n)**.
- Sorting before doing something smarter: expect **O(n log n)**.
- Hash map lookups: **O(1)**.

That's 90% of practical Big-O literacy. When your program slows down on big inputs, check whether you've accidentally nested loops — it's the most common culprit by far.
