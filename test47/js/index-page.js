$(function() {

	// slick slider reviews
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: true,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
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
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider").slick('reinit');
	


	// ru/eng change
	$('#lang').on('change', function(e) {
		if($(this).val() == 1) {
			$('.header .header-left').css('background-image',  'url(img/ru.jpg)');
		}
		if($(this).val() == 2) {
			$('.header .header-left').css('background-image',  'url(img/eng.jpg)');
		}
	});



	// hover js-assortiment2-n
	$('.js-item1').on('mouseenter', function(e) {
		$('.js-assortiment2-2').hide(300);
		$('.js-assortiment2-3').hide(300);
		$('.js-assortiment2-1').show('slow');
	});
	$('.js-item1').on('mouseleave', function(e) {
		// $('.js-assortiment2-1').hide(300);
	});

	$('.js-item2').on('mouseenter', function(e) {
		$('.js-assortiment2-1').hide(300);
		$('.js-assortiment2-3').hide(300);
		$('.js-assortiment2-2').show('slow');
	});
	$('.js-item2').on('mouseleave', function(e) {
		// $('.js-assortiment2-2').hide(300);
	});

	$('.js-item3').on('mouseenter', function(e) {
		$('.js-assortiment2-1').hide(300);
		$('.js-assortiment2-2').hide(300);
		$('.js-assortiment2-3').show('slow');
	});
	$('.js-item3').on('mouseleave', function(e) {
		// $('.js-assortiment2-3').hide(300);
	});



	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});



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
			
	  });
	});



	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();

		$.ajax({
			type: "POST",
			url: "smart.php",	// url: "smart.php", даже если js и php не в одной папке!
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			window.location.href = "../thanks.html";
			
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
});