$(function() {
	// slick slider
	$('.slider').slick({
		slidesToShow: 4,
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
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
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
	//$(".slider").slick('reinit');

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
			  breakpoint: 991,
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
	//$(".slider2").slick('reinit');

	$('.slider3').slick({
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
	//$(".slider3").slick('reinit');



	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
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

	  if(scrolled > 1200) {
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



	// menu change active
	// $('.main-menu ul li a').on('click', function(e) {
	// 	// reset all active main-menu
	// 	$(this).parent().parent().find('li').removeClass('active');

	// 	// add active main-menu
	// 	$(this).parent().addClass('active');



	// 	// reset all active bottom-menu
	// 	$('.bottom-menu ul li a').parent().parent().find('li').removeClass('active');
	// 	var nameHref = $(this).attr('href');
	// 	// add active bottom-menu
	// 	$('.bottom-menu ul li a').find('[href="'+nameHref+'"]');
	// 	// console.log($('.bottom-menu ul a[href="'+nameHref+'"]'));
	// 	$('.bottom-menu ul a[href="'+nameHref+'"]').parent().addClass('active');
	// });








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
		// event.preventDefault();

		// $.ajax({
		// 	type: "POST",
		// 	url: "mailer/smart.php",
		// 	data: $(this).serialize()
		// }).done(function(data) {
		// 	$(this).find("input").val("");
			
		// 	//alert("Заявка отправлена!");
		// 	window.location.href = "../mailer/thanks.html";
			
		// 	$("form").trigger("reset");
			
		// 	$('.popup').slideUp();
		// 	$('.popup-overlay').css('display', 'none');
		// });
		
		// return false;
	});

});