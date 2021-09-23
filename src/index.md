---
title: home
layout: "base.njk"
---


<div class = "splash">
<img src="tree.jpg" alt="tree">
<div class = "slugline">
<h1>hi there! </h1>
This is a place for me to put some stuff.<br>
It's not much really but i suppose it's mine. Have a poke around!
</div>
</div>


<!-- Seperating line -->
<hr class = "line">

<div class = "wiki">
<section>
<h1>Writings:</h1>
{% for blog in collections.blogs %}
- [{{ blog.data.title }}]({{ blog.url }})
{%- endfor %}
</section>

<section>
<h1>Experiments:</h1>
{% for project in collections.projects %}
- [{{ project.data.title }}]({{ project.url }})
{%- endfor %}
</section>

<section>
<h1>Photo:</h1>
{% for photo in collections.photos %}
- [{{ photo.data.title }}]({{ photo.url }})
{%- endfor %}
</section>
</div>

