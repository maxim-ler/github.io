$(function() {
	// wow js
	// new WOW().init();



	// $('.popup').customScroll();



	$('.our-clients .container .our-clients-slider img').on('mouseenter', function(e) {
		// alert(e.target.src);
		// alert($(this).attr('src'));

		$(this).attr('src', $(this).attr('src'))
	});



	// +7 (___) ___-__-__
	$(".phone").mask("+7 (999) 999-99-99");
	


	// slick our-clients-slider
	$('.our-clients-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
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
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});



	// slick our-partners-slider
	$('.our-partners-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
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
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});



	// slick certificate-slider
	$('.certificates-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: true,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
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
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});



	// slick reviews-slider
	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: true,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
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
			  breakpoint: 480,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider").slick('reinit');
	


	// magnific-popup
	//$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
		type: 'image',
		//delegate: 'a', // child items selector, by clicking on it popup will open, example .parent-container a
		zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  // other options
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

	  if(scrolled > 700) {
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
	}



	// popup
	// ставим на кнопку которая вызывает данный popup
	// попапы на товары 1-11 js-popup10 js-popup11 ... js-popup20
	$('.js-popup10').on('click', function(e) {
	  e.preventDefault();

	  $('.popup10').slideDown(600);
	  $('.popup-overlay10').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay10').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup10').slideUp(600, function() {
				// stop iframe video play after close popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});
			$('.popup-overlay10').fadeOut();
			// $('.popup').find("input").val(""); // off in wp
	  });
	});
	$('.js-popup11').on('click', function(e) {
	  e.preventDefault();

	  $('.popup11').slideDown(600);
	  $('.popup-overlay11').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay11').on('click', function(e) {
			$('.popup11').slideUp(600, function() {
				
			});
			$('.popup-overlay11').fadeOut();
	  });
	});
	$('.js-popup12').on('click', function(e) {
	  e.preventDefault();

	  $('.popup12').slideDown(600);
	  $('.popup-overlay12').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay12').on('click', function(e) {
			$('.popup12').slideUp(600, function() {
				
			});
			$('.popup-overlay12').fadeOut();
	  });
	});
	$('.js-popup13').on('click', function(e) {
	  e.preventDefault();

	  $('.popup13').slideDown(600);
	  $('.popup-overlay13').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay13').on('click', function(e) {
			$('.popup13').slideUp(600, function() {
				
			});
			$('.popup-overlay13').fadeOut();
	  });
	});
	$('.js-popup14').on('click', function(e) {
	  e.preventDefault();

	  $('.popup14').slideDown(600);
	  $('.popup-overlay14').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay14').on('click', function(e) {
			$('.popup14').slideUp(600, function() {
				
			});
			$('.popup-overlay14').fadeOut();
	  });
	});
	$('.js-popup15').on('click', function(e) {
	  e.preventDefault();

	  $('.popup15').slideDown(600);
	  $('.popup-overlay15').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay15').on('click', function(e) {
			$('.popup15').slideUp(600, function() {
				
			});
			$('.popup-overlay15').fadeOut();
	  });
	});
	$('.js-popup16').on('click', function(e) {
	  e.preventDefault();

	  $('.popup16').slideDown(600);
	  $('.popup-overlay16').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay16').on('click', function(e) {
			$('.popup16').slideUp(600, function() {
				
			});
			$('.popup-overlay16').fadeOut();
	  });
	});
	$('.js-popup17').on('click', function(e) {
	  e.preventDefault();

	  $('.popup17').slideDown(600);
	  $('.popup-overlay17').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay17').on('click', function(e) {
			$('.popup17').slideUp(600, function() {
				
			});
			$('.popup-overlay17').fadeOut();
	  });
	});
	$('.js-popup18').on('click', function(e) {
	  e.preventDefault();

	  $('.popup18').slideDown(600);
	  $('.popup-overlay18').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay18').on('click', function(e) {
			$('.popup18').slideUp(600, function() {
				
			});
			$('.popup-overlay18').fadeOut();
	  });
	});
	$('.js-popup19').on('click', function(e) {
	  e.preventDefault();

	  $('.popup19').slideDown(600);
	  $('.popup-overlay19').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay19').on('click', function(e) {
			$('.popup19').slideUp(600, function() {
				
			});
			$('.popup-overlay19').fadeOut();
	  });
	});
	$('.js-popup20').on('click', function(e) {
	  e.preventDefault();

	  $('.popup20').slideDown(600);
	  $('.popup-overlay20').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay20').on('click', function(e) {
			$('.popup20').slideUp(600, function() {
				
			});
			$('.popup-overlay20').fadeOut();
	  });
	});







	$('.js-popup4').on('click', function(e) {
	  e.preventDefault();

	  $('.popup4').slideDown(600);
	  $('.popup-overlay').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup4').slideUp(600, function() {
				
				// stop iframe video play after close popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});
			$('.popup-overlay').fadeOut();
			// $('.popup').find("input").val(""); // off in wp
	  });
	});

	$('.js-popup3').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // $('.popup3 .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  var prod = $(this).attr('data-production');
	
	  $('.'+prod).slideDown(600);
	  $('.popup-overlay3').fadeIn();
	  
	  // поиск button close popup
	  $('.js-close-popup3, .popup-overlay3').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.'+prod).slideUp(600);
			$('.popup-overlay3').fadeOut();
	  });
	});




	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();

		var $that = $(this),
		formData = new FormData($that.get(0)); 

		$.ajax({
			type: "POST",
			url: "smart.php",	// url: "smart.php", даже если js и php не в одной папке!
			contentType: false, // важно - убираем форматирование данных по умолчанию
      processData: false, // важно - убираем преобразование строк по умолчанию
			data: formData
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			// window.location.href = "thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp(600);
			$('.popup-overlay').fadeOut();



			// открываем popup2
			$('.popup2').slideDown(600);
			$('.popup-overlay').fadeIn();
				  
		  // поиск button close popup
		  $('.js-close-popup, .popup-overlay').on('click', function(e) {
				// $('.popup').css('display', 'none');
				// $('.popup-overlay').css('display', 'none');
				// or
				$('.popup2').slideUp(600, function() {
					
					// stop iframe video play after close popup
					// var video = $(".popup iframe").attr("src");
					// $(".popup iframe").attr("src", "");
					// $(".popup iframe").attr("src", video);
				});
				$('.popup-overlay').fadeOut();
				$('.popup-overlay10').fadeOut();
				$('.popup-overlay11').fadeOut();
				$('.popup-overlay12').fadeOut();
				$('.popup-overlay13').fadeOut();
				$('.popup-overlay14').fadeOut();
				$('.popup-overlay15').fadeOut();
				$('.popup-overlay16').fadeOut();
				$('.popup-overlay17').fadeOut();
				$('.popup-overlay18').fadeOut();
				$('.popup-overlay19').fadeOut();
				$('.popup-overlay20').fadeOut();
				// $('.popup').find("input").val(""); // off in wp
		  });

		});
		
		return false;
	});

});