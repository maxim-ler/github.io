$(function() {
		$('.our-works .slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			// adaptiveHeight: true,
			// adaptiveHeight: false,
			// variableWidth: true,

			centerMode: true,
	  	variableWidth: true,

			lazyLoad: 'ondemand',
			autoplay: true,
			autoplaySpeed: 4000,
			responsive: [
		    {
		      breakpoint: 1310,
		      settings: {
		      	arrows: true
		        // arrows: false,
		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 2,
		        arrows: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        arrows: true
		      }
		    }
		  ]
		});

		// $('.our-works .wrap .tab_content').css('display', 'block');
		// $('.our-works .wrap .tab_content').css('visibility', 'visible');
		// console.log($(window).scrollTop());


		
	// tabs jquery
	$(function() {
		$(".tab_item").not(":first").hide();
		$(".wrap .tab").click(function() {
			
			// нужно если slick+tab
			$('.slider').slick('slickGoTo', 0, false);
			
			$(".wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	});



	// tabs2 jquery
	$(function() {
		$(".tab_item2").not(":first").hide();
		$(".wrap .tab2").click(function() {
			
			// нужно если slick+tab
			//$('.slider').slick('slickGoTo', 0, false);
			
			$(".wrap .tab2").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item2").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	});



	// slick slider
	// $('.our-works .slider').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	// adaptiveHeight: true,
	// 	// adaptiveHeight: false,
	// 	// variableWidth: true,

	// 	// centerMode: true,
 //  	variableWidth: true,

	// 	lazyLoad: 'ondemand',
	// 	autoplay: true,
	// 	autoplaySpeed: 7000,
	// 	responsive: [
	//     {
	//       breakpoint: 1310,
	//       settings: {
	//       	arrows: true
	//         // arrows: false,
	//       }
	//     },
	//     {
	//       breakpoint: 1000,
	//       settings: {
	//         slidesToShow: 2,
	//         arrows: true
	//       }
	//     },
	//     {
	//       breakpoint: 600,
	//       settings: {
	//         slidesToShow: 1,
	//         arrows: true
	//       }
	//     }
	//   ]
	// });

	// slick slider
	$('.slider-reviews').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// centerMode: true,
		// variableWidth: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000
	});



	// slick header-slider
	$('.slider-header').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		adaptiveHeight: true,
		autoplaySpeed: 5000,
		responsive: [
			// {
			//   breakpoint: 768,
			//   settings: {
			// 	arrows: false,
			// 	centerMode: true,
			// 	centerPadding: '40px',
			// 	slidesToShow: 3
			//   }
			// },
			// {
			//   breakpoint: 480,
			//   settings: {
			// 	arrows: false,
			// 	centerMode: true,
			// 	centerPadding: '40px',
			// 	slidesToShow: 1
			//   }
			// }
	  ]
	});

	// On before slide change
	// $('.slider-header').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	if (nextSlide == 0) {

	// 	}
	// 	if (nextSlide == 1) {
	// 		$('.interior-design').css('background', 'url("../img/share-of-goods-bg.jpg") center 0 no-repeat');
	// 		$('.interior-design').css('background-size:', '100%');
	// 	}
	// 	if (nextSlide == 2) {

	// 	}
	// });





	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
		e.preventDefault();

		// поиск button close popup
		$('#js-close-popup').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});

		// поиск popup и popup-overlay для их открытия
		// $('.popup').css('display', 'block');
		// $('.popup-overlay').css('display', 'block');
		// or
		$('.popup').slideDown();
		$('.popup-overlay').css('display', 'block');
	});



	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");

			// alert("Заявка отправлена!");
			window.location.href = "../mailer/thanks.html";

			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		return false;
	});



	// click to .our-designers-team .tabs2 .tab2
	$('.tabs2 .tab2 img').on('click', function(e) {
		// restore all
		var curImg = $('.tabs2 .tab2 img');
		curImg.eq(0).attr('src', 'img/our-designers-team-photo1-shadow.jpg');
		curImg.eq(1).attr('src', 'img/our-designers-team-photo2-shadow.jpg');
		curImg.eq(2).attr('src', 'img/our-designers-team-photo3-shadow.jpg');
		curImg.eq(3).attr('src', 'img/our-designers-team-photo4-shadow.jpg');

		var current = $(this).attr('src');
		current = current.replace(/-shadow/g,"");

		// change one
		$(this).attr('src', current);
	});


	// событие по скроллу до элемента - показать слайдер
	window.onscroll = function () {	

		if($(window).scrollTop() >= 2700) {



			// lazy load
			[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
			  img.setAttribute('src', img.getAttribute('data-src'));
			  img.onload = function() {
					img.removeAttribute('data-src');
			  };
			});
		};
	}


});