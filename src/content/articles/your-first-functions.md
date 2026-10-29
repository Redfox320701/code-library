---
title: Writing Your First Functions
description: How to package code into reusable functions in Python — parameters, return values, and why functions make everything easier.
topic: Python
level: Beginner
tags: [functions, fundamentals, reuse]
pubDate: 2026-10-22
minutes: 7
---

Functions are how you teach Python a new verb. Instead of repeating the same lines of code in a dozen places, you write the logic once, give it a name, and call it whenever you need it.

## The shape of a function

```python
def greet():
    print("Hello!")
```

The `def` keyword starts the definition. The name follows Python's usual rules — lowercase with underscores is the convention. The indented block underneath is the **body**: the code that runs when the function is called.

```python
greet()   # Hello!
```

Note that calling the function requires the parentheses. `greet` without `()` is just a reference to the function itself.

## Parameters: functions that take input

Most useful functions accept input values, called **parameters**:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Ada")     # Hello, Ada!
greet("Linus")   # Hello, Linus!
```

You can also give a parameter a default value, which makes it optional:

```python
def greet(name="friend"):
    print(f"Hello, {name}!")

greet()          # Hello, friend!
greet("Ada")     # Hello, Ada!
```

## Return values: functions that give output

`print` shows something on screen, but often you want the function to hand a value back to whoever called it. That's what `return` does:

```python
def area_of_room(width, height):
    return width * height

size = area_of_room(4, 5)
print(size)              # 20
```

The difference matters: `print` is for humans, `return` is for your program. A function that returns a value can be used anywhere a value is expected — inside calculations, conditions, other function calls:

```python
if area_of_room(4, 5) > 15:
    print("That's a big room.")
```

## A function can return nothing

If a function has no `return` statement (or `return` with nothing after it), it returns `None`:

```python
def log(message):
    print(f"[log] {message}")
    # no return — calling it gives back None
```

That's fine. Functions that perform an action rather than compute a value are common and useful.

## Why functions pay off

Consider a program that computes a total price in three places:

```python
total = 10.0 + 10.0 * 0.07
total2 = 25.0 + 25.0 * 0.07
total3 = 40.0 + 40.0 * 0.07
```

If the tax rate changes, you edit three lines and hope you miss none. With a function:

```python
def add_tax(price):
    return price + price * 0.07

total = add_tax(10.0)
```

One definition, one place to update, and the name `add_tax` explains what the code does without a comment.

## Practice

1. Write a function `celsius_to_fahrenheit(c)` that returns the converted temperature. (Formula: `c * 9 / 5 + 32`.)
2. Give the function's parameter a default of `0`.
3. Write a function `shout(text)` that returns the text in uppercase with an exclamation mark.
4. Call both and print the results.

When you can write functions comfortably, move on to [loops and lists](../lists-and-loops/) — together with functions, they cover most of everyday Python.
