$(function() {
	// slick slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});

	// popups
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// email - new with verify
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		// проверка на стороне клиента формы через js что форма не пустая
		var name = $('#name1').val();
		var phone = $('#tel1').val();
		// console.log(name);
		// console.log(phone);

		if (name !== '' & phone !== '') {
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				
				//alert("Заявка отправлена!");
				window.location.href = "../mailer/thanks.html";
				
				$("form").trigger("reset");
				
				$('.popup').slideUp();
				$('.popup-overlay').css('display', 'none');
			});
		} else {
			alert('Данные не заполнены!');
		}
		return false;
	});

	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});

	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
	  // other options
	});

	// attention js - текст меняется здесь
	$('.item1').hover(function(e) {
		// $(this).find('.hidden1').css('display','none');
		// $(this).find('.hidden2').css('display', 'block');
		$(this).find('.hidden1').hide();
		$(this).find('img').hide();
		$(this).css('padding-top', '0px');
		$(this).find('.hidden2').show();
		
		// $(this).find('p').hide('300', function() {
		// 	$(this).text('При осуществлении сделок купли-продажи покупатель обязательно сопоставит фактическую планировку с планом техпаспорта, при этом выявленные несоответствия как минимум насторожат покупателя. Агентства недвижимости в таких случаях обычно предлагают значительно заниженную цену, простым покупателям проще отказаться от сделки.');
		// 	// $(this).find('p').css('padding-top', '0');
		// 	$(this).slideDown();
		// });

		// $(this).find('p').slideUp('slow', function () {
		// 	$(this).text('При осуществлении сделок купли-продажи покупатель обязательно сопоставит фактическую планировку с планом техпаспорта, при этом выявленные несоответствия как минимум насторожат покупателя. Агентства недвижимости в таких случаях обычно предлагают значительно заниженную цену, простым покупателям проще отказаться от сделки.');
		// 	// $(this).find('p').css('padding-top', '0');
		// 	$(this).slideDown();
		// });
	});
	$('.item1').mouseleave(function(e) {
		$(this).find('.hidden1').show();
		$(this).find('img').show();
		$(this).css('padding-top', '100px');
		$(this).find('.hidden2').hide();

		// $(this).find('p').slideDown();
		// $(this).find('p').text('При осуществлении сделок купли-продажи покупатель обязательно сопоставит фактическую планировку с планом техпаспорта, при этом выявленные несоответствия как минимум насторожат покупателя. Агентства недвижимости в таких случаях обычно предлагают значительно заниженную цену, простым покупателям проще отказаться от сделки.');
		// $(this).find('p').css('padding-top', '0');
	});

	$('.item2').hover(function(e) {
		$(this).find('.hidden1').hide();
		$(this).find('img').hide();
		$(this).find('div').css('padding-top', '0');
		$(this).find('.hidden2').show();
	});
	$('.item2').mouseleave(function(e) {
		$(this).find('.hidden1').show();
		$(this).find('img').show();
		$(this).find('div').css('padding-top', '90px');
		$(this).find('.hidden2').hide();
	});

	$('.item3').hover(function(e) {
		$(this).find('.hidden1').hide();
		$(this).find('img').hide();
		$(this).css('padding-top', '0');
		$(this).find('.hidden2').show();
	});
	$('.item3').mouseleave(function(e) {
		$(this).find('.hidden1').show();
		$(this).find('img').show();
		$(this).css('padding-top', '100px');
		$(this).find('.hidden2').hide();	
	});

	$('.item4').hover(function(e) {
		$(this).find('.hidden1').hide();
		$(this).find('img').hide();
		$(this).find('div').css('padding-top', '0');
		$(this).find('.hidden2').show();
	});
	$('.item4').mouseleave(function(e) {
		$(this).find('.hidden1').show();
		$(this).find('img').show();
		$(this).find('div').css('padding-top', '90px');
		$(this).find('.hidden2').hide();
	});

	$('.item5').hover(function(e) {
		$(this).find('.hidden1').hide();
		$(this).find('img').hide();
		$(this).find('span').hide();
		$(this)	.css('padding-top', '0');
		$(this).find('.hidden2').show();
	});
	$('.item5').mouseleave(function(e) {
		$(this).find('.hidden1').show();
		$(this).find('img').show();
		$(this).find('span').show();
		$(this).css('padding-top', '100px');
		$(this).find('.hidden2').hide();
	});

	$('.item6').hover(function(e) {
		$(this).find('.hidden1').hide();
		$(this).find('img').hide();
		$(this).find('div').css('padding-top', '0');
		$(this).find('.hidden2').show();
	});
	$('.item6').mouseleave(function(e) {
		$(this).find('.hidden1').show();
		$(this).find('img').show();
		$(this).find('div').css('padding-top', '90px');
		$(this).find('.hidden2').hide();
	});
	

	// $('.item2').on('click', function(e) {
	// 	$(this).find('p').text('Переоформление квартиры подразумевают внесение изменений в выписку ЕГРН, поскольку в ней должен быть вписан новый владелец. Выписка ЕГНР содержит технический план квартиры (вместо технического паспорта), выполняемый кадастровым инженером (инженером БТИ). При наличии несоответствий регистрирующий орган может оказать в переоформлении выписки.');
	// 	$(this).find('p').css('padding-top', '0');
	// });
	// $('.item3').on('click', function(e) {
	// 	$(this).find('p').text('Согласно статье 4 ЖК РФ самовольно переустроенное или перепланированное помещение должно быть приведено в прежнее состояние в соответствии с техническим паспортом на квартиру, в противном случае суд может принять решение о продаже помещения с публичных торгов с выплатой собственнику вырученных от продажи средств за вычетом расходов на исполнение судебного решения.');
	// 	$(this).find('p').css('padding-top', '0');
	// });
	// $('.item4').on('click', function(e) {
	// 	$(this).find('p').text('В соответствии со статьей 7.21 КоАП самовольная перепланировка жилых помещений в многоквартирных домах влечет наложение административного штрафа на граждан в размере от 2000 до 2500 рублей.');
	// 	$(this).find('p').css('padding-top', '0');
	// });
	// $('.item5').on('click', function(e) {
	// 	$(this).find('p').text('Покупка квартиры с незаконной перепланировкой подразумевает, что проблемы с документами лягут на плечи новых владельцев и не факт, что незаконная перепланировка улучшает жилищные условия, и что ее можно будет узаконить в будущем. В связи с этим агентствам недвижимости приходится существенно снижать стоимость таких квартир, ведь заплатив не малые суммы за квадратные метры, покупателю еще достаются проблемы с документами.');
	// 	$(this).find('p').css('padding-top', '0');
	// });
	// $('.item6').on('click', function(e) {
	// 	$(this).find('p').html('Причин для жалоб соседей на незаконную перепланировку может быть достаточно много: <br> - шум во время проведения работ; <br>- ухудшение работы вентиляции, отопления, водопровода в их квартирах, в следствии переустройства инженерных систем в вашей квартире; <br>- появление прогибов и трещин в стенах и перекрытиях соседних квартир; <br>- просто противный характер. <br>Соседи могут подать жалобу в жилиспекцию и тогда проблем будет не избежать, начиная от штрафов, заканчивая судебными тяжбами. В настоящее время возможно узаконить практически любую уже выполненную перепланировку, однако, законодательство в этой области регулярно меняется и в будущем узаконить перепланировку или переустройство жилых, или коммерческих помещений может стоить существенно дороже, либо вообще оказаться невозможным.');
	// 	$(this).find('p').css('padding-top', '0');
	// });



	// // fancybox - text
	// $("a#inline").fancybox({
	// 	'hideOnContentClick': true
	// });


});