---
title: Lists, Loops, and Iteration
description: How to store many values in lists and process them with for-loops — the workhorse pattern of everyday Python.
topic: Python
level: Beginner
tags: [lists, loops, iteration, fundamentals]
pubDate: 2026-10-24
minutes: 8
---

Almost every real program deals with collections of things: a cart of items, a list of users, a series of measurements. In Python the standard container is the **list**, and the standard tool for walking through it is the **for-loop**. Together they're the most-used pattern in day-to-day code.

## Lists in sixty seconds

```python
scores = [88, 92, 75, 61]
```

Each item has a position, or **index**, starting from zero:

```python
print(scores[0])   # 88
print(scores[3])   # 61
print(scores[-1])  # 61 — negative counts from the end
```

Lists can grow and shrink:

```python
scores.append(100)     # add to the end
top = scores.pop()     # remove and return the last item
print(len(scores))     # 4
```

## The for-loop

A for-loop repeats a block of code once per item:

```python
for score in scores:
    print(score)
```

Read it as: "for each item in the list, call it `score`, and run the indented block." The loop variable's name is your choice — `score`, `s`, or `banana` all work; pick something readable.

## The classic patterns

These four patterns cover most real code you'll write early on.

**Total** — accumulate a sum:

```python
total = 0
for score in scores:
    total = total + score
print(total / len(scores))   # average
```

**Filter** — keep only what matches a condition:

```python
passed = []
for score in scores:
    if score >= 70:
        passed.append(score)
print(passed)   # [88, 92, 75]
```

**Transform** — build a new list of computed values:

```python
labels = []
for score in scores:
    labels.append(f"score: {score}")
```

**Search** — stop at the first match:

```python
for score in scores:
    if score == 75:
        print("found it")
        break
```

## enumerate: position and value together

Often you need both the item and its position. `enumerate()` provides them:

```python
for position, score in enumerate(scores):
    print(f"{position + 1}. {score}")
```

## range: loops without a list

`range(n)` produces the numbers `0` through `n-1`, useful when you want to repeat something a fixed number of times:

```python
for i in range(3):
    print("tick", i)   # tick 0, tick 1, tick 2
```

## List comprehensions: the shortcut

Once the filter and transform patterns feel natural, Python offers a compact version. These two blocks are equivalent:

```python
# Long way
doubled = []
for score in scores:
    doubled.append(score * 2)

# Comprehension
doubled = [score * 2 for score in scores]

# Filter + transform in one line
passed_doubled = [s * 2 for s in scores if s >= 70]
```

Comprehensions aren't required knowledge — write the long version until the long version annoys you. Then switch, and your code will read like prose.

## Practice

1. Make a list of your five favorite numbers. Print each one doubled, using a loop.
2. Print only the numbers greater than 10.
3. Use `enumerate` to print a numbered list of the numbers.
4. Rewrite exercise 1 as a list comprehension.

With variables, functions, and loops in hand, you can already write small real programs. Next up: [how the web works](../how-the-web-works/) — the same ideas, in a new context.
