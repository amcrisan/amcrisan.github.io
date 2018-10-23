---
layout: page
title: Other Projects
permalink: /research/otherProjects/
back_title: Research
back_url: research
---

<div class="container">
<div class="row" style="padding-left:20px;padding-right:20px">
  <div class="col-xs-6 col-md-4 topic-box">
        <h2>Academic</h2>
        <p>Academic projects are those completed during my tenure in academia or governmental organizations with strong academic ties. These projects include my <a href="#phdProj" class="special-link"> doctoral research project</a>; <a href="#watershed" class="special-link">watershed metagenomics</a>;<a href="#tbbedmap" class="special-link"> tuberculosis shelter transmission analysis</a>; and previous work in <a href="#msc_cancer" class="special-link"> cancer genomics </a></p>
  </div>

  <div class="col-xs-6 col-md-4 topic-box">
        <h2>Industry</h2>
        <p> I spent some time working in the private sector at the GenomeDx start-up company, where we developed and brought to market the <a href="#decipher" class="special-link">Decipher prostate cancer test</a>.</p>
  </div>

  <div class="col-xs-6 col-md-4 topic-box">
          <h2>For Fun</h2>
          <p>I have quite a few projects I do for fun, but the ones I emphasize on this research website are related to genomics, science, or fun knowledge translation activities. One such project is my work with the <a href="#genomemusic" class="special-link">genome music project</a>.</p>
      </div>
  </div>
</div>

 <p id="tbbedmap" class="subject-header"> Tuberculosis Shelter Transmission Analysis</p>

In May 2008, an outbreak of TB began in a homeless shelter in British Columbia, Canada. The index case, diagnosed with AFB4+ pulmonary TB, used the shelter for 12 nights, seeding a large first wave of both active cases and latent TB infections (LTBI). By December 2013, the outbreak had grown to include 52 active cases, with 2,310 community members identified as potentially exposed and subsequently investigated with tuberculin skin testing (TST). By combining a unique dataset of the shelter client roll calls and bed locations with a TST screening database, we were able to examine the influence of exposure duration and distance from the index case on other shelter client's risk of TB infection.

An overview of the project is available below in a poster format.

*Be mindful if you choose to print this poster out, as it is 3 feet by 4 feet*.

<img src="{{ site.baseurl }}/files/IUATLB_Bedmap_poster_2014.png" style="width:640px; height:405px;" >

The publication for this project is available <a href="http://www.ncbi.nlm.nih.gov/pubmed/26260820">online</a>. The manuscript project code is available on <a href="https://github.com/amcrisan/SpatioTemporalTBShelterAnalysis">github</a>. A copy of the poster can also be [downloaded]({{ site.baseurl }}/files/IUATLB_Bedmap_poster_2014.pdf)
<a href="#top" style="color:#d3d3d3">[return to top]</a>


<p id="watershed" class="subject-header"> Metagenomics to Improve Watershed Health </p>
This project was a large multi-year <a href="http://www.genomecanada.ca/en/">Genome Canada </a> funded project that wrapped up at the end of June 2015. Details of the projects are available on the project <a href="http://www.watersheddiscovery.ca"> website</a>. I joined the project in November 2013 to analyze the bacterial and eukaryotic microbiome. Below is a summary of the project from the Bioproject data repository (<a href="http://www.ncbi.nlm.nih.gov/bioproject/PRJNA287840/">PRJNA287840</a>):

<blockquote class="bq3">
 <p>Water quality is currently assessed primarily at the tap using culture-based indicators of microbial pollution, such as coliform bacteria and E. <em>coli</em>. This paradigm is restrictive because it relies on century-old technologies and does not consider the broader impact of microbial pollution on the larger ecosystem. Furthermore, this approach enables only reactive responses focused on human health rather than proactive measures that protect water at its source: the watershed.</p>

<p> Our goal is to change the way we monitor water quality in our watersheds.Advances in genomic technology have enabled us to broadly study the microbial community composition of watersheds and to understand how this community changes in response to environmental perturbations. By broadly surveying the microbial community in our watersheds we intend to discover novel microbial indicators associated with polluted versus healthy watersheds. Our study has three principal goals: </p>

<ol>
<li> To use metagenomics to measure the impact of pollution on the bacterial communities in different watersheds.</li>

<li>To use amplicon sequencing of various microbial genes including the 16S and 18S rRNA and gp23 genes to quantify the microbiome, which consist of viruses, bacteria, and small eukaryotes (which include protists and fungi), of different watersheds.</li>

<li>To create novel tests that monitor these microbial community changes in order to detect pollution and pinpoint the specific source of the pollution.</li>
</ol>
<p>By creating new tests that focus on overall watershed health, as opposed to just human health, we will provide the advanced tools needed to protect our watersheds.</p>
</blockquote>

 What remains to be completed are the publications. Currently I have two first author publications (one submitted and one still in the preparation stages), and I will have some forthcoming co-authored publications as well. During the course of this project I also worked to develop biomarker selection strategies, which I have tested in a larger C. *difficle* dataset that is currently available as a <a href="https://github.com/amcrisan/UnnamedBiomarkerProject">github repository</a>.

<a href="#top" style="color:#d3d3d3">[return to top]</a>

<p id="msc_cancer" class="subject-header"> Breast Cancer Genomics</p>
I began my research of cancer genomics initially during my masters of science (MSc) graduate work and continuing into my industry work at <a href="#decipher">GenomeDx</a>. More information about work completed at <a href="#decipher">GenomeDx</a> is provided in a separate section; in this section I will primarily discuss my MSc research applications.

My MSc research concentrated on using machine learning methods to detect anomalies in cancer genomes that could have been implicated in cancer aetiology. More specifically, I developed a method that could identify single base changes in regions of larger structural anomalies called copy number variations.  Furthermore my MSc studies also mark the first, but certainly not the last, time I built data management pipelines for genomic data. More complete details of my research output during my MSc studies are available on the <a href="{{site.basurl}}/publications"> publications page</a>, however I list two key manuscripts below:

<ul>
  <li><em class="author">Crisan A</em>, Goya R, Ha G, Ding J, Prentice LM, Oloumi A, Senz J, Zeng T, Tse K,  Delaney A, Marra MA, Huntsman DG, Hirst M, Aparicio S, Shah S. <em>Mutation discovery in regions of segmental cancer genome amplifications with CoNAn-SNV: a mixture model for next generation sequencing of tumors</em> . PLOS One. 2012;7(8):e41551 <a href="publications/plos-2012.pdf">[pdf]</a><a href="http://compbio.bccrc.ca/software/conan-snv/"> [code]</a></li>
  <li >Shah SP, Roth A, Goya R, ... <em class="author">Crisan A</em> ..., Huntsman D, Hirst M, Caldas C, Marra MA, Aparicio S. <em>The clonal and mutational evolution spectrum of primary triple-negative breast cancers.</em>Nature. 2012 Apr 4;486(7403):395-9. <a href="http://www.nature.com/nature/journal/v486/n7403/full/nature10933.html">[link]</a></li>
</ul>

<a href="#top" style="color:#d3d3d3">[return to top]</a>


<p id="decipher" class="subject-header"> Decipher Prostate Cancer Classifier</p>
<p id="decipher"> <a href="http://deciphertest.com/">Decipher </a> is the product name for am exon microarray test that I worked to develop during my time at <a href="https://genomedx.com/">GenomeDx </a> . I worked at GenomeDx from October 2010 to September 2013. During that time I was involved in product development, validation, and eventually commercial efforts. Aside from the test itself, my primary output was research publications. A detailed list is available on the <a href="{{site.basurl}}/publications"> publications page</a>. However, I have also highlighted some key manuscripts below that were published during my tenure there.</p>

These are some key publications that I worked on while at GenomeDx:

&#9733; symbol indicates that both authors contributed equally to the work
<ul>

  <li>Erho N&#9733;, <em class="author">Crisan A</em> &#9733;, Vergara IA, Mitra AP, Ghadessi M, Buerki C, Bergstralh EJ, Kollmeyer T, Fink S, Haddad Z, Zimmermann B, Sierocinski T, Ballman KV, Triche TJ, Black PC, Karnes RJ, Klee G, Davicioni E, Jenkins RB. <em>Discovery and validation of a prostate cancer genomic classifier that predicts early metastasis following radical prostatectomy</em> . PLoS One. 2013 Jun 24;8(6):e66855.</li>

  <li> Karnes RJ, Bergstralh EJ, Davicioni E, Ghadessi M, Buerki C, Mitra AP, <em class="author">Crisan A</em>, Erho N, Vergara IA, Lam LL, Carlson R, Thompson DJ, Haddad Z, Zimmermann B, Sierocinski T, Triche TJ, Kollmeyer T, Ballman KV, Black PC, Klee GG, Jenkins RB. <em> Validation of a genomic classifier that predicts metastasis following radical prostatectomy in an at risk patient population</em> . J Urol. 2013 Dec;190(6):2047-53.</li>

  <li> Alshalalfa M&#9733;, <em class="author">Crisan A</em>&#9733;,  Vergara IA, Ghadessi M, Buerki C, Erho N, Yousefi K, Sierocinski T, Haddad Z, Black PC, Karnes RJ, Jenkins RB, Davicioni E. <em>Clinical and genomic analysis of metastatic prostate cancer progression with a background  of postoperative biochemical recurrence </em>. BJU Int. 2014 Dec 8</li>
</ul>

My work also resulted a patent:

 <ul>
   <li > Buerki, C. and <em class="author"> Crisan, A.</em> and Davicioni, E. and Erho, N.G. and Ghadessi, M. and Jenkins, R.B. and Vergara, I.A.<em>Cancer diagnostics using biomarkers</em>.2014. </li>
 </ul>

 <a href="#top" style="color:#d3d3d3">[return to top]</a>


<p id="genomemusic" class="subject-header"> The Music in our Genomes Project</p>
 The *"Music in our Genomes"* project was a fun and kind of random side project. I worked with <a href="http://www.bccdc.ca/util/about/UBCCDC/People/Faculty/DrJenniferGardy.htm">Dr. Jennifer Gardy</a> and cellist <a href="https://itunes.apple.com/album/peter-gregson-touch/id1025021892?app=itunes&ls=1">Peter Gregson </a> to turn genomic data into music. They presented this project at a Vancouver TEDx event. The video is cued up to the point where they begin to discuss the project outcomes.</p>

 <iframe width="640" height="360" src="https://www.youtube.com/embed/nL_cx91sxYc?rel=0&start=685" frameborder="0" allowfullscreen></iframe>

<a href="#top" style="color:#d3d3d3">[return to top]</a>
