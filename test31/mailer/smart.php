<?php
	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	$name = $_POST['user_name'];
	$phone = $_POST['user_phone'];
	$email = $_POST['user_email'];
	//$mail->SMTPDebug = 3;                               // Enable verbose debug output
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'X-MET7500-temp@mail.ru';                 // Наш логин - временная почта!!!!!!!!
	$mail->Password = '12345678a';                           // Наш пароль от ящика  - временная почта!!!!!!!!
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	// 587 порт для gmail﻿
	$mail->Port = 465;                                    // TCP port to connect to
	 




	// БЛОК ДЛЯ ИЗМЕНЕНИЯ ПОЧТЫ ЗАКАЗЧИКА!!!!!!!!!!!!!
	$mail->setFrom('X-MET7500-temp@mail.ru', 'Заявка от клиента');   // От кого письмо 
	$mail->addAddress('X-MET7500@mail.ru');     // ПОЧТА ЗАКАЗЧИКА!!!!!!!!!!!!!!!!!!!!!!!!!!




	//$mail->addAddress('ellen@example.com');               // Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Пользователь оставил заявку:';
	$mail->Body    = '
		Пользователь оставил свои данные <br> 
		Имя: ' . $name . ' <br>
		Телефон: ' . $phone . ' <br>
		Почта: ' . $email . '';
	$mail->AltBody = 'Заявка';

	if(!$mail->send()) {
	    return false;
	} else {
	    return true;
	}

?>