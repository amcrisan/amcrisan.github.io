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
            <p> I am a Lead Research Scientist at <a target=_blank href="https://research.tableau.com/"> Tableau Research</a>. I am part of the Office of the CTO, where I design and develop new visual modalities for humans and ML/AI systems to interact in data work. </p>

            <p><strong>Research Interests:</strong> Interactive Machine Learning, Human Centered ML/AI, Data Science, Data Visualization, Bioinformatics</p>

            <p> I conduct interdisciplinary research that integrates techniques and methods from machine learning, human computer interaction, and data visualization. I analyze data, build tools, and conduct evaluative studies. My research focuses on the intersection of Data Science and Data Visualization.  I am especially interested in the way humans can collaboratively work together with ML/AI systems through visual interfaces. I completed my PhD in Computer Science at the University of British Columbia, where I was jointly advised by Tamara Munzner  and Jennifer Gardy.  Prior to my PhD, I was a research scientist at the British Columbia Centre for Disease Control and Decipher Biosciences, where I conducted research  machine learning and data visualization research toward applications in infectious disease and cancer genomics. My research has appeared in publications of the ACM (CHI), IEEE (TVCG, CG&A), Oxford Bioinformatics, and Nature, and has over 3,7000 citations.</p>

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






