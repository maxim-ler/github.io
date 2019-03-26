// timer
var remain_bv = 10768;
function parseTime_bv(timestamp) {
  if (timestamp < 0) timestamp = 0;

  var day = Math.floor( (timestamp/60/60) / 24);
  var hour = Math.floor(timestamp/60/60);
  var mins = Math.floor((timestamp - hour*60*60)/60);
  var secs = Math.floor(timestamp - hour*60*60 - mins*60); 
  var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

  $('span.afss_day_bv').text(day);
  $('span.afss_hours_bv').text(left_hour);

  if(String(mins).length > 1)
    $('span.afss_mins_bv').text(mins);
  else
    $('span.afss_mins_bv').text("0" + mins);
  if(String(secs).length > 1)
    $('span.afss_secs_bv').text(secs);
  else
    $('span.afss_secs_bv').text("0" + secs);
}



$(function() {
	
	// timer
  setInterval(function(){
    remain_bv = remain_bv - 1;
    parseTime_bv(remain_bv);
    if(remain_bv <= 0){
        alert('Hello');
    }
  }, 1000);



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

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');

			//alert("Заявка отправлена!");
			// window.location.href = "../mailer/thanks.html";

			$('.popup2').slideDown();
			$('.popup-overlay').css('display', 'block');
			
			// поиск button close popup
			$('#js-close-popup2, .popup-overlay').on('click', function(e) {
			  // $('.popup2').css('display', 'none');
			  // $('.popup-overlay').css('display', 'none');
			  // or
			  $('.popup2').slideUp();
			  $('.popup-overlay').css('display', 'none');
			});

			setTimeout(function() {
				$('.popup2').slideUp();
			  $('.popup-overlay').css('display', 'none');
			}, 4000);
		});
		
		return false;
	});
});