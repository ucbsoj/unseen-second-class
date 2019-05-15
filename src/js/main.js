import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS
import Flickity from "flickity";




var flky = new Flickity( '.carousel', {});


//var imgReveal = $('#top-quote').offset().top;


$(".popup-document").each(function(){

	$(this).css("cursor","pointer");

	$(this).on("click", function(){
		$($(this).data("target")).slideToggle();
	});

})



$(document).scroll(function() {

  var scroll = $(document).scrollTop();


  if (scroll > 300) {

  	$(".bg-img").css({"-webkit-filter": "blur(5px)","filter": "blur(5px)" })  

  } else {

  	$(".bg-img").css({"-webkit-filter": "blur(10px)","filter": "blur(10px)" })  
  
  }

  // if (scroll > imgReveal){

  // 	$(".bg-img").css({"-webkit-filter": "blur(0px)","filter": "blur(0px)" })  
  
  // } 


});

$( document ).ready(function() {

  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  $( ".menu ul" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});
