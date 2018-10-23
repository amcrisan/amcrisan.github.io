---
layout: project
permalink: gevit
shortTitle: GEViT
longTitle: 'A systematic method for surveying data visualizations and a resulting genomic epidemiology visualization typology: GEViT'
thumbnail: 'gevit_img.png'
doi: https://doi.org/10.1101/325290
code: https://github.com/amcrisan/gevit
web: http://gevit.net
date: 2018-09-11
teaser: 'gevit_Figure6.png'
status: featured
summary: 'We created a human-in-the-loop method that used text and image analysis to conduct a systematic review of data visualizations from a corpus of research articles. We applied our method to the genomic epidemiology scientific literature and produced a Genomic Epidemiology Visualization Typology (GEViT).'
---
<div class="projectIntro">
<h5><em>Anamaria Crisan, Jennifer L. Gardy, Tamara Munzner</em></h5>
<em>Accepted at Bioinformatics/em>
<hr>
<i class="far fa-file-alt"></i> <a target="_blank" href="{{page.doi}}"><span>doi</span></a> | 
<i class="fas fa-desktop"></i> <a target="_blank" href="https://gevit.net"><span> gevit.net</span></a> | <i class="fas fa-code"></i> <a target="_blank" href="{{page.code}}"><span>code</span></a> | <i class="fas fa-chalkboard-teacher"></i> <a target="_blank" href="{{ site.baseurl }}/assets/files/slides/ABPHM2017_webVersion.pdf"><span>ABPHM 2017 presentation</span> </a> | <i class="fas fa-chalkboard-teacher"></i> <a target="_blank" href="{{ site.baseurl }}/assets/files/slides/2018_ASM_NGS_V1.pdf"><span>ASM NGS 2018 presentation</span> </a> 
<!--| <i class="fas fa-chalkboard-teacher"></i> <a target="_blank" href="{{page.code}}"><span>ASM NGS 2018 presentation</span> </a>-->
<hr>
</div>

<div  class= "img-carousel">
  <div>
    <img height = "400px" src="{{site.baseurl}}/assets/files/img/gevit_Figure1.png">
        <span> <b>Method and Application Overview.</b> <strong>A)</strong> Constructing and systematically analyzing a visualization design space requires analysis of both the literature and visualizations themselves, using qualitative and quantitative approaches. <strong>B)</strong> Automated steps, as indicated by the robot icon, are used in literature analysis to identify articles in genomic epidemiology and the topics those articles address. Manual steps, as indicated by the human icon, are used in the analysis of visualizations derived from those articles, followed by further quantification with automated statistical approaches. </span>
  </div>
  <div>
    <img height = "400px" src="{{site.baseurl}}/assets/files/img/gevit_Figure2.png">
    <span> <b>Summary of literature analysis steps and document sampling</b></span>
  </div>
  <div>
    <img height = "1000px" src="{{site.baseurl}}/assets/files/img/gevit_Figure3.png">
    <span><b>Summary of literature analysis results.</b> <b>A)</b>Documents were classified according to whether they were part of a cluster (green), unclustered under current parameter settings (purple), or never clustered (orange). The 32 cluster boundaries were automatically determined and are shown as light grey ovals. <b>B)</b> Clustered documents and their topics, which are automatically assigned based upon top two terms with the cluster. <b>C)</b> Verification of cluster topics against an external list of pathogens. The small multiples show the distribution across the clusters of the pathogen named in the panel header, for the 35 pathogens with 40 or more matching documents.</span>
  </div>
  <div>
    <img height = "500px" src="{{site.baseurl}}/assets/files/img/gevit_Fig4_altLayout.png">
    <span><b>Chart Types in GEViT.</b> We used common names for chart types and separated them into eight main classes and also one 'Other' class. Special cases of chart types were defined only when there were multiple instances of the same specific chart across our dataset. Chart types with an asterisk mark (*) indicate that they were included in the analysis through manually added articles.</span>
  </div>
  <div>
    <img height = "400px" src="{{site.baseurl}}/assets/files/img/gevit_Figure5.png">
    <span> <b>Chart Combinations in GEViT.</b> The six combination types differ based on the number of chart types, the number of charts, and the approach to linking them together. Complex combinations are an amalgamation of the above five chart types â for example, a composite visualization that is represented as a small multiple and also linked another chart type</span>
  </div>
  <div>
    <img height = "400px" src="{{site.baseurl}}/assets/files/img/gevit_Figure6.png">
    <span><b>Chart Enhancements in GEViT.</b><b>A)</b>Our characterization of marks and their associated aesthetic properties is based on longstanding conventions in the visualization literature. Illustrative examples are shown for <b>B)</b> a tree and <b>C)</b> node-link chart types.</span>
  </div>
</div>
<br>
<h5>Abstract</h5>
<p>Data visualization is an important tool for exploring and communicating findings from genomic and healthcare datasets. Yet, without a systematic way of organizing and describing the design space of data visualizations, researchers may not be aware of the breadth of possible visualization design choices or how to distinguish between good and bad options. We have developed a method that systematically surveys data visualizations using the analysis of both text and images. Our method supports the construction of a visualization design space that is explorable along two axes: why the visualization was created and how it was constructed. We applied our method to a corpus of scientific research articles from infectious disease genomic epidemiology and derived a Genomic Epidemiology Visualization Typology (GEViT) that describes how visualizations were created from a series of chart types, combinations, and enhancements. We have also implemented an online gallery that allows others to explore our resulting design space of visualizations. Our results have important implications for visualization design and for researchers intending to develop or use data visualization tools. Finally, the method that we introduce is extensible to constructing visualizations design spaces across other research areas. <br>
<br>
Availability: <br>
Our browsable gallery is available at <a href="http://gevit.net">http://gevit.net</a> and all project code can be found at <a href="https://github.com/amcrisan/gevitAnalysisRelease">https://github.com/amcrisan/gevitAnalysisRelease</a></p>

