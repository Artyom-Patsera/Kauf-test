$(document).ready(function() {

	$('.slick-wrap').slick({
  	// rtl: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 4000,
  	dots: true,
  	dotsClass: "my-dots",
  	prevArrow: '<button type="button" class="prev arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="next arrow"><i class="fas fa-chevron-right"></i></button>'
});

	$('#slide-1').slick({
  	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 3,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	dots: false,
  	prevArrow: '<button type="button" class="m-prev arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="m-next arrow"><i class="fas fa-chevron-right"></i></button>',
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
  
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('#slide-2').slick({
  	infinite: true,
  	slidesToShow: 5,
  	slidesToScroll: 5,
  	autoplay: true,
  	autoplaySpeed: 6000,
  	dots: false,
  	prevArrow: '<button type="button" class="m-prev arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="m-next arrow"><i class="fas fa-chevron-right"></i></button>',
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
  
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

	var $menu = $('.menu-btt, .nav-bar-right a')
	$menu.click(function() {
		if($('.nav-bar-right').hasClass('open')) {
			$('.nav-bar-right').css({'left':'-300px'}),
			$('.nav-bar-right').removeClass("open")
		} else
			$('.nav-bar-right').css({'left':'0'}),
			$('.nav-bar-right').addClass("open")
			
	});

	var $clickTm = $('.nav-bar-top ul li a, .alph-panel ul li button') 
	$clickTm.click(function() {
		$clickTm.removeClass('active-top-m')
		$(this).toggleClass('active-top-m')
	});

	var $clickAlpha = $('.wrapp-alphabet ul li a') 
	$clickAlpha.click(function() {
		$clickAlpha.removeClass('alph-active')
		$(this).toggleClass('alph-active')
	});

	var $clickPanelA= $('.wrapp-alphabet ul li button') 
	$clickPanelA.click(function() {
		$clickPanelA.removeClass('panel-active')
		$(this).toggleClass('panel-active')
	});

	var $lang = $('.lang')
	$lang.click(function() {
		if($lang.hasClass('eng')) {
			$lang.text("eng"),
			$(this).removeClass("eng")
		} else
			$lang.text("rus"),
			$(this).addClass("eng")
	});

	var $apl = $('.auto-pl')
	$apl.click(function() {
		if($(this).hasClass('da')) {
			$apl.removeClass('da'),
			$('.tr').css({'background-color':'#49a0d5'}),
			$('.fl').css({'background-color':'transparent'})
		} else
			$apl.addClass('da'),
			$('.tr').css({'background-color':'transparent'}),
			$('.fl').css({'background-color':'gray'})
			

	});

});
