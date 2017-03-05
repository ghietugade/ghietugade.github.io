var SizingGuide = (function(){
  var $slider = $(".m-sizing-guide__slider"),
      $sliderWrap = $(".m-sizing-guide__slider-wrap"),
      $sliderItem = $(".m-sizing-guide__slider-item");

  var totalWidth = 0;
  
  $sliderItem.each(function(){
      totalWidth = totalWidth + $(this).outerWidth(true);
  });
  
  var maxScrollPosition = totalWidth - $sliderWrap.outerWidth();
  
  $slider.width(totalWidth);

  $(".m-sizing-guide__slider-item:first").addClass("slider-item--active");

  var isMobile = function(){
      if(window.innerWidth <= 760) {
           return true;
      } else {
           return false;
      }
  };

  var toSliderItem = function($targetItem){
      if($targetItem.length){

          var newPosition = $targetItem.position().left;

          if(newPosition <= maxScrollPosition){
              $targetItem.addClass("slider-item--active");
              $targetItem.siblings().removeClass("slider-item--active");

              $slider.animate({
                  left : - newPosition
              });
          } else {
              $slider.animate({
                  left : - maxScrollPosition
              });
          };
      };
  };

  var clickPrev = function(event) {  
      if(isMobile()){
        var $targetItem = $(".slider-item--active").prev();
      }else{
        var $targetItem = $(".slider-item--active").prev().prev().prev();
      }
      toSliderItem($targetItem);
  };

  var clickNext = function(event) {
      if(isMobile()){
        var $targetItem = $(".slider-item--active").next();
      }else{
        var $targetItem = $(".slider-item--active").next().next().next();
      }
      toSliderItem($targetItem);
  };

  var bindFunctions = function() {
      $(".slider-controls-prev").on("click", clickPrev);
      $(".slider-controls-next").on("click", clickNext);
  };

  var init = function(){
      bindFunctions();
  };

  return {
      init: init
  };
})();          

$(window).load(function(){
  SizingGuide.init();
});