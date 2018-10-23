---
layout: page
title: Archived News
permalink: /newsArchive/
---
**All the news items from most recent to oldest**

<p class="subject-header"> News </p>
 {% for post in site.posts %}
   {% capture category %}{{post.categories}}{% endcapture %}
   {% if category == "news" %}
   <div class="post-list-item">
   <p>
     {{ post.date | date: "%-d %b %Y" }} : <a class="post-list-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    </p>
    </div>
  {% endif %}
{% endfor %}
