---
layout: page
title: Blog
group: navigation
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">
        <h1 class="post-title">{{ post.title }}</h1>
      </a>
      {% include post-info.html post=post %}
    </li>
  {% else %}
    <p class="posts-placeholder">There's nothing to see here.</p>
  {% endfor %}
</ul>
