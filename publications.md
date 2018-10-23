---
layout: page
title: Publications
permalink: /publications/
---



{% assign firstAuth = 0 %}
{% assign firstAuthWorkshop = 0 %}
{% assign coAuth = 0 %}

{% for pub in site.data.publications%}
 {% if pub.pubType == "firstAuth" %}
  {% assign firstAuth = firstAuth | plus: 1 %}
 {% endif %}
{% if pub.pubType == "firstAuthWorkshop" %}
  {% assign firstAuthWorkshop = firstAuthWorkshop | plus: 1 %}
{% endif %}
{% if pub.pubType == "coAuth" %}
  {% assign coAuth = coAuth | plus: 1 %}
 {% endif %}

{% endfor %}


I currently have total of {{firstAuth | plus: firstAuthWorkshop | plus: coAuth}} publications and have an h-index of 10. An up-to-date publications list with citations is also available on my <a target="_blank" href="https://scholar.google.ca/citations?user=tfnXxxIAAAAJ&hl=en&oi=ao)">Google Scholar Profile</a>. I am the first author on {{firstAuth | plus: firstAuthWorkshop}} publications and I have co-authored {{coAuth}}. I also have 1 patent.


<hr>

### First author publications

&#9733; symbol indicates that both authors contributed equally to the work

<h5> Journal Publications</h5>
{% for pub in site.data.publications%}
 <!--<p style="width:80%">-->
 {% if pub.pubType == "firstAuth" %}
  <div class = "talk">
  <div class="row">
    <div class="col-sm-12 col-md-1 col-lg-1">
    <p style = "color:#000;font-weight:bold;">{{ pub.Year }}</p>
    <!--
    <span style = "color:#d3d3d3;font-weight:bold;">J{{firstAuth}}</span>
    {% assign firstAuth = firstAuth | minus: 1 %}
    -->
    </div>
    <div class="col-sm-12 col-md-11 col-lg-11">
        <em style="font-size:18px;">{{pub.Title}}<br></em>
          {{pub.Authors}} <br>
          <strong>{{pub.Publication}} </strong><br>

          {% capture doiVal %} <a target = "_blank" href = "{{pub.urlLink}}"> doi </a> {% endcapture %}

          {% if pub.ProjectPage != null %}
              {% capture projPage %}<a href= "{{site.baseurl}}/{{ pub.ProjectPage }}"> project page </a> {% endcapture%}
          {% else %}
                {% capture projPage %}  {% endcapture%}
          {% endif %}

           {% if pub.fileLink != null %}
              {% capture pubPage %}<a href= "{{site.baseurl}}/assets/files/papers/{{ pub.fileLink }}" target="_blank"> pdf </a> {% endcapture%}
          {% else %}
                {% capture pubPage %}  {% endcapture%}
          {% endif %}

           {% assign z = doiVal| append: pubPage | append: projPage  %}

          {{ z }}
       
    </div>

  </div>
  </div>

 {% endif %}
 <!--</p>-->
{% endfor %}

<br>
<h5> Workshop Publications</h5>
{% for pub in site.data.publications%}
 <!--<p style="width:80%">-->
 {% if pub.pubType == "firstAuthWorkshop" %}
  <div class = "talk">
  <div class="row">
    <div class="col-sm-12 col-md-1 col-lg-1">
    <p style = "color:#000;font-weight:bold;">{{ pub.Year }}</p>
    </div>
    <div class="col-sm-12 col-md-11 col-lg-11">
        
          <em style="font-size:18px;">{{pub.Title}}<br></em>
          {{pub.Authors}} <br>
          <strong>{{pub.Publication}} </strong><br>

          {% if pub.ProjectPage != null%}
            <a href= "{{pub.urlLink}}" target="_blank"> doi </a> <a href= "{{site.baseurl}}/assets/files/papers/{{ pub.fileLink }}" target="_blank"> pdf </a> <a href= "{{site.baseurl}}/{{ pub.ProjectPage }}" target="_blank"> project page </a> 
          {% else %}
            <a href= "{{pub.urlLink}}" target="_blank"> doi </a> <a href= "{{site.baseurl}}/assets/files/papers/{{ pub.fileLink }}" target="_blank"> pdf </a>
          {% endif %}
    </div>

  </div>
  </div>

 {% endif %}
 <!--</p>-->
{% endfor %}

<br><br>

### Co-authored publications
{% for pub in site.data.publications%}
 <!--<p style="width:80%">-->
 {% if pub.pubType == "coAuth" %}
<div class = "talk">
  <div class="row">
    <div class="col-sm-12 col-md-1 col-lg-1">
    <p style = "color:#000;font-weight:bold;">{{ pub.Year }}</p>
    </div>
    <div class="col-sm-12 col-md-11 col-lg-11">
        
          <em style="font-size:18px;">{{pub.Title}}<br></em>
          {{pub.Authors}} <br>
          <strong>{{pub.Publication}} </strong><br>
         <a href= "{{pub.urlLink}}" target="_blank"> doi </a>
       
    </div>

</div>
</div>

 {% endif %}
 <!--</p>-->
{% endfor %}

### Patents
{% for pub in site.data.publications%}
 <!--<p style="width:80%">-->
 {% if pub.pubType == "patent" %}
 <div class = "talk">
  <div class="row">
    <div class="col-sm-12 col-md-1 col-lg-1">
    <p style = "color:#000;font-weight:bold;">{{ pub.Year }}</p>
    </div>
    <div class="col-sm-12 col-md-11 col-lg-11">
        
          <em style="font-size:18px;">{{pub.Title}}<br></em>
          {{pub.Authors}} <br>
          <strong>{{pub.Publication}} </strong>
       
    </div>

</div>
</div>
 {% endif %}
 <!--</p>-->
{% endfor %}