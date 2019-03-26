$(function() {
	
	// magnific-popup
	$('.popup-link1').magnificPopup({
		type: 'image',
		zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  // other options
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
			
			// для wp cf7
			// $("form").trigger("reset");
			// $("form .wpcf7-not-valid-tip").hide();
			// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	  });
	});

	$('.js-popup2').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  // $('.popup2 .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup2').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup2').slideUp();
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
			url: "../smart.php",	// url: "smart.php", даже если js и php не в одной папке!
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			// window.location.href = "../thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');

		  $('.popup3').slideDown();
		  $('.popup-overlay').css('display', 'block');
		  
		  // поиск button close popup
		  $('.js-close-popup, .popup-overlay').on('click', function(e) {
				// $('.popup').css('display', 'none');
				// $('.popup-overlay').css('display', 'none');
				// or
				$('.popup3').slideUp();
				$('.popup-overlay').css('display', 'none');
				
				// для wp cf7
				// $("form").trigger("reset");
				// $("form .wpcf7-not-valid-tip").hide();
				// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
		  });
		});
		
		return false;
	});

});