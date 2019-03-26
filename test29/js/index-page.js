$(function() {
	// slick slider
	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			}
	  ]
	});
	//$(".slider").slick('reinit');



	// slick slider2
	$('.slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 575,
			  settings: {
				arrows: true,
				dots: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				dots: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider2").slick('reinit');



	// slick slider3
	$('.slider3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		dots: true,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider3").slick('reinit');



	// slick slider4
	$('.slider4').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		dots: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: false,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				dots: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: false,
				dots: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider4").slick('reinit');


	// slick slider5
	$('.slider5').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: false,
		dots: true,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				dots: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: false,
				dots: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider5").slick('reinit');

	// stop slider5 when click
	$('.slider5 .video').on('click', function(e) {
		$('.slider5').slick('slickPause');
		// $('.slider5').slick(
		// 	{
		// 			arrows: false,
		// 			dots: false
		// 	}
		// );
	});



	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
		// $('.popup').css('display', 'none');
		// $('.popup-overlay').css('display', 'none');
		// or
		$('.popup').slideUp();
		$('.popup-overlay').css('display', 'none');
		
		// для wp cf7
		// $("form").trigger("reset");
		// $("form .wpcf7-not-valid-tip").hide();
		// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	  });
	});



	// email
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



	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});



	// onscroll
	window.onscroll = function() {
	  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  // console.log(scrolled);

	  if(scrolled > 3700) {
	  // $('.arrow').css('display', 'block');
	  $('.arrow').show('slow', function() {
	    //
	  });
	  }
	  else {
	  // $('.arrow').css('display', 'none');
	  $('.arrow').hide('slow', function() {
	    //
	  });
	  }
	};



	// js click .slider
	// $('.lektor-training .slider .img span').on('mouseenter', function(e) {
	// 	// console.log('enter');
	// 	$(this).parent().find('.description').show('300');
	// });
	// $('.lektor-training .slider .img span').on('mouseleave', function(e) {
	// 	// console.log('leave');
	// 	$(this).parent().find('.description').hide('300');
	// });

	$('.lektor-training-slides .img span').on('mouseenter', function(e) {
		// console.log('enter');
		$(this).parent().find('.description').show('300');
	});
	$('.lektor-training-slides .img span').on('mouseleave', function(e) {
		// console.log('leave');
		$(this).parent().find('.description').hide('300');
	});







	// detect div visible or not visible on scroll
	// $(window).scroll(function(){
	//     // This is then function used to detect if the element is scrolled into view
	//     function elementScrolled(elem)
	//     {
	//         var docViewTop = $(window).scrollTop();
	//         var docViewBottom = docViewTop + $(window).height();
	//         var elemTop = $(elem).offset().top;
	//         return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
	//     }
	     
	//     // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
	//     if(!elementScrolled('.hotel .slider3')) {
	//        // $(this).slick('slickPause');
	//     }
	// });


});