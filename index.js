$(document).ready(function(){
  $(".menubar").click(function(event) {
    event.stopPropagation();
    $(".sidebar").stop().animate({width:'80%'}, 300);
    $(".common").css("opacity","1");
    $(".inner").css("opacity","1");
    $(".n").css("opacity","1");
    $(".forslide").width(0);
    $(".forslide").height(0);
    $(".slidelogo").width(64);
    $(".slidelogo").height(58);
  });


  $(document).click(function() {
      $(".sidebar").stop().animate({width:'0'}, 300);
      $(".common").css("opacity","0");
    $(".inner").css("opacity","0");
    $(".n").css("opacity","0");
    $(".forslide").width(64);
    $(".forslide").height(58);
    $(".slidelogo").width(0);
    $(".slidelogo").height(0);
    }
  );
$(".inner-slide-shop").mouseover(function(){
  $(".inner-slide-shop").css("opacity","0.4");
});
$(".inner-slide-shop").mouseout(function(){
  $(".inner-slide-shop").css("opacity","1");
})
$(".inner-slide-pro").mouseover(function(){
  $(".inner-slide-pro").css("opacity","0.4");
});
$(".inner-slide-pro").mouseout(function(){
  $(".inner-slide-pro").css("opacity","1");
})
$(".inner-slide-inside").mouseover(function(){
  $(".inner-slide-inside").css("opacity","0.4");
});
$(".inner-slide-inside").mouseout(function(){
  $(".inner-slide-inside").css("opacity","1");
})
$(".inner-slide-support").mouseover(function(){
  $(".inner-slide-support").css("opacity","0.4");
});
$(".inner-slide-support").mouseout(function(){
  $(".inner-slide-support").css("opacity","1");
})
$(".inner-slide-location").mouseover(function(){
  $(".inner-slide-location").css("opacity","0.4");
});
$(".inner-slide-location").mouseout(function(){
  $(".inner-slide-location").css("opacity","1");
})

setInterval(function(){
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1350) {
      $(".sidebar").hide();
      $(".slidelogo").width(0);
    $(".slidelogo").height(0);
    $(".forslide").width(64);
    $(".forslide").height(58);
    } else {
      $(".sidebar").show();
      
    }
    
})
})

    
