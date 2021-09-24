# Elevety_site

To remind you this is a website generated using eleventy and nunjuck templates.
See the following for more assistance:

> https://11ty.rocks/posts/create-your-first-basic-11ty-website/
>
> https://piccalil.li/course/learn-eleventy-from-scratch/
>
> https://lea-tortay.com/content/writings/github-pages-eleventy/


## Folder structure
---
- **public**: This is the output folder. The finished website will be placed here
- **src**: This is the amalgamation of content/assests, css & templates that will create the site
    - **_css_src**: contains all css
    - **_includes**: Nunjucks templates
    - **~folders~**: The last folders contain all the markdown/assests & 
    - **index.md**: Markdown content for the homepage
- **.eleventy.js**: Holds the eleventy config -> mostly just output folder & ignores
- ***.json**: More config stuff
---

## Commands_reminder

To run eleventy site generaor in a new environment, npm modules have to be installed:
```
npm init -y
npm install @11ty/eleventy
```

To "compile" and run a local host simply:
```
npm start
```

To push public to sub-branch:

```
git subtree push --prefix public origin gh-pages
```
