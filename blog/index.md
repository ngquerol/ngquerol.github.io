---
layout: default
title: Blog
---

<h2 class="page-title">Blog Posts</h2>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    <li class="excerpt">{{ post.excerpt }}</li>
  {% endfor %}
</ul>
