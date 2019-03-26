// arrow
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
};

$(function() {

	// number in popup
	$(".popup input[type='tel']").numeric();



	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});



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


	// menu2
	$('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $(this).toggleClass('menu-btn_active');
	  $('.menu-nav').toggleClass('menu-nav_active');
	});




	// tabs jquery
	$(".tab_item").not(":first").hide();
	$(".wrap .tab").click(function() {
		
		// нужно если slick+tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	// tabs jquery
	$(".tab_item2").not(":first").hide();
	$(".wrap2 .tab2").click(function() {
		
		// нужно если slick+tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".wrap2 .tab2").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item2").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	// tabs jquery
	$(".tab_item3").not(":first").hide();
	$(".wrap3 .tab3").click(function() {
		
		// нужно если slick+tab
		//$('.slider').slick('slickGoTo', 0, false);
		
		$(".wrap3 .tab3").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item3").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");




	


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
			$('.popup').find("input").val("");
			
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