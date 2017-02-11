---
layout: page
title: Blog Posts
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <h3 class="post-title">
        <small class="post-date">
          <time>{{ post.date | date: '%B %d, %Y' }}</time>
        </small>
        <a href="{{ post.url }}">
          {{ post.title }}
        </a>
      </h3>
      <p class="post-excerpt">
        {{ post.excerpt | remove: '<p>' | remove: '</p>' }}
      </p>
    </li>
  {% endfor %}
</ul>
