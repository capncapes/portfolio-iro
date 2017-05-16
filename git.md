---
layout: page
title: Git Reference
permalink: /git/
feature-img: "img/feature_image_6.png"
hide: true
---

#### `add`

Updates the index using the current content found in the working tree.

`git add -A`: Stages all files in the working tree.
`git add .`: Stages new and modified files in the working tree, excluding deleted files (ignores actions that remove files).
`git add -u`: Stages modified and deleted files in the working tree, excluding new files (ignores actions that add files).

#### `commit`

Stores the current content of the index in a new commit. A message must be added describing the commit using the syntax `git commit -m [message]`, with the message string wrapped in quotes.

`git commit -m`: Identifies a commit message to follow (in quotes).