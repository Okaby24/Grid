//shifting section
let shiftingNext = document.getElementById("next");
let shiftingPre = document.getElementById("pre");
function shiftingNextClick(){
    shiftingPre.style.fontWeight = "bold"
}
function shiftingPreClick(){
    shiftingPre.style.fontWeight = "400";
}

//back to top

window.onscroll = function() {
    let backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//settings compnent
const settingsButton = document.querySelector('.settings-button');
const settingsContainer = document.querySelector('.settings-container');
const settingsExpanded = document.querySelector('.settings-expanded');

settingsButton.addEventListener('click', () => {
  settingsContainer.classList.toggle('active'); 
  
  if (settingsContainer.classList.contains('active')) {
    // Expand
    const expandedHeight = settingsExpanded.scrollHeight + 'px';
    settingsExpanded.style.height = expandedHeight;
    settingsExpanded.style.opacity = '1';
  } else {
    // Collapse
    settingsExpanded.style.height = '0';
    settingsExpanded.style.opacity = '0';
  }
});


//A+ , A-
let aminusClicks = 0;


function Aplus() {
    let root = document.documentElement; 
    let currentFontSize = window.getComputedStyle(root).fontSize;
    let newFontSize = parseFloat(currentFontSize) + 2; 
    root.style.fontSize = newFontSize + "px";
}

function Aminus() {
    let root = document.documentElement; 

    if (aminusClicks === 0) {
        root.style.fontSize = "16px";
    } else {
        let currentFontSize = window.getComputedStyle(root).fontSize;
        let newFontSize = parseFloat(currentFontSize) - 2; 

        
        if (newFontSize >= 10) {
            root.style.fontSize = newFontSize + "px";
        }
    }

    aminusClicks++;
}



$(document).ready(function() {
    var owl = $('.owl-media').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1.7
            },
            1000: {
                items: 2.5
            },
            1700: {
                items: 3
            }
        }
    });

    
    var totalDots = $(".owl-dot").length;
    
    // Limit dots to 5
    if (totalDots > 5) {
        $(".owl-dot").slice(5).hide();
    }
});



$('.owl-events').owlCarousel({
    loop: true,
    margin: 4,
    dots: false,
    rtl:false,
    nav: false, 

    responsive: {
        0: {
            items: 1 
        },
        768: {
            items: 1 
        },
        1000: {
            items: 1.6
        }
    }
});


$('.events__btn-left').click(function() {
    $('.owl-events').trigger('prev.owl.carousel');
});

$('.events__btn-right').click(function() {
    $('.owl-events').trigger('next.owl.carousel');
});



$('.owl-read ').owlCarousel({
    loop:true,
    margin: 21,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:2,
            
        }
    }
})

$('.events__btn-left').click(function() {
    $('.owl-read').trigger('prev.owl.carousel');
});

$('.events__btn-right').click(function() {
    $('.owl-read').trigger('next.owl.carousel');
});