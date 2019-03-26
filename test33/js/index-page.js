$(function() {

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
		
		// проверка на стороне клиента формы через js что форма не пустая
		// var name = $('.name1').val();
		// var phone = $('.tel1').val();
		// console.log(name);
		// console.log(phone);

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
		
		// if (name !== '' & phone !== '') {
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "mailer/smart.php",
		// 		data: $(this).serialize()
		// 	}).done(function() {
		// 		$(this).find("input").val("");
				
		// 		//alert("Заявка отправлена!");
		// 		window.location.href = "../mailer/thanks.html";
				
		// 		$("form").trigger("reset");
				
		// 		$('.popup').slideUp();
		// 		$('.popup-overlay').css('display', 'none');
		// 	});
		// } else {
		// 	alert('Данные не заполнены!');
		// }
		
		return false;
	});
	


	// slick promo__slider
	$('.promo__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3500,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				dots: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
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

	// slick reviews slider
	$('.reviews__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3500,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				dots: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: false,
				dots: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				dots: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
		
	//$(".slider").slick('reinit');


	var last = '';
	$('.types-jobs li').on('mouseenter', function(e) {
		last = $(this).find('img').attr('src');
		var f = $(this).find('img').attr('src').split(".").slice(0, -1).join(".");
		$(this).find('img').attr('src', f+'-hover.png');
	});

	$('.types-jobs li').on('mouseleave', function(e) {
		$(this).find('img').attr('src', last);
	});


	// magnific-popup
	// $('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image',
	  zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		}
	  // other options
	});

	$('.popup-link2').magnificPopup({
	  type: 'image',
	  zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  gallery: {
      // options for gallery
      enabled: true
    }
	});

	$('.popup-link3').magnificPopup({
	  type: 'image',
	  zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  gallery: {
      // options for gallery
      enabled: true
    }
	});

	$('.popup-link4').magnificPopup({
	  type: 'image',
	  zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  gallery: {
      // options for gallery
      enabled: true
    }
	});



	// jQuery smooth scrolling
	$('.go_to1').click( function() {
		var scroll_el = $(this).attr('href');
	  
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900);
		}

		return false;
	});



	// onscroll
	window.onscroll = function() {
	  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  // console.log(scrolled);

	  if(scrolled > 600) {
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


	$('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $(this).toggleClass('menu-btn_active');
	  $('.menu-nav').toggleClass('menu-nav_active');
	});

});