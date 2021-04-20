// Content change
/*globals $:false*/

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++)
        tabcontent[i].style.display = "none";
    
    tablinks = document.getElementsByClassName("tablinks");
    
    for (i = 0; i < tablinks.length; i++) 
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" (promijenio sam id u about) and click on it
document.getElementById("about").click();


// Menu icon effect

function iconTransform(x) {
    x.classList.toggle("change");
    
    // show the menus to the left
    //document.getElementById(id).style.property = new style
    
    //document.getElementById('about').style.left = "0px";
    //document.getElementById('blog').style.left = "0px";
    //document.getElementById('projects').style.left = "0px";
    //document.getElementById('contact').style.left = "0px";
}

var popup = false;
var buttons = document.getElementsByClassName("button");

function leftMenu() {
    if (!popup)
        {
            // show the menus on the left
            for (var i = 0; i < buttons.length; i++)
                buttons[i].style.left = "0px";
            //document.getElementById('about').style.left = "0px";
            //document.getElementById('blog').style.left = "0px";
            //document.getElementById('projects').style.left = "0px";
            //document.getElementById('contact').style.left = "0px";
        }
    else
        {
            //hides the menu on the left 
            for (var i = 0; i < buttons.length; i++)
                buttons[i].style.left = null;
            //document.getElementById('about').style.left = null;
            //document.getElementById('blog').style.left = null;
            //document.getElementById('projects').style.left = null;
            //document.getElementById('contact').style.left = null;
        }
    popup = !popup;
}



// Slideshow JS

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var j, slides, dots;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//
function Divs() {
    var divs = $('.slideshow-container div'),
        now = divs.filter(':visible'),
        next = now.next().length ? now.next() : divs.first(),
        speed = 1000;

    now.fadeOut(speed);
    next.fadeIn(speed);
}

$(function () {
    setInterval(Divs, 1400);
});



// Accordion

var acc = document.getElementsByClassName("accordion");

for (var k = 0; k < acc.length; k++)
    acc[k].nextElementSibling.style.display = "none";

for (var k = 0; k < acc.length; k++) {
    acc[k].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display != "none") {
            //panel.style.maxHeight = null;
            panel.style.display = "none";
        } else {
            //panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.display = "block";
        }
    });
}
