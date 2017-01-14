$(document).ready(function() {
	var windowHeight =  $(window).height();
	$('.hero-page').css('min-height', windowHeight);

	$(window).scroll(function(){
		if($(window).scrollTop() > windowHeight-50) {
			$('.navbar-default').fadeIn(100);
		}
		else {
			$('.navbar-default').fadeOut(100);
		}
		
		if($(window).width() > 767) {
			if ($(this).scrollTop() > windowHeight-50) {
				$('.scroll-up').fadeIn(300);
			} else {
				$('.scroll-up').fadeOut(300);
			}		
		}
	});

	setTimeout (function() {	
		$('.hero-blink').show();
		setTimeout(function() { $('.hero-blink').hide(); }, 800);
	}, 1000);

	$(".hero-img").on({
	    mouseenter: function () {
	        $('.hero-blink').show();
	    },
	    mouseleave: function () {
	        $('.hero-blink').hide();
	    }
	});

   
	$("a.scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(this.hash).offset().top - 50}, 1000, function(){window.location.hash = hash;});

		if($(window).width() < 768) {
			$(".nav a").on('click', function(e) {
				$(".navbar-toggle").trigger("click");
			});
		}
	});


	$('#skills').mouseenter(function() {
		$('.chart').easyPieChart({
				barColor: '#DB4F58',
				trackColor: '#F9C5D4',
				scaleColor: false,
				lineCap: 'butt',
				lineWidth: 12,
				size:110,
				animate: 2000
			});
	});

	/*$('#skills-toggle').click(function() {
        $('#skills').slideToggle(500);
		$('.chart').easyPieChart({
			barColor: '#1ABC9C',
			trackColor: '#2F4254',
			scaleColor: false,
			lineCap: 'butt',
			lineWidth: 12,
			size:110,
			animate: 2000
		});
    });*/
	
	$('#overlay-hide').click(function() {
		$('#reference .reference-overlay').animate({opacity:0},1000);
		$('#reference-text').animate({opacity:0},1000);
	});
		
	$('.overlay-wrapper').mouseenter(function() {
		$(this).find('.overlay a:first-child').addClass('animated slideInLeft');
		$(this).find('.overlay a:last-child').addClass('animated slideInRight');
    });
	
	$('.overlay-wrapper').mouseleave(function() {
		$(this).find('.overlay a:first-child').removeClass('animated slideInLeft');
		$(this).find('.overlay a:last-child').removeClass('animated slideInRight');
    });
	
	$('.carousel').mouseenter(function() {
		$('.carousel-control').fadeIn(300);
	});
	
	$('.carousel').mouseleave(function() {
		$('.carousel-control').fadeOut(300);
	});
	
	if($(window).width() > 767) {
		$('.service').mouseenter(function(e) {
			$(this).find('img').animate({paddingBottom: "15px"},500);
		});
		
		$('.service').mouseleave(function(e) {
			$(this).find('img').stop().animate({paddingBottom: "0px"},500);
		});
	}
	
	if($(window).width() > 767) {
		$('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'90%'});
		$('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'90%'});
		$('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'90%'});
		$('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'60%'});
		
		$('.macbook-inner').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('black');},{offset:'60%'});
	}
});



