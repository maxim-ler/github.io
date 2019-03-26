$(function() {

	// slick slider1
	$('.slider1-slides').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
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
			  breakpoint: 1300,
			  settings: {
					arrows: false,
					dots: true,
					//centerMode: true,
					//centerPadding: '40px',
					slidesToShow: 4
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
					arrows: false,
					dots: true,
					//centerMode: true,
					//centerPadding: '40px',
					slidesToShow: 3
			  }
			},
			{
			  breakpoint: 767,
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
	//$(".slider1-slides").slick('reinit');



	// slick slider2
	$('.slider2-slides').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
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
			  breakpoint: 1300,
			  settings: {
					arrows: false,
					dots: true,
					//centerMode: true,
					//centerPadding: '40px',
					slidesToShow: 3
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
					arrows: false,
					dots: true,
					//centerMode: true,
					//centerPadding: '40px',
					slidesToShow: 2
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
					arrows: false,
					dots: true,
					//centerMode: true,
					//centerPadding: '40px',
					slidesToShow: 2
			  }
			},
			{
			  breakpoint: 575,
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
	//$(".slider2-slides").slick('reinit');



	// slick slider3
	$('.slider3-slides').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
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
				  breakpoint: 1300,
				  settings: {
						arrows: false,
						dots: true,
						//centerMode: true,
						//centerPadding: '40px',
						slidesToShow: 3
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
						arrows: false,
						dots: true,
						//centerMode: true,
						//centerPadding: '40px',
						slidesToShow: 2
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
						arrows: false,
						dots: true,
						//centerMode: true,
						//centerPadding: '40px',
						slidesToShow: 2
				  }
				},
				{
				  breakpoint: 575,
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
	//$(".slider3-slides").slick('reinit');



	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
	  // other options
	});



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
	  });
	});



});