---
layout: default
title: Blog
---

<h2 class="page-title">Blog Posts</h2>
<ul class="posts">
  {% for post in site.posts %}
    <li><span class="post-date">{{ post.date | date: '%B %d, %Y' }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    <li class="excerpt">&#12317;{{ post.excerpt }}&#12318;</li>
  {% endfor %}
</ul>
