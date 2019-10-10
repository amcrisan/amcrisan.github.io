---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---


<div class="container">


    <div class="row">
        <div class="col-12 col-md-3">
            <div class = "bioInfo">
                <div>
                <img class="circular" src="{{ site.baseurl }}/assets/files/img/bio-photo.jpg">
                </div>
                        
            </div>
        </div>
        <div class="col-12 col-md-9">
         
            <h1 id="top"> Hi! I'm Ana Crisan</h1>
            <p> I am a Vanier Scholar and UBC Public Scholar in the final year of study in Computer Science at the University of British Columbia. Under the joint supervision of Drs. Tamara Munzner (Computer Science) and Jennifer Gardy (School of Population and Public Health) I study how large and heterogenous public health data, which includes health records, geographic data, contact network, and genomic data, can be integrated and visualized. In the decade that spans my research career, beginning with my Masters of Science in 2008, through to research experience outside of academia (2010 - 2015), and finally to my doctoral research (September 2015 – present), I have witnessed, and have been a part of, an extraordinary accelerated technological change that has altered the kind of data that can be collected and analyzed in near real-time. My broad and productive research career has equipped me with a unique wholistic perspective on the actionable role that data science can play in healthcare. It is this perspective that has allowed me to develop and integrate a wealth of methodological and technical knowledge from within <strong style="color:#F2784B;">machine learning, biostatistics, epidemiology, genomics, data visualization, and human computer interaction</strong> that is evident in my research record. </p>

            <p id="job"> I've started a new position as a Research Scientist with the Tableau Research Team ! </p> 

            <!-- <p id="job"> I'm on the job market this year! <a href="#"> CV </a>  <a href="{{site.baseurl}}/assets/files/Crisan_ANamaria_CV_v2.pdf"> Teaching Statement </a> <a href="#"> Research Statement </a></p> -->
        </div>
    </div>
</div>

<div>

<div>
<br>
<div id="projects" class="section">
  
    <h3> Featured Projects</h3>
    <hr>
    <div class="featProj-carousel">
    {% for project in site.projects %}
        {% capture status %}{{project.status}}{% endcapture %}
        {% if status == "featured" %}
        <div class= "projectWide">
           
            <div class="row">
                <div class="col-sm-12 col-md-3">
                    <a href ="{{site.baseurl}}/{{project.permalink}}" ><img src="{{ site.baseurl }}/assets/files/img/{{ project.teaser}}"></a>
                </div>

                <div class="col-sm-12 col-md-9">
                    <a style = "color:black;" href = "{{site.baseurl}}/{{project.permalink}}"><strong style="font-size:22px;">{{ project.longTitle }}</strong></a>
                    <p style="font-size:15px;padding-right:2px;line-height:1.25em;"> {{ project.summary }}</p>

                    <ul class="inlineList" style="margin-left:-40px;">
                        <li class = "info"><a target = "_blank" href="{{ project.doi }}">paper </a>  </li>
                        <li class = "info"><a target = "_blank" href="{{ project.code }}">code</a> </li>
                        <li class = "moreInfo"><a target href="{{site.baseurl}}/{{project.permalink}}"> more info ...</a></li>
                    </ul>

                </div>
               
            </div>

            </div>
        {% endif %}
    {% endfor %}
        
    </div>
    <br>
</div>






