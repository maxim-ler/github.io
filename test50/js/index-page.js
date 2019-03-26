$(function() {
	// slick slider
	$('.slider').slick({
		slidesToShow: 1,
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
		autoplaySpeed: 5000,
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
	//$(".slider").slick('reinit');

	// slick slider2
	$('.slider2').slick({
		slidesToShow: 1,
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
		autoplaySpeed: 5000,
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
	//$(".slider2").slick('reinit');



	// magnific-popup
	//$('.image-link').magnificPopup({type:'image'});
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

	  // поиск popup и popup-overlay для их открытия
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
			$('.popup').slideUp('300', function() {
				
				// stop iframe video play after close popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});
			$('.popup-overlay').css('display', 'none');
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




	var countdown = document.querySelector('.countdown2');
        
  // Update every second
  var x = setInterval( function() {
    // Set Launch Date (ms)
  var launchDate = new Date('March 30, 2019 00:00:00').getTime();
    // Get todays date and time (ms)
    var now = new Date().getTime();
  
    // Distance from now and the launch date (ms)
    var distance = launchDate - now;
  
    // Time calculation
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display result
    countdown.innerHTML = `
    <div>${days}<span></span></div> 
    <div>${hours}<span></span></div>
    <div>${mins}<span></span></div>
    <div>${seconds}<span></span></div>
    `;
  
    // If launch date is reached
    if (distance < 0) {
      // Stop countdown
      clearInterval(intvl);
      // Style and output text
      countdown.style.color = '#17a2b8';
      countdown.innerHTML = 'Launched!';
    }
  }, 1000);





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
		
		return false;
	});

});