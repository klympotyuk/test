/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages

        $(document).foundation(); // Foundation JavaScript
        
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.





// ====================== smooth scroll anchor ================

  // jQuery(function() {
  //   jQuery('.scrolldown').click(function() {
  //     if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
  //       var target = jQuery(this.hash);
  //       target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         jQuery('html,body').animate({
  //           scrollTop: target.offset().top - 80
  //         }, 1000);
  //         return false;
  //       } 
  //     }
  //   });
  // });

// ====================== end smooth scroll anchor ================ 



jQuery(document).ready(function(){      // global document.ready



});

jQuery(document).ready(function(){  
 // wordpress admin panel 
    jQuery('html').attr('style', 'margin-top: 0!important');
    jQuery('#wpadminbar').addClass('overflow');
    var hide;
    jQuery('#wpadminbar').on('mouseover', function(){
      setTimeout(function(){
        jQuery('#wpadminbar').removeClass('overflow');
      },1000);
      if(!jQuery('#wpadminbar').hasClass('open')){
        jQuery('#wpadminbar').addClass('open overflow');
      } else{
        clearTimeout(hide);
      }
    });
    jQuery('#wpadminbar').on('mouseleave', function(){
      hide = setTimeout(function(){
        jQuery('#wpadminbar').addClass('overflow');
        jQuery('#wpadminbar').removeClass('open');
      },2000);
    });
  // end wordpress admin panel
});






