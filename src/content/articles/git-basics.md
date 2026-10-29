---
title: "Git Basics: Your First Repository"
description: init, add, commit, and log — the four commands that make up 95% of everyday Git, and how to think about them.
topic: Tools & Workflow
level: Beginner
tags: [git, version control, github]
pubDate: 2026-10-26
minutes: 8
---

Git is the version-control system nearly all software runs on, and it has a reputation for being confusing. The reputation is earned, but unfair: the confusion lives in the fancy parts. Everyday Git is four commands. Learn what they do to your files and the rest is optional.

## The mental model

Git stores **snapshots** of your project folder. A snapshot is called a **commit**. Each commit records exactly what every file looked like at that moment, who made it, when, and a short message describing why. Commits link to the commit before them, forming a history you can walk back through.

That's it. Everything else — branches, merges, remotes — is machinery for making and sharing snapshots.

## The four everyday commands

**`git init`** — turn the current folder into a repository (start tracking history):

```bash
git init
```

**`git add`** — choose which changes go into the next snapshot:

```bash
git add index.html       # one file
git add .                # everything in the folder
```

**`git commit`** — take the snapshot:

```bash
git commit -m "Add navigation bar to homepage"
```

**`git log`** — look back through history:

```bash
git log --oneline    # one line per commit, newest first
```

A full working loop takes ten seconds: edit files, `git add .`, `git commit -m "describe the change"`. The commit message matters — future-you is the audience. Write what changed and why, in plain words.

## The two-step dance: why add and commit are separate

Beginners often ask why saving is two commands. `git add` fills a **staging area** — a draft of the next snapshot. You can add three files, run a quick test, then commit them as one logical change. It lets a commit mean "one coherent thing happened" rather than "everything I touched lately."

For quick work, `git commit -am "message"` stages-and-commits every already-tracked file in one step.

## Undoing things — carefully

These commands fix mistakes, but they are not all equally safe. Know the difference:

- `git restore --staged <file>` — the gentle one. It only removes a file from the next commit's staging area; your changes stay on disk untouched.
- `git commit --amend` — replaces your most recent commit with a corrected one. Fine if you haven't pushed yet; **avoid it once the commit is on GitHub**, because rewriting shared history confuses everyone else working with the repository.
- `git restore <file>` — the dangerous one. It throws away your uncommitted changes permanently and restores the last committed version. There is no undo. Double-check with `git status` before using it.

A safe habit: when unsure, use `git stash` to set changes aside temporarily instead of discarding them — `git stash pop` brings them back.

## Connecting to GitHub

A repository on your machine is fully functional alone. Hosting it on GitHub (or similar) adds backup, sharing, and collaboration:

```bash
git remote add origin https://github.com/your-name/your-repo.git
git push -u origin main    # upload history, set the default
```

After that, everyday sharing is just:

```bash
git push      # send new commits up
git pull      # fetch commits from others
```

## The file you should always add: .gitignore

Some files don't belong in history — passwords, bulky folders, machine-specific junk. A `.gitignore` file lists them by pattern:

```text
.env
__pycache__/
node_modules/
*.log
```

Git skips anything matching those patterns. Create this file *before* your first commit; it's much easier than scrubbing secrets out of history afterward.

## Practice

1. Make a folder, run `git init` inside it.
2. Create a file, `git add` it, and commit with a real message.
3. Edit the file, commit again. Run `git log --oneline` and find both snapshots.
4. Change the file, then use `git restore` to throw the change away.
5. Create a `.gitignore`, commit it, and confirm a matching file is ignored.

That's the everyday 95%. Branches and merges can wait until you have a reason to need them — and when you do, the snapshot model you just learned makes them far easier to understand.
