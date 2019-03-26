<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta HTTP-EQUIV="Refresh" CONTENT="4; URL=<?php echo $_SERVER['HTTP_REFERER'] ?>">
<style>
  body {
    background: url('../img/t1.png') #fff  no-repeat 50% 0;
  }
  .mailblock {
    line-height: 40px;
  }
  .mailblock p {
    font-size: 18px;
  }
  #timer_inp {
    font-size: 18px;
  }
</style>
</head>
<body>
  <script>
        //Обратный отсчет
        function timer(){
         var obj=document.getElementById('timer_inp');                  /*Скрипт 5 секунд вы будете перенаправленны назад*/
         obj.innerHTML--;

         if(obj.innerHTML==0){setTimeout(function(){},1000);}
         else{setTimeout(timer,1000);}
        }
        setTimeout(timer,1000);
    </script>
<div style="margin-top:15%; text-align: center;">

  <?php 

    $name = urldecode($_POST['name']); 
    $phone = urldecode($_POST['phone']); 
    $email = urldecode($_POST['email']); 
    $hid = urldecode($_POST['hid']); 
    $to = 'fetfurmoz@yandex.ua';
    $title ="ОБОРУДОВАНИЕ ДЛЯ ШИНОМОНТАЖА СПЕЦТЕХНИКИ";
    $from='no-reply@schrader.ru';  
    $message = "<b>Имя заказчика:</b> $name <br> 
                <b>Телефон:</b> $phone <br> 
                <b>E-mail:</b> $email";
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: " . $from . "\r\n";
    
    

    
       mail($to, $title, $message, $headers);                  
      echo '<div class="mailblock">
        <storng style="font-family: Open Sans, Arial, sans-serif;
        font-size:30px;color:#000;" >СПАСИБО! <br> ВАША ЗАЯВКА ОТПРАВЛЕНА. <br> В ближайшее время мы с вами свяжемся!</strong>
        <br>
        
        <br>
        <p>Вы будете перенаправлены на главную страницу через <span id="timer_inp">5</span> секунды</p>
      </div>'; 
  
  
  ?>

</script> 
</body>
</html>