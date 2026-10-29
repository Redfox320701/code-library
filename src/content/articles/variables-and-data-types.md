---
title: Variables and Data Types in Python
description: The very first building block of Python — how to store values in variables, and the core data types you'll use every day.
topic: Python
level: Beginner
tags: [variables, data types, fundamentals]
pubDate: 2026-10-20
minutes: 6
---

Every program you write will store and manipulate information. In Python, the way you do that is with **variables**, and the kind of information you store determines its **data type**. This article walks through both.

## What a variable is

A variable is a name that refers to a value. You create one by assignment — a name, an equals sign, and a value:

```python
score = 42
player_name = "Ada"
is_game_over = False
```

Nothing else to declare, no types to announce. Python figures out the type from the value you give it.

## The core data types

Python has a handful of types you'll use constantly. Here are the ones that matter on day one:

```python
# int — whole numbers
age = 25

# float — decimal numbers
price = 19.99

# str — text, in single or double quotes
greeting = "hello"

# bool — True or False
logged_in = True

# None — the absence of a value
result = None
```

You can check any value's type with the built-in `type()` function:

```python
print(type(age))        # <class 'int'>
print(type(price))      # <class 'float'>
```

## Strings deserve extra attention

Strings are the type you'll handle most. Python gives you convenient tools for them:

```python
name = "Ada"

# f-strings: embed values directly in text
print(f"Hello, {name}!")   # Hello, Ada!

# Common methods
print(name.upper())         # ADA
print("  spaced  ".strip()) # spaced
print("a,b,c".split(","))  # ['a', 'b', 'c']
```

The f-string (short for "formatted string") is the modern way to build text from variables. Put an `f` before the quotes, then wrap variable names in curly braces.

## Lists hold many values

A single variable can hold a whole collection. The most common one is the **list**:

```python
scores = [88, 92, 75]
scores.append(100)        # add to the end
print(scores[0])           # 88 — positions start at zero
print(len(scores))         # 4
```

## Converting between types

Sometimes data arrives as the wrong type — a number as text, for example. The built-in conversion functions fix that:

```python
text_number = "42"
number = int(text_number)      # 42
print(number + 8)              # 50

almost_pi = float("3.14")      # 3.14
answer = str(99)               # "99"
```

If the conversion doesn't make sense, Python tells you plainly:

```python
int("hello")   # ValueError: invalid literal for int() with base 10: 'hello'
```

## Rules for naming variables

Python variable names can contain letters, numbers, and underscores — but they can't start with a number, and they're case-sensitive. The community convention is `snake_case`:

```python
player_score = 10      # good
playerScore = 10       # works, but not the Python style
```

## Practice

Try this in a file called `practice.py`:

1. Create variables for your name, age, and favorite number.
2. Print a sentence using all three with an f-string.
3. Check the type of each variable with `type()`.
4. Convert your favorite number to a string, then back to an int.

Once this feels comfortable, you're ready for [functions](../your-first-functions/) — the next step up.
