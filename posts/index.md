---
layout: page
title: Posts
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <span class="post-info faded">
        <span class="post-date">
          <time>{{ post.date | date: '%B %d, %Y' }}</time>
        </span>
        &mdash;
        <span class="post-tags">
          {% for tag in post.tags %}
            <a href="/tag/{{tag}}">#{{tag}}</a>
            {% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </span>
      </span>
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
