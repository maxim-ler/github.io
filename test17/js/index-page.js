$(function() {
	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top-80 }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});

	
	
	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  // e.preventDefault();

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



	// var HeaderTop = $('.header-menu').offset().top;
	// $(window).scroll(function(){
	//  if( $(window).scrollTop() > HeaderTop ) {
	//  	$('.header-menu').css({position: 'fixed', top: '0px'});
	//  } else {
	//   $('.header-menu').css({position: 'static'});
	//  }
	// });




	// var HeaderTop = $('.header-menu').css('height');
	// $('.screen1 .container').css('padding-top', parseInt(HeaderTop)-45);
	// $('.screen1').css('background-position-y', parseInt(HeaderTop)-35);
	// $('.screen1 .main').css('margin-top', 20);

	// коррекция js
	var HeaderTop = $('.header-menu').css('height');
	$('.screen1 .container').css('padding-top', parseInt(HeaderTop));
	$('.screen1').css('background-position-y', parseInt(HeaderTop));
	// $('.screen1 .main').css('margin-top', 20);

	$('.screen2 .container').css('padding-top', parseInt(HeaderTop));
	$('.screen2').css('background-position-y', parseInt(HeaderTop));
	// $('.screen2 .main').css('margin-top', 20);

	$('.screen3 .container').css('padding-top', parseInt(HeaderTop));
	$('.screen3').css('background-position-y', parseInt(HeaderTop));
	// $('.screen3 .main').css('margin-top', 20);

	$('.screen4 .container').css('padding-top', parseInt(HeaderTop));
	$('.screen4').css('background-position-y', parseInt(HeaderTop));
	// $('.screen4 .main').css('margin-top', 20);

	$('.screen5 .container').css('padding-top', parseInt(HeaderTop));
	$('.screen5').css('background-position-y', parseInt(HeaderTop));
	// $('.screen5 .main').css('margin-top', 20);



	// $(window).resize(function() {
	// 	// var HeaderTop = $('.header-menu').offset().top;

	// 	var HeaderTop = $('.header-menu').css('height');
	// 	$('.screen1 .main').css('padding-top', parseInt(HeaderTop)-35);
	// 	$('.screen1').css('background-position-y', parseInt(HeaderTop)-35);
	// });





	// // .second-menu
	// $('.second-menu ul li a').on('click', function(e) {
	// 	e.preventDefault();
	// 	// old method
	// 	// $(this).parent().parent().find('li').css('background', 'url(../img/circle-off.png)');
	// 	// $(this).parent().css('background', 'url(../img/circle-on.png)');
	// 	$(this).parent().parent().find('li').removeClass('active');
	// 	$(this).parent().addClass('active');
	// });



	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		scrollBar: false,
		scrollOverflow: true,
		navigation: true,
		navigationPosition: 'left',
		showActiveTooltip: true,
		onLeave: function(origin, destination, direction) {
			var HeaderTop2 = $('.header-menu').css('height');
			$('.screen'+destination+' div .container').css('padding-top', parseInt(HeaderTop2));
			// $('.screen'+destination+' div .container').css('padding-top', parseInt(HeaderTop2)-45);
			// console.log($('.screen'+origin+' > .container'));
		}
	});
	//methods
	// $.fn.fullpage.setAllowScrolling(false);


	// $('.js-arrow').on('click', function(e) {
	// 	$.fn.fullpage.moveSectionDown();
	// });


	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
	  // other options
	});


	// menu click
	function resetLinks(t) {
		$(t).parent().parent().find('a').css('color', '#000');
		$(t).parent().parent().find('a').css('text-decoration', 'none');
	}
	$('.menu a').on('click', function(e) {
		e.preventDefault();

		var temp = $(this).attr('href');

		if (temp == '#assortiment') {
			$.fn.fullpage.moveTo(2);

			resetLinks(this);
			$(this).css('color', '#cf1d20');
			$(this).css('text-decoration', 'underline');
		}
		if (temp == '#features') {
			$.fn.fullpage.moveTo(3);

			resetLinks(this);
			$(this).css('color', '#cf1d20');
			$(this).css('text-decoration', 'underline');

		}
		if (temp == '#services') {
			$.fn.fullpage.moveTo(4);

			resetLinks(this);
			$(this).css('color', '#cf1d20');
			$(this).css('text-decoration', 'underline');
		}
		if (temp == '#certificates') {
			$.fn.fullpage.moveTo(5);

			resetLinks(this);
			$(this).css('color', '#cf1d20');
			$(this).css('text-decoration', 'underline');
		}
	});


	// .second-menu
	// $('.second-menu ul li').on('click', function(e) {
	// 	// e.preventDefault();

	// 	$(this).parent().find('img').attr('src', 'img/circle-off.png');
	// 	$(this).find('img').attr('src', 'img/circle-on.png');


	// 	// изменение двух меню
	// 	var id = $(this).attr('data-id');

	// 	// .second-menu2
	// 	$('.second-menu2 ul li').parent().find('img').attr('src', 'img/circle-off.png');
	// 	$('.second-menu2 ul li').eq(id).find('img').attr('src', 'img/circle-on.png');
		
	// 	// console.log($('.second-menu2 ul li').eq(id));
	// });

	// .second-menu2
	// $('.second-menu2 ul li').on('click', function(e) {
	// 	e.preventDefault();

	// 	$(this).parent().find('img').attr('src', 'img/circle-off.png');
	// 	$(this).find('img').attr('src', 'img/circle-on.png');


	// 	// изменение двух меню
	// 	var id2 = $(this).attr('data-id');

	// 	// .second-menu
	// 	$('.second-menu ul li').parent().find('img').attr('src', 'img/circle-off.png');
	// 	$('.second-menu ul li').eq(id2).find('img').attr('src', 'img/circle-on.png');
		
	// 	// console.log($('.second-menu ul li').eq(id));
	// });

	});