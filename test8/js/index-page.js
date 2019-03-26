$(function() {
	// slick slider1
	$('.slider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		// centerMode: true,
  // 	centerPadding: '60px',
  	responsive: [
	    {
	      breakpoint: 780,
	      settings: {
	      	arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false
	      }
	    }
	  ]
	});

	// slick slider2
	$('.our-trainers-items .slider2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	      	slidesToShow: 1,
	        arrows: false
	      }
	    }
	  ]
	});

	// slick slider3
	$('.slider3 .slider-slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		responsive: [
	    {
	      breakpoint: 620,
	      settings: {
	        arrows: false,
	      	dots: true
	      }
	    }
	  ]
	});

	// tabs jquery
	var source = $(".container .tabs source");

	$(".tab_item").not(":first").hide();
	$(".container .tab").click(function() {
		
		// console.log( $(this).find('source').attr('srcset').slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1) );

		source.eq(0).attr('srcset', 'img/age-of-child-icon1.svg');
		source.eq(1).attr('srcset', 'img/age-of-child-icon2.svg');
		source.eq(2).attr('srcset', 'img/age-of-child-icon3.svg');

		$(this).find('source').attr('srcset', $(this).find('source').attr('srcset').slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1)+'-active.svg');
		
		$(".container .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// tabs2 jquery
	var source2 = $(".container .tabs2 source");

	$(".tab_item2").not(":first").hide();
	$(".container .tab2").click(function() {
		
		source2.eq(0).attr('srcset', 'img/security-icon1.svg');
		source2.eq(1).attr('srcset', 'img/security-icon2.svg');
		source2.eq(2).attr('srcset', 'img/security-icon3.svg');
		
		$(this).find('source').attr('srcset', $(this).find('source').attr('srcset').slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1)+'-active.svg');

		$(".container .tab2").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item2").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// popup
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

	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		// проверка на стороне клиента формы через js что форма не пустая
		var name = $('.name1').val();
		var phone = $('.tel1').val();

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



});