---
title: blog_list
layout: "page.njk"
---


<div class = "wiki">
<section>
<h1><u>Writings:</u></h1>
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
<h1>Photos:</h1>
{% for photo in collections.photos %}
- [{{ photo.data.title }}]({{ photo.url }}/index.html)
{%- endfor %}
</section>

<section>
<h1>Knowledge:</h1>
{% for knowledge in collections.knowledge %}
- [{{ knowledge.data.title }}]({{ knowledge.url }}/index.html)
{%- endfor %}
</section>
</div>
