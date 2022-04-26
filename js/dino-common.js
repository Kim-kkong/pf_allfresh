// DinoWorks Common JS
$(document).ready(function() {
  preventDefaultAnchor();
  
  
  //gnb
  $('div.bottom-nav > ul.main > li').on('mouseenter', function() {
    $(this).addClass('open');
  });
  $('div.bottom-nav > ul.main > li').on('mouseleave', function() {
    $(this).removeClass('open');
  });
  $('div.bottom-nav > ul.main > li > a > div.sub-inner').on('mouseenter', function() {
    $(this).parent().parent().addClass('open');
  });
  $('div.bottom-nav > ul.main > li > a > div.sub-inner').on('mouseleave', function() {
    $(this).parent().parent().removeClass('open');
  });

  //scroll event
  checkScroll();

  $(window).on('scroll resize', function() {

    checkScroll();

  });

  function checkScroll() {
    var scrollAmt = $(document).scrollTop();
    if (scrollAmt > 200) {
      $('#wrapper div.quick-menu').addClass('on');
      $('#header div.event').css({'top': '-50px'});
      $('#gnb').addClass('up');
      $('#gnb-mobile').addClass('up');
      
    } else {
      $('#header div.event').css({'top': '0'});
      $('#gnb').removeClass('up');
      $('#gnb-mobile').removeClass('up');
      $('#wrapper div.quick-menu').removeClass('on')
    }
    
    $('#wrapper > div.quick-menu ').css({'top': (scrollAmt + 250) + 'px'});
  }

  $('#wrapper div.up').on('click', function() {
    $('html, body').stop(true).animate({'scrollTop': 0}, 500);
  });

  $('#gnb-mobile p.menu').on('click', function() {
    $(this).toggleClass('on');
    $('#gnb-mobile div.nav p.cancle').parent().toggleClass('off');
  });
});


function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}








