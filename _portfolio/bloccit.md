---
layout: post
title: Bloccit
feature-img: "img/feature_img_10.png"
thumbnail-path: "img/bloccit_3x4.png"
social-share:
github: "https://github.com/capncapes/bloccit"
short-description: Bloccit is a Ruby on Rails app similar to Reddit.
---

Bloccit is my first web app built with Ruby on Rails. It is built using Bootstrap 4.x and Postgres, along with many other dependencies.

### Requirements
For this project, my task was to build a web app similar to Reddit for users to share posts, comment on other users' posts, and be able to favorite posts. I ended up building more functionality than was originally required, including sponsored posts that are only managed by admin users, questions asked by users, and answers provided to questions, with the ability of the asker to mark their question as resolved. A logged in user can also view their own activity with the app on their account page, which includes their Gravatar image, a list of their posts, a list of their own comments, and a list of posts that they have favorited.

### Problem
In order to authenticate a user and encrypt their password, I used the Rails module BCrypt to encapsulate complex hashing algorithms. In order to use Ruby’s `has_secure_password` with BCrypt, I needed to install BCrypt, so I added it to my Gemfile and ran `bundle install`, only to receive the following error:

`Could not find gem 'bcrypt' in any of the gem sources listed in your Gemfile.`

After some Googling, I saw in a few places that a good solution is to delete the `Gemfile.lock` file and run bundle install to re-create `Gemfile.lock`, but I then started getting this error:

`Could not find gem 'pg' in any of the gem sources listed in your Gemfile.`

At this point, I couldn’t re-create my Gemfile.lock with `bundle install` because of this error.

### Solution
After some more fruitless Google searches, I stepped away from my project until the following day, when I decided to specify the version of `pg` in my Gemfile, rather than defaulting to the most recent version. Using [rubygems.org](https://rubygems.org/gems/pg/versions), I specified the most recent version of `pg`, ran `bundle install`, and watched Rails install all of my gems and re-create `Gemfile.lock`. Success!

### Conclusion
Bloccit works as it should and is pretty neat to use (though I may be biased). Even though adding extra functionality extended the project duration, I'm glad that I built extra features into Bloccit. This project was a lot of fun to build as I learn Rails 5, and I plan on building a lot more Rails apps in the future.

This project is hosted by <a href="https://ancient-chamber-34720.herokuapp.com/" target="_blank">Heroku</a>.