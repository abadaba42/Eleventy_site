---
title: blog_list
layout: "page.njk"
---

<h1>Blog:</h1>
{% for blog in collections.blogs %}
- [{{ blog.data.title }}]({{ blog.url }})
{%- endfor %}