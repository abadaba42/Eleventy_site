---
title: home
layout: "home.njk"
---

<div class = "wiki">
<section>
<h1>Writings:</h1>
{% for blog in collections.blogs %}
- [{{ blog.data.title }}]({{ blog.url }}/index.html)
{%- endfor %}
</section>

<section>
<h1>Experiments:</h1>
{% for project in collections.projects %}
- [{{ project.data.title }}]({{ project.url }}/index.html)
{%- endfor %}
</section>

<section>
<h1>Photo:</h1>
{% for photo in collections.photos %}
- [{{ photo.data.title }}]({{ photo.url }}/index.html)
{%- endfor %}
</section>
</div>

