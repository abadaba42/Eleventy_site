---
title: home
layout: "home.njk"
---

<div class = "wiki">
<details>
<summary> <h1 style="display:inline;">Writings:</h1> </summary>
<section>
{% for blog in collections.blogs %}
- [{{ blog.data.title }}]({{ blog.url }}/index.html)
{%- endfor %}
</section>
</details>

<details>
<summary><h1 style="display:inline;">Experiments:</h1> </summary>
<section>
{% for project in collections.projects %}
- [{{ project.data.title }}]({{ project.url }}/index.html)
{%- endfor %}
</section>
</details>


<details>
<summary> <h1 style="display:inline;">Photo:</h1> </summary>
<section>
{% for photo in collections.photos %}
- [{{ photo.data.title }}]({{ photo.url }}/index.html)
{%- endfor %}
</section>
</details>


</div>

