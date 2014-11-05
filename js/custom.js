/* ========================================================================
 * Gobstrap: custom.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // $(".header-gobcl").button('toggle').addClass('hola')


    $('.navbar-collapse').on('shown.bs.collapse', function (e) {
         $('.header-gobcl #logo-main').addClass('off');
         $('.header-gobcl #logo-main').removeClass('on');
         
    });

    $('.navbar-collapse').on('hidden.bs.collapse', function (e) {
        $('.header-gobcl #logo-main').addClass('on');
         $('.header-gobcl #logo-main').removeClass('off');
        
    });


}(jQuery);
