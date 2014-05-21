Octosmashed
==========

Most people have come accross an [Octopress](http://octopress.org/) blog whilst browsing the web. It's a great framework for coders who want to blog, but it has limitations. For example, development and post writing can be tedious when you need to refresh the page, you need to know ruby to write plugins, and github pages limits the capabilities of Jekyll. Enter Octosmashed.

**[WIP Demo](http://sir-dunxalot.github.io/)**

Octosmashed is an Ember.js-based blogging framework built on Bruch. Features include:
- Pure JS stack (Node.js)
- Posts written in markdown (no database required)
- Live reloading and compiling
- Easy integration with npm modules and other JS plugins
- All [Twitter Bootstrap](http://getbootstrap.com/) CSS and JS capabilities
- Simple [CEM/BEM](http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/)-based styling for interchangable layouts and themes written in CSS or SCSS with [Compass](http://compass-style.org/)
- [Microformatting](http://microformats.org/wiki/microformats2#h-entry) and [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) integration (WIP)
- Easily deploy to Github pages

**Octosmashed works out-of-the-box but can be customized as much as you like. Writing your first post is as easy as starting the server!**

Prerequisites
------

- Node.js

Installation
------

1. [Install Node.js](http://nodejs.org/) if you don't have it installed already
2. Copy the repo with `git clone git@github.com:sir-dunxalot/ember-blog.git`
3. Install the packages with `npm install --save`
5. Start the app with `brunch watch -s` (the app will start at localhost:3333)

If you're planning on deploying on github pages, as this blog has been designed for, you'll want to create a repo with the name [your-user-name].github.io and run the following command:

```
git remote set-url origin git@github.com:your-user-name/your-user-name.github.io.git
```

Usage
------

### Blog Posts

Write your blog posts in markdown with YAML front matter for post info. Octosmashed will automatically compile your posts and the categories you have used into Ember fixtures available to the rest of your blog. An example post:

```markdown
---
title: More Ember stuff
description: This is a description of the ember stuff in this article
published: 2014-02-29
author: Some Dude
categories:
 - ember
 - design
---

This is the blog content. I am writing this blog post all about Ember and stuff. This is a lot more content for markdown parsing.

**Some bold blog content**

```

Save the post in the `posts` directory with any filename you like (filename does not affect the fixtures compiling). Everything outside the YAML Front Matter will be [parsed as markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis) and used for the content of the blog post.

Deployment & Github Pages
------

To compile your app for production (minimizing, optimizing, etc), run `brunch build --production`.

Deploying to [Github Pages](https://pages.github.com/) is super easy! Simply run `git push origin` or whatever command you use to push to the master branch of your blog repo. Octosmashed will run on Github Pages without any issues.

Documentation
------

- [Getting Started](//github.com/sir-dunxalot/ember-blog/blob/master/documentation/getting_started.md)
- [Writing Posts](//github.com/sir-dunxalot/ember-blog/blob/master/documentation/writing_posts.md)
- [Deployment](//github.com/sir-dunxalot/ember-blog/blob/master/documentation/deployment.md)
- [Vendors & Third-party Integration](//github.com/sir-dunxalot/ember-blog/blob/master/documentation/vendors.md)

**Customizing**

- [Layout](//github.com/sir-dunxalot/ember-blog/blob/master/documentation/layout.md)
- [Theme](//github.com/sir-dunxalot/ember-blog/blob/master/documentation/theme.md)


Todos & Known Issues
------

- WIP - lots of functionality needs to be added
- Thorough documentation
- application.html to hbs?
- Social meta tags with handlebars unbound options
- Ember root as html, maybe
- Investigate benefits (if any) of using Ember.ListView with fixtures
- Mobile testing
- Unit tests
- Test with large number of posts (300+)
- SEO capabilities (phantomJS)
- Parse CSS for unused rules
- Allow ember components to be used in template (Em.Handlebars.compile(post.body);
- Do special characters in title used in URL break the app?
- Quick classes for layout (e.g. image on left)

Built on [brunch-with-ember-reloaded](https://github.com/gcollazo/brunch-with-ember-reloaded).

Questions & Comments
------

Hit me up at walkerdu@bc.edu
