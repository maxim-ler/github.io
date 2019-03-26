$(document).ready(function() {
    $(".number").mask("+7(999)999-99-99");
    $('.button__callback').click(function(){
        var name = $(this).closest("form").find(".firstname")[0],
            error = $(this).closest("form").find(".error_message"),
            phone = $(this).closest("form").find(".number")[0];
        if(name.value == '') {
            error.show();
    	    error[0].textContent = "Укажите Ваше имя";
        } else if (phone.value.length < 16) {
            error.show();
            error[0].textContent = "Укажите Ваш телефон";
        } else {
            error.textContent = "";
            error[0].textContent = "";
            error.hide();
            var form_data = $(this).closest("form").serialize();
            $.ajax({
                type: "POST",
                url: "../mailer/smart.php",
                data: form_data,
                success: function() {
                    close_pop_up('#pop-up');
                    open_pop_up('#pop-up-mail');
                    name.value = "";
                    phone.value = "";

                    window.location.href = "../mailer/thanks.html";
                }
            });
        }
    });
    $('.button__callback1').click(function(){
        var name = $(this).closest("form").find(".name")[0],
            email = $(this).closest("form").find(".email")[0]
            error = $(this).closest("form").find(".error_message"),
            phone = $(this).closest("form").find(".number")[0];
        if (email.value == '') {
            error.show();
            error[0].textContent = "Укажите Вашу почту";
        }  else if (phone.value.length < 16) {
            error[0].textContent = "Укажите Ваш телефон";
        } else {
            error.textContent = "";
            error[0].textContent = "";
            error.hide();
            var form_data = $(this).closest("form").serialize();
            $.ajax({
                type: "POST",
                url: "../mailer/smart2.php",
                data: form_data,
                success: function() {
                    close_pop_up('#pop-up2');
                    close_pop_up('#pop-up3');
                    open_pop_up('#pop-up-mail');
                    name.value = "";
                    phone.value = "";
                    email.value = "";

                    window.location.href = "../mailer/thanks.html";
                }
            });
        }
    });
    $('.button__callback2').click(function(){
        var name = $(this).closest("form").find(".name")[0],
            email = $(this).closest("form").find(".email")[0]
            error = $(this).closest("form").find(".error_message"),
            phone = $(this).closest("form").find(".number")[0];
        if (email.value == '') {
            error.show();
            error[0].textContent = "Укажите Вашу почту";
        }  else if (phone.value.length < 16) {
            error[0].textContent = "Укажите Ваш телефон";
        } else {
            error.textContent = "";
            error[0].textContent = "";
            error.hide();
            var form_data = $(this).closest("form").serialize();
            $.ajax({
                type: "POST",
                url: "../mailer/smart3.php",
                data: form_data,
                success: function() {
                    close_pop_up('#pop-up2');
                    close_pop_up('#pop-up3');
                    open_pop_up('#pop-up-mail');
                    name.value = "";
                    phone.value = "";
                    email.value = "";

                    window.location.href = "../mailer/thanks.html";
                }
            });
        }
    });    
});
//................. PREVIOUS CODE
    
    
//     $('#button1').click(function(){  

// 	$.ajax({   
//     	type: 'POST',   
//     	url: 'script/mail.php',   
//     	data: 'phone='+$('#number1').val()+'&name='+$('#name1').val(),
//     	success: function(html){   
// 		$("#error_msg1").html(html);
// 		} 
// 	});
	
// 	$("#error_msg1").html('<center>Обработка. Ждите...<center>');

// 	return false;

// }); 

// $('#button2').click(function(){  

// 	$.ajax({   
//     	type: 'POST',   
//     	url: 'script/mail.php',   
//     	data: 'phone='+$('#number2').val()+'&name='+$('#name2').val(),
//     	success: function(html){
// 		$("#error_msg2").html(html);
// 		} 
// 	});
	
// 	$("#error_msg2").html('<center>Обработка. Ждите...<center>');

// 	return false;

// }); 

// $('#button3').click(function(){  
    
// 	$.ajax({   
//     	type: 'POST',   
//     	url: 'script/mail.php',   
//     // 	data: 'phone='+$('#number3').val()+'&name='+$('#name3').val(),
//         data: "текст",
//     	success: function (){
//     // 	 $("#form_1").validate();
//     // // $("#pop-up-mail").open_pop_up();
//     // 	 $("#form_1").trigger("reset");
//     //      $("#error_msg3").html(html);
//         alert("форма отправлена");
// 		} 
// 	});
	
//     // $("#error_msg3").html('<center>Обработка. Ждите...<center>');

// 	return false;

// }); 

// $('#button4').click(function(){  

// 	$.ajax({   
//     	type: 'POST',   
//     	url: 'script/mail_order.php',   
//     	data: 'phone='+$('#number4').val()+'&name='+$('#name4').val()+'&gorod='+$('#gorod4').val()+'&razmer='+$('#razmer4').val()+'&kolvo='+$('#kol4').val()+'&mail='+$('#mail4').val(),
//     	success: function(html){
//     	$("#form_2").trigger("reset");
//     	setTimeout(function() {
// 				$("#pop-up2").fadeOut();
// 			}, 500);
// 		$("#error_msg4").html(html);
// 		} 
// 	});
	
// 	$("#error_msg4").html('<center>Обработка. Ждите...<center>');

// 	return false;

// }); 


// function form_1() {
//   var form = $('#form_1');

//   if(form.length > 0){

//   jQuery.validator.addMethod("login", function (value, element) {
//     var pattern_phone = /^[\d]{10,12}$/g;

//     return this.optional(element) || ((!pattern_phone.test(value)) ? pattern_phone.test(value) : true);
//   }, "Поле имеет некорректный формат");

//   form.validate({
//     submitHandler: function(){
//      $('.error-p').text('');

   
//      $.ajax({
//   url: 'script/mail.php',
//   type: 'POST',
//   dataType: 'json',
//   data: form.serialize(),
//   })
//   .done(function(data) {
//     alert('успех');
//   });


//     return false;
//     },
//     onSubmit: true,
//     rules: {
//      'name': {
//       required: true,
//       minlength: 2,
//       maxlength: 40
//      },
//      'phone': {
//       required: true,
//       minlength: 2,
//       maxlength: 16,
//      }
//     },
//     messages: {
//      'phone': {
//       required: "Заполните поле",
//       minlength: "Минимальная длина 8 символа",
//       maxlength: "Максимальная длина 16 символа",
//      }
//     },
//     errorPlacement: function(error, element){
//      var name = element.attr("name"),
//       element2 = $('#error_' + name);

//      element2.text(error.text()).show();

//      element.bind('click', function(){
//       element.unbind('click');
//       element2.hide();
//      });

//      element.bind('focusout', function(){
//       element.unbind('focusout');
//       element2.hide();
//      });
//     }
//   });
//   }
//  };
//  form_1();
