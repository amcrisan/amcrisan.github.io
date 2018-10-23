---
layout: page
title: Talks
permalink: /talks/
---
**This is a list of talks that I have given, their associated slides, and (if there is one) associated video recording**


{% for talk in site.data.talks%}
<!--{% capture talkString %}[{{ talk.date | date: "%Y-%b-%d"}} ] *{{ talk.title }}* : {{ talk.venue }}  ({{ talk.location }}){% endcapture %}-->
 
 <!-- IF THERE ARE SLIDES TO SHARE -->
  {% capture slideVal %}{{talk.slides}}{% endcapture %}
  {% if slideVal == ''%}
      {% capture slideString %}  {% endcapture%}
  {% else %}
        {% capture slideString %}<a href="{{site.baseurl}}/assets/files/slides/{{talk.slides}}">slides</a>{% endcapture%}
  {% endif %}

 <!-- IF THERE IS A VIDEO TO SHARE -->
  {% capture videoVal %}{{talk.video}}{% endcapture %}
  {% if videoVal == ''%}
      {% capture videoString %}  {% endcapture%}
  {% else %}
        {% capture videoString %}<a href="{{talk.video}}">recording</a>{% endcapture%}
  {% endif %}


   {% assign z = slideString | append: videoString %}


<div class = "talk">
<div class="row">
    <div class="col-sm-12 col-md-1 col-lg-1">
    <p style = "color:#000;font-weight:bold;">{{ talk.date | date: "%Y"}}</p>
    <p style = "color:#587272;font-size:0.85em;margin-top:-20px;">{{ talk.date | date: "%b"}}</p>
    </div>
    <div class="col-sm-12 col-md-11 col-lg-11">
        <div class = "talkTitle">
            {{ talk.title }}
        </div>
        <div class="talkResource">
            <strong>{{ talk.venue }}</strong> : {{ talk.location }}

            <p> {{ z }}</p>
        </div>
    </div>

</div>
</div>

{% endfor %}

