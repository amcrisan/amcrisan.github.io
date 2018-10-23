---
layout: page
title: Projects
permalink: /projects/
---


{% assign sorted = site.projects | sort: 'date' %}
{% assign projects = sorted  | reverse %}
    
{% for project in projects%}
<div class = "col-12">
        <div class= "projectWide">
           
            <div class="row">
                <div class="col-sm-12 col-md-3">
                    <a href ="{{site.baseurl}}/{{project.permalink}}" ><img src="{{ site.baseurl }}/assets/files/img/{{ project.teaser}}"></a>
                </div>

                <div class="col-sm-12 col-md-9">
                    <a style = "color:black;text-decoration:none;" href = "{{site.baseurl}}/{{project.permalink}}"><strong style="font-size:22px;">{{ project.longTitle }}</strong></a>
                    <p style="font-size:15px;padding-right:2px;line-height:1.25em;"> {{ project.summary }}</p>
                    <ul class="inlineList" style="margin-left:-40px;">
                        <li class = "info"><a target = "_blank" href="{{ project.doi }}">paper </a>  </li>
                        <li class = "info"><a target = "_blank" href="{{ project.code }}">code</a> </li>
                        <li class = "moreInfo"><a target href="{{site.baseurl}}/{{project.permalink}}"> more info ...</a></li>
                    </ul>
                  

                </div>
               
            </div>

            </div>
</div>
{% endfor %}
