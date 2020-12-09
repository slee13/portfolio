(function($) {
  "use strict"; // Start of use strict


  // rotate between words in intro statement
  $(".rotate").Morphext({
      animation: 'fadeIn',
      speed: 2500
  });


  // make intro visible after page has loaded to give rotating words to
  // configure / disappear.
  $('#intro').show();


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $(document).keydown(function(e) {
      switch(e.which) {
        case 49: // 1
            // window.location.hash = 'overview';
            $('html,body').animate({
            scrollTop: ($('#overview').offset().top)
        });
        break;

         case 50: // 2
             // window.location.hash = '#phys-dig';
             $('html,body').animate({
             scrollTop: ($('#phys-dig').offset().top)
         });
         break;

         case 51: // 3
             // window.location.hash = '#dig-prod';
             $('html,body').animate({
             scrollTop: ($('#dig-prod').offset().top)
         });
         break;

         case 52: // 4
             // window.location.hash = '#mystery';
             $('html,body').animate({
             scrollTop: ($('#mystery').offset().top)
         });
         break;

         case 53: // 5
             // window.location.hash = '#summary';
             $('html,body').animate({
             scrollTop: ($('#summary').offset().top)
         });
         break;

         case 48: // 0
             // window.location.hash = '#toc';
             $('html,body').animate({
             scrollTop: ($('#toc').offset().top)
         });
         break;
         
         default: return;
     }
     e.preventDefault();
  });



})(jQuery); // End of use strict
