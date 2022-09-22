var menu = $('.navbar').offset().top;
$(window).scroll(function () {
  var scroll = $(this).scrollTop();

  if (scroll > menu) {
    $('.navbar').addClass('menu_fix');
  } else {
    $('.navbar').removeClass('menu_fix');
  }
});

// bt_top
$('.bt_top').click(function () {
  $('html,body').animate({
    scrollTop: 0,
  }, 1500);
});

$(window).scroll(function () {
  var abc = $(this).scrollTop();

  if (abc > 200) {
    $('.bt_top').fadeIn();
  } else {
    $('.bt_top').fadeOut();
  }
});

$(function () {

  // banner-slider
  $('.main_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  //   about-slider
  $('.about_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    ]
  });

  // team-slider 
  $('.team').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    ]

  });

  // counter-up 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  //   slider
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.left_arrow',
    nextArrow: '.right_arrow',
  });
})

// veno-box-js
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'circle-fade'
});

// mobile_menu
$('.show').on('click', function () {
  $('.main_menu').css('left', '0');
})
$('.hide').on('click', function () {
  $('.main_menu').css('left', '-100%');
})

// scrollspy-js
//scroll-spy & Smooth-scrolling

var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 120;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

// wow js
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();

// preeloader-js
$(window).load(function () {
  $('#preloader').delay(300).fadeOut(300);
});