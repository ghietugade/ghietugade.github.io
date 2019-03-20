/* ====================================
   Grana Front-end developer Evaluation

   @author: Angie Tugade
   @website: www.angietugade.com
   ==================================== */


var SizeGuideSlider = (function(){
  var $slider = $(".m-sizing-guide__slider"),
      $sliderWrap = $(".m-sizing-guide__slider-wrap"),
      $sliderItem = $(".m-sizing-guide__slider-item");
      $sliderFirstItem = $(".m-sizing-guide__slider-item:first");

  var totalWidth = 0;
  $sliderItem.width($(window).width());

  $sliderItem.each(function(){
    totalWidth = totalWidth + $(this).outerWidth(true);
  });
  
  var maxScrollPosition = totalWidth - $sliderWrap.outerWidth();

  $slider.width(totalWidth);

  $sliderFirstItem.addClass("slider-item--active");

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

  var isLastSlide = function(){
      var lastPosition =  -maxScrollPosition;
      if ($slider.css('left') <= lastPosition + "px"){
          return true;
      }else{
          return false;
      }
  }

  var clickPrev = function(event) {  
      var $itemActive = $(".slider-item--active");

      if(isMobile()){
        var $targetItem = $itemActive.prev();
      }else{
        var $targetItem = $itemActive.prev().prev().prev();
      }
      toSliderItem($targetItem);
  };

  var clickNext = function(event) {
      var $itemActive = $(".slider-item--active");

      if (isLastSlide()){
          $itemActive.removeClass("slider-item--active");
          $sliderFirstItem.addClass("slider-item--active");
          $slider.animate({
              left : 0
          });
      }else{
          if(isMobile()){
            var $targetItem = $itemActive.next();
          }else{
            var $targetItem = $itemActive.next().next().next();
          }
          toSliderItem($targetItem);
      }
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

$(window).ready(function(){
  SizeGuideSlider.init();
});