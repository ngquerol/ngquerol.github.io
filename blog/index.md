---
layout: page
title: Blog
group: navigation
---

<ul class="posts">
  {% for post in site.posts %}
    <li>{% include post-info.html post=site.post %}</li>
  {% else %}
    <p>There's nothing to see here.</p>
  {% endfor %}
</ul>
