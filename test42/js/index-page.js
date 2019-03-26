$(function() {
	// запуск и подключение icheck
	// $('input').iCheck({
	// 	checkboxClass: 'icheckbox_polaris',
	// 	radioClass: 'iradio_polaris'
	// });

	// wow js
	// new WOW().init();



	// accordion jquery
	// $('#accordion-js').find('h2').click(function() {
	// 	$(this).next().stop().slideToggle();
	// }).next().stop().hide();




	$('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $(this).toggleClass('menu-btn_active');
	  $('.menu-nav').toggleClass('menu-nav_active');
	});

	$('.menu-nav a').on('click', function(e) {
		$('.menu-btn span').trigger('click');
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

	  if(scrolled > 800) {
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

	  var scrolled2 = window.pageYOffset || document.documentElement.scrollTop;
	  // console.log(scrolled);

	  if(scrolled2 > 100) {
			// $('.arrow').css('display', 'block');
			$('.header-container').css('background', '#F3F2F8');
			$('.header-container').css('box-shadow', 'rgba(0, 0, 0, 0.2) 0px 1px 3px');
	  }
	  else {
			// $('.arrow').css('display', 'none');
			$('.header-container').css('background', 'transparent');
	  }
	};





	//uses classList, setAttribute, and querySelectorAll
	//if you want this to work in IE8/9 youll need to polyfill these
	(function(){
		var d = document,
		accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
		setAria,
		setAccordionAria,
		switchAccordion,
	  touchSupported = ('ontouchstart' in window),
	  pointerSupported = ('pointerdown' in window);
	  
	  skipClickDelay = function(e){
	    e.preventDefault();
	    e.target.click();
	  }

			setAriaAttr = function(el, ariaType, newProperty){
			el.setAttribute(ariaType, newProperty);
		};
		setAccordionAria = function(el1, el2, expanded){
			switch(expanded) {
	      case "true":
	      	setAriaAttr(el1, 'aria-expanded', 'true');
	      	setAriaAttr(el2, 'aria-hidden', 'false');
	      	break;
	      case "false":
	      	setAriaAttr(el1, 'aria-expanded', 'false');
	      	setAriaAttr(el2, 'aria-hidden', 'true');
	      	break;
	      default:
					break;
			}
		};
	//function
	switchAccordion = function(e) {
	  console.log("triggered");
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if(thisAnswer.classList.contains('is-collapsed')) {
			setAccordionAria(thisQuestion, thisAnswer, 'true');
		} else {
			setAccordionAria(thisQuestion, thisAnswer, 'false');
		}
	  	thisQuestion.classList.toggle('is-collapsed');
	  	thisQuestion.classList.toggle('is-expanded');
			thisAnswer.classList.toggle('is-collapsed');
			thisAnswer.classList.toggle('is-expanded');
	 	
	  	thisAnswer.classList.toggle('animateIn');
		};
		for (var i=0,len=accordionToggles.length; i<len; i++) {
			if(touchSupported) {
	      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
	    }
	    if(pointerSupported){
	      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
	    }
	    accordionToggles[i].addEventListener('click', switchAccordion, false);
	  }
	})();










	document.querySelectorAll('.cocoen').forEach(function(element){
	  new Cocoen(element);
	});



	// tabs jquery
	$(function() {
		$(".tab_item").not(":first").hide();
		$(".wrap .tab").click(function() {
			
			// нужно если slick+tab
			//$('.slider').slick('slickGoTo', 0, false);
			
			$(".wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	});
	



	// magnific-popup
	//$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade'
		// zoom: {
		// 	enabled: true,
		// 	duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		// },
	  // other options
	});

	$('.popup-link2').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		// zoom: {
		// 	enabled: true,
		// 	duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		// },
		gallery: {
			// options for gallery
			enabled: true,
			navigateByImgClick: true
		}
	});

	// slick slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
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
	
	/*
	if(currentSlide == 0) {
		$('.slider5 .slick-prev').css('background', 'url(../img/slider5-arrow-left-grey.png) 0 0 no-repeat');
	}
	if(currentSlide == slick.slideCount-1) {
		$('.slider5 .slick-next').css('background', 'url(../img/slider5-arrow-right-grey.png) 0 0 no-repeat');
	}
	if(currentSlide != 0 && currentSlide != slick.slideCount-1) {
		$('.slider5 .slick-prev').css('background', 'url(../img/slider5-arrow-left.png) 0 0 no-repeat');
		$('.slider5 .slick-next').css('background', 'url(../img/slider5-arrow-right.png) 0 0 no-repeat');
	}
	*/



	// slick slider2
	// $(".slider2").on('init', function(event, slick) {
	// });

	

	$('.slider2').on('init', function(event, slick){
		$(this).find('.slick-prev').css('display', 'none');
	});	

	$('.slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		infinite: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: false,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;">&#8592; Back</button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;">Next &#8594;</button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});

	$('.slider2').on('afterChange', function(event, slick, currentSlide, nextSlide){

		$(this).find('.slick-prev').css('display', 'block');
		if(currentSlide == 0) {
			// $(this).find('.slick-next').removeClass('js-next');
			$(this).find('.slick-prev').css('display', 'none');
			$(this).find('.slick-next').css('width', '110px');
			$(this).find('.slick-next').text('NEXT');
		}
		if(currentSlide == 1) {
			// $(this).find('.slick-next').addClass('js-next');
			$(this).find('.slick-prev').css('display', 'block');
			$(this).find('.slick-next').css('width', '200px');
			$(this).find('.slick-next').text('Узнать стоимость');
		}
	});

	$('.slider2 .slick-next').on('click', function(e) {
		if ($(this).text() == 'Узнать стоимость') {
			if($('.slider2 .phone').val() == '') {
				$('.slider2 .phone').css('border', '2px solid #f00');

				if (!$('.slider2 .phone-inner p').hasClass('append')) {
					$('.slider2 .phone-inner').append('<p style="margin-top: 0px; margin-bottom: 20px; color: #f00;" class="append">Пожалуйста, заполните все обязательные поля</p>');
				}
			}
			else {
				$('.slider2 .phone').css('border', 'none');
				$(".slider2 p.append").remove();

				// send
				// alert('Ваша заявка отправлена');

				$('.slider2').append('<p style="margin-top: 0px; font-size: 24px; padding-bottom: 20px; color: #fff;" class="append2">Спасибо! Данные успешно отправлены.</p>');
				$('.slider2 input').val('');
			}
		}
	});

	
	/*
	if(currentSlide == 0) {
		$('.slider5 .slick-prev').css('background', 'url(../img/slider5-arrow-left-grey.png) 0 0 no-repeat');
	}
	if(currentSlide == slick.slideCount-1) {
		$('.slider5 .slick-next').css('background', 'url(../img/slider5-arrow-right-grey.png) 0 0 no-repeat');
	}
	if(currentSlide != 0 && currentSlide != slick.slideCount-1) {
		$('.slider5 .slick-prev').css('background', 'url(../img/slider5-arrow-left.png) 0 0 no-repeat');
		$('.slider5 .slick-next').css('background', 'url(../img/slider5-arrow-right.png) 0 0 no-repeat');
	}
	*/








	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  // $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));

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
			$('.popup').slideUp('300', function() {
				
				// stop iframe video play after close popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});
			$('.popup-overlay').css('display', 'none');
			// $('.popup').find("input").val(""); // off in wp
			
			// для wp cf7
			// $("form").trigger("reset");
			// $("form .wpcf7-not-valid-tip").hide();
			// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	  });
	});

	// $('.js-popup2').on('click', function(e) {
	//   e.preventDefault();

	//   // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	//   // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	//   // $('.popup2 .main-form input[name="user_data"]').val($(this).attr('data-user'));

	//   // поиск popup и popup-overlay для их открытия
	//   // $('.popup').css('display', 'block');
	//   // $('.popup-overlay').css('display', 'block');
	//   // or
	//   $('.popup2').slideDown();
	//   $('.popup-overlay').css('display', 'block');
	  
	//   // поиск button close popup
	//   $('.js-close-popup, .popup-overlay').on('click', function(e) {
	// 		// $('.popup').css('display', 'none');
	// 		// $('.popup-overlay').css('display', 'none');
	// 		// or
	// 		$('.popup2').slideUp();
	// 		$('.popup-overlay').css('display', 'none');
			
	// 		// для wp cf7
	// 		// $("form").trigger("reset");
	// 		// $("form .wpcf7-not-valid-tip").hide();
	// 		// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	//   });
	// });




	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		$.ajax({
			type: "POST",
			url: "../smart.php",
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			window.location.href = "../thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
				
		return false;
	});


});