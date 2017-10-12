$(function() {
    
  'use strict';

  /**
   * =======================================
   * Function: Home Section Fullscreen View.
   * =======================================
   */
  var fullscreen_home = function() {
    if(matchMedia( "(min-width: 768px) and (min-height: 500px)" ).matches) {
      var height = $(window).height() + "px";
      $(".header-overlay").css('min-height', height);
    }

    var top = Math.max($(window).height() / 2 - $("#header-body")[0].offsetHeight / 2, 0);
    $("#header-body").css('padding-top', top + "px").css('padding-bottom', (top - $('#header-navbar ').height()) + "px");
    $("#header-body").css('position', 'relative');
  }


  /** 
   * =============================
   * Local Scroll Offset
   * =============================
   */
  var localScrollOffset = function() {
    if($(window).width() > 767){
        $('#navbar-nav').localScroll({
            offset: -68
      });

      /* SUBCRIBE  BUTTON SCROLL FROM HOME PAGE */
      $('.btn-scroll').localScroll({
            offset: -68
      });
          
    }else{
      $('#navbar-nav').localScroll({
          offset: -54
      });

      /* SUBCRIBE  BUTTON SCROLL FROM HOME PAGE */
      $('.btn-scroll').localScroll({
            offset: -54
      });
    }
  }



  /**
   * ================================
   * PRELOADER                     
   * ================================
   */
  // makes sure the whole site is loaded
  $(window).on('load', function() {
    // will first fade out the loading animation
    $("#loader").fadeOut();
    //then background color will fade out slowly
    $("#loader-wrapper").delay(200).fadeOut("slow");

  });  



  // JQuery Windows Resize Method.
  $(window).on('resize', function() {

    // Call "fullscreen_home" Function.
    //fullscreen_home();

    // Local Scroll Offset Height Make In This Function
    localScrollOffset();

  })
  

  // jQuery Document Ready Function.
  $(document).on('ready', function() {

    // Call "fullscreen_home" Function.
    //fullscreen_home();



    /**
     * ===================
     * Pop up Video
     * ===================
     */
    $('#popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    

    /**
     * =======================================
     * Footer Social Icon color
     * =======================================
     */
    $('.social-icon-color ul li a').each(function() {
        $(this).css('background-color', $(this).attr('data-color'));
    });



    /**
     * ======================================
     *  STICKY NAVBAR 
     * ======================================
     */
    //if ( matchMedia( 'only screen and (min-width: 768px)' ).matches ) {
       $(document).on('scroll', function() {
          var scrollPos = $(this).scrollTop();

          if( scrollPos > 50 ) {
             $('.navbar-fixed-top').addClass('navbar-home');
             $('#navbar-nav .btn').removeClass('btn-effect-on').addClass('btn-effect-off');
          } 
          else {
             $('.navbar-fixed-top').removeClass('navbar-home');
             $('#navbar-nav .btn').removeClass('btn-effect-off').addClass('btn-effect-on');
          }
       });
    //}



    /**
     * =======================================
     * NAVIGATION SCROLL
     * =======================================
     */

    /* Style-2 */
    $('#navbar-nav').onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollSpeed: 1000
    });

    // Local Scroll Offset Height Make In This Function
    localScrollOffset();
    
    

    /**
     * =======================================
     * Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
     * =======================================
     */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.querySelector('head').appendChild(msViewportStyle)
    };


    /**
     * =======================================
     * WOW ANIMATION
     * =======================================
     */
    var wow = new WOW({ mobile: false });
    wow.init();


    /**
     * =======================================
     * PARALLAX
     * =======================================
     */
    $(window).stellar({
        responsive: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        horizontalOffset: 0,
        verticalOffset: 0,
      });


    /**
     * =======================================
     * SMOOTH SCROLL / CURRENTLY ENABLED IN niceScroll
     * =======================================
     */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });


    /**
     * =======================================
     * CAROUSEL SLIDER 
     * =======================================
     */
    var owl = $("#slider");

    /* TESTIMONIAL SYNC WITH CLIENTS */
    owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1190, 3], //5 items between 1000px and 901px
      itemsDesktopSmall     : [992,2], // 3 items betweem 992px and 769px
      itemsTablet       : [768,2], // 3 items between 768 and 601
      itemsTabletSmall       : [480,1], // 2 items in widen mobile device
      itemsMobile       : [320,1], // 1 items in any small mobile device
      pagination:true,
      responsiveRefreshRate : 100
    });



     /**
     * =======================================
     * Function for email address validation
     * =======================================
     */
    function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      return pattern.test(emailAddress);
    };



    /**
     * =============================================
     * MAILCHIMP NEWSLETTER SUBSCRIPTION 
     * =============================================
     */
    $("#mailchimp-subscribe").ajaxChimp({
        callback: mailchimpCallback,
        url: "http://deviserweb.us8.list-manage.com/subscribe/post?u=8035b74ecdb23c8ce0ccb094f&id=1a9b909143" // Replace your mailchimp post url inside double quote "".  
    });
    function mailchimpCallback(resp) {
         if(resp.result === 'success') {
            $('.subscription-success')
                .html('<i class="fa fa-check"></i>' + "&nbsp;" + resp.msg)
                .delay(500)
                .fadeIn(1000);

            $('.subscription-failed').fadeOut(500);
            
        } else if(resp.result === 'error') {
            $('.subscription-failed')
                .html('<i class="fa fa-close"></i>' + "&nbsp;" + resp.msg)
                .delay(500)
                .fadeIn(1000);
                
            $('.subscription-success').fadeOut(500);
        }  
    };



    /**
     * ====================================
     * LOCAL NEWSLETTER SUBSCRIPTION
     * ====================================
     */
    $("#local-subscribe").submit(function(e) {
        e.preventDefault();
        var data = {
            email: $("#subscriber-email").val()
        };

        if ( isValidEmail(data['email']) ) {
            $.ajax({
                type: "POST",
                url: "../../assets/subscribe/subscribe.php",
                data: data,
                success: function() {
                    $('.subscription-success').fadeIn(1000);
                    $('.subscription-failed').fadeOut(500);
                }
            });
        } else {
            $('.subscription-failed').fadeIn(1000);
            $('.subscription-success').fadeOut(500);
        }

        return false;
    });
  });
});

