# Elevety_site

To remind you this is a website generated using eleventy and nunjuck templates.
See the following for more assistance:

> https://11ty.rocks/posts/create-your-first-basic-11ty-website/
>
> https://piccalil.li/course/learn-eleventy-from-scratch/


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

To run eleventy site generator in a new environment, npm modules have to be installed:
```
npm init -y
npm install @11ty/eleventy
```

To "compile" and run a local host simply:
```
npm start
```

## Summary of nunjuck files
- **about**: format file for the about page
- **boilerplate**: This is the important one! This has the header, and basic html for all pages
- **Home**: This is the format file for the home page
- **page**: General format file for content


## Future implementations:

- **colour scheme/design**

- **markdown styling**:
    - link highlighting

- **photos**:
    - [ ] gallery https://www.youtube.com/watch?v=uKVVSwXdLr0
    - improve sizes