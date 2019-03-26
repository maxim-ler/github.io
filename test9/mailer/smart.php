<?php
	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	$name = $_POST['user_name'];
	$phone = $_POST['user_phone'];
	$apartment_area = $_POST['apartment_area'];

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'interior-design2018-temp@mail.ru';                 // Наш логин - временная почта!!!!!!!!
	$mail->Password = 'OjxG6o-PR8lw';                           // Наш пароль от ящика  - временная почта!!!!!!!!
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	// 587 порт для gmail﻿
	$mail->Port = 465;                                    // TCP port to connect to



	// БЛОК ДЛЯ ИЗМЕНЕНИЯ ПОЧТЫ ЗАКАЗЧИКА!!!!!!!!!!!!!
	$mail->setFrom('interior-design2018-temp@mail.ru', 'Заявка от клиента');   // От кого письмо 
	$mail->addAddress('interior-design2018@mail.ru');     // ПОЧТА ЗАКАЗЧИКА!!!!!!!!!!!!!!!!!!!!!!!!!!



	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Пользователь оставил заявку на дизайн:';
	$mail->Body    = '
		Пользователь оставил свои данные <br> 
		Имя: ' . $name . ' <br>
		Телефон: ' . $phone . '<br>
		Площадь квартиры: ' . $apartment_area . '';
	$mail->AltBody = 'Заявка на дизайн';

	if(!$mail->send()) {
		// header("Location: thanks.html");
	  return false;
	} else {
	    return true;
	}

?>