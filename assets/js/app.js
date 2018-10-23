
$(document).ready(function () {
    
    var newsResults = parseInt(location.hash.substr(1).split("=")[1], 10);

    $('.img-carousel').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        lazyLoad:'ondemand'
    });
    $('.featProj-carousel').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay:true,
        autplyaSpeed:1000
    });

    $('#sidebarCollapse').on('click', function() {
        newsResults = (newsResults === 0) ? 1 : 0;
        location.hash = "news=" + newsResults;
        toggleSidebar(this);
    });

    if (newsResults === 0) {
        // if we should hide the news menu
        var sidebar = $('#sidebar');

        sidebar.css('display', 'none');
        toggleSidebar($('#sidebarCollapse'));
    }

    $('a[href]').click(function(ev) {
        ev.preventDefault();
        if (this.href.indexOf(location.host) > -1) {
            location = this.href + location.hash;
            return;
        }
        location = this.href;
    });
    
    function toggleSidebar(btn) {
        $('#sidebar').toggleClass('active');

        if (!$('#sidebar').hasClass('active')) {  
            // if sidebar is open
            $('#sidebar').css('display', 'block');
        }

        $(btn).toggleClass('active');
    }
});

/*
$('li').on('click',function(){
    if($('#sidebar').attr('class').indexOf('active')>=0){
        console.log("HERE");
    }
});
*/
/*
$('#sidebarCollapse').on('click', function(){
    $('#sidebar, #content').addClass('active');
    $('.collapse.in').addClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});

$('#dismiss').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
});

*/

/*ATTEMPTS AT SMOOTH SCROLLING - https://codepen.io/chriscoyier/pen/dpBMVP*/
