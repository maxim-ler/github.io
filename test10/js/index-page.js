$(function() {
	// tab1
	$(".our-projects__item--first .switching__tab-item").not(":first").hide();
	$(".our-projects__item--first .switching .switching__tab").click(function() {
		
		// нужно если slick+switching__tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".our-projects__item--first .switching .switching__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".our-projects__item--first .switching__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// tab2
	$(".our-projects__item--second .switching__tab-item").not(":first").hide();
	$(".our-projects__item--second .switching .switching__tab").click(function() {
		
		// нужно если slick+switching__tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".our-projects__item--second .switching .switching__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".our-projects__item--second .switching__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	// tab3
	$(".our-projects__item--third .switching__tab-item").not(":first").hide();
	$(".our-projects__item--third .switching .switching__tab").click(function() {
		
		// нужно если slick+switching__tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".our-projects__item--third .switching .switching__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".our-projects__item--third .switching__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// tab4
	$(".our-projects__item--fourth .switching__tab-item").not(":first").hide();
	$(".our-projects__item--fourth .switching .switching__tab").click(function() {
		
		// нужно если slick+switching__tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".our-projects__item--fourth .switching .switching__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".our-projects__item--fourth .switching__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// tab5
	$(".our-projects__item--fifth .switching__tab-item").not(":first").hide();
	$(".our-projects__item--fifth .switching .switching__tab").click(function() {
		
		// нужно если slick+switching__tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".our-projects__item--fifth .switching .switching__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".our-projects__item--fifth .switching__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// tab6
	$(".our-projects__item--sixth .switching__tab-item").not(":first").hide();
	$(".our-projects__item--sixth .switching .switching__tab").click(function() {
		
		// нужно если slick+switching__tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".our-projects__item--sixth .switching .switching__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".our-projects__item--sixth .switching__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// slider 1 - shares
	$('.shares__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				// centerMode: true,
				// centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				// centerMode: true,
				// centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});

	// slider 2 - useful-articles
	$('.useful-articles__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				arrows: false,
				centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
				
	// popup1
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup1').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup1 и popup-overlay для их открытия
	  // $('.popup1').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup1').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup1
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup1').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup1').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup2
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup2').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup2 и popup-overlay для их открытия
	  // $('.popup2').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup2').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup2
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup2').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup2').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	$('.js-more').on('click', function(e) {
	  e.preventDefault();

	  // $('.flight-calendar__left').toggle();
	  // $('.flight-calendar__left').css('visibility', 'visible');

	  if ( $('.flight-calendar__left').css('visibility') == 'hidden' ) {
      $('.flight-calendar__left').css('visibility','visible');
      $('.flight-calendar__left').css('opacity','0');
      $('.flight-calendar__left').animate({opacity: "1"}, 1000);

      // bg
      $('.flight-calendar').css('background-image','none');

      // btn
      $('.flight-calendar__btn').hide('slow');


      // 767 и <
      // $('.flight-calendar__left').css('padding-top','600px');
      // $('.flight-calendar__btn').css('bottom','-830px');

      $(window).on('resize', function() {
        var win = $(this); //this = window

        if (win.width() <= 751) { 
        	// console.log('767');
        	$('.flight-calendar__left').css('padding-top','600px');


        }
        if (win.width() > 751) { 
        	console.log('more 767');
        	$('.flight-calendar__left').css('padding-top','0');

        }
      });

      $(window).trigger('resize');
		
	  }
	  else {
	  	$('.flight-calendar__left').animate({opacity: "0"}, 1000, function() {
	  		$('.flight-calendar__left').css('visibility','hidden');
	  	});
	  }

	});

	// email -> cf7
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			window.location.href = "../mailer/thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		
		return false;
	});

});