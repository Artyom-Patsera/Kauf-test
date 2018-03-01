$(document).ready(function (){
     $('.menutrigger').click(function() {
    
        $('.nav ul').slideToggle(300, function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    
  });

  $('.play').click(function() {

  	$('.play-video').css('min-height', '100vh');
  	$('video').css('display', 'block');
  	$('.close').css('display', 'block');

  });

  $('.close').click(function() {

  	$('.play-video').css('min-height', '0vh');
  	$('video').css('display', 'none');
  	$('.close').css('display', 'none');

  });
    
    
 //     $('.wrapper a').click( function(){ 
	// var scroll_el = $(this).attr('href');
 //        if ($(scroll_el).length != 0) { 
	//     $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); 
 //        }
	//     return false; 
 //    });
    
 
});
