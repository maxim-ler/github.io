$(function() {
	$("#phone1").mask("+7 (999) 99-99-99");



	$('.js-form-reg').on('click', function(e) {
		$('.form-reg').fadeOut('slow', function() {
			$('.form-reg2').fadeIn();
		});
	});



	$('.js-form-reg2').on('click', function(e) {
		$('.form-reg2').fadeOut('slow', function() {
			$('.form-reg3').fadeIn();
		});
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
		$('.popup').slideUp();
		$('.popup-overlay').css('display', 'none');
		
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
	  // $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup2').css('display', 'block');
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



	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});
		




	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		$name = $('#namepopup').val();
		$phone = $('#namephone').val();
		$email = $('#nameemail').val();

		// form-reg
		$name1 = $('.form-reg #name1').val();
		$name2 = $('.form-reg #name2').val();
		$name3 = $('.form-reg #name3').val();
		$phone1 = $('.form-reg #phone1').val();
		$email1 = $('.form-reg #email1').val();

		// serialize
		$land = $('.form-reg2 #land').val();
		$city = $('.form-reg2 #city').val();
		$discipline = $('.form-reg2 #discipline').val();
	
		// Формат тренировок - Индивидуальная
		$switch1 = $('.form-reg2 input[name="switch1"]').is(':checked');
		// Формат тренировок - Групповая
		$switch2 = $('.form-reg2 input[name="switch2"]').is(':checked');
		// Формат тренировок - Туры
		$switch3 = $('.form-reg2 input[name="switch3"]').is(':checked');



		console.log($name + '\n' + $phone + '\n' + $email + '\n' + $name1 + '\n' +
								$name2 + '\n' + $name3 + '\n' + $phone1 + '\n' + $email1 + '\n' +
								$land + '\n' + $city + '\n' + $discipline + '\n' + $switch1 + '\n' +
								$switch2 + '\n' + $switch3 + '\n');

		$.ajax({
			type: "POST",
			data: {
				name: $name,
				email: $email,
				phone: $phone,

				name1: $name1,
				name2: $name2,
				name3: $name3,
				phone1: $phone1,
				email1: $email1,

				land: $land,
				city: $city,
				discipline: $discipline,
				switch1: $switch1,
				switch2: $switch2,
				switch3: $switch3
		  },
			url: "smart.php"
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			// window.location.href = "../mailer/thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		
		return false;
	});

});