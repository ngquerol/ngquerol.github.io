---
layout: page
title: Posts
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span class="post-date">
        <time>{{ post.date | date: '%B %d, %Y' }}</time>
      </span>
      <span class="post-tags">{{ post.tags | join: ', ' }}</span>
      <a href="{{ post.url }}">
        <h2 class="post-title">
            {{ post.title }}
        </h2>
      </a>
      <p class="post-excerpt">
        {{ post.excerpt | remove: '<p>' | remove: '</p>' }}
      </p>
    </li>
  {% else %}
    <p>There's nothing to see here.</p>
  {% endfor %}
</ul>
