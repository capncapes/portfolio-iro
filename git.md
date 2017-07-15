---
layout: page
title: Git Reference
permalink: /git/
feature-img: "img/feature_img_6.png"
hide: true
---

#### `add`

Updates the index using the current content found in the working tree.

`git add -A`: Stages all files in the working tree.
`git add .`: Stages new and modified files in the working tree, excluding deleted files (ignores actions that remove files).
`git add -u`: Stages modified and deleted files in the working tree, excluding new files (ignores actions that add files).

#### `checkout`

Moves from the current branch to the specified branch.

`git checkout -b new-branch-name`: Creates a new branch named `new-branch-name` and makes it the current active branch.

`git checkout branch-name`: Moves onto `branch-name`.

`git checkout master`: Moves onto the `master` branch.

#### `commit`

Stores the current content of the index in a new commit. A message must be added describing the commit using the syntax `git commit -m "message"`, with the message string wrapped in quotes.

`git commit -m "message here"`: Identifies a commit message to follow (in quotes).

#### `merge`

Merges the specified branch with the current branch.

`git merge recent-branch`: Merges `recent-branch` with the current branch, like `master`.

#### `push`

Pushes changes in the specified branch to the specified remote repository.

`git push origin recent-branch`: Pushes the local version of `recent-branch` to `origin`.

`git push origin master`: Pushes the `master` branch to the `origin` remote repository and checks out the `master` branch.