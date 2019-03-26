<?php
	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	//$mail->SMTPDebug = 3;                               // Enable verbose debug output
	$mail->isSMTP();                                      // Set mailer to use SMTP

	// для temp mail
	$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
	// $mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
	// $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers

	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'training2018new-temp@mail.ru';           // Наш логин - временная почта - не заходить в нее!!!!!!!!
	$mail->Password = 'G5TrJ6GNx$';                        // Наш СЛОЖНЫЙ пароль от ящика  - временная почта!!!!!!!!
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	// 587 порт для gmail﻿
	$mail->Port = 465;                                    // TCP port to connect to mail, yandex, google
	 


	// БЛОК ДЛЯ ИЗМЕНЕНИЯ ПОЧТЫ ЗАКАЗЧИКА!!!!!!!!!!!!!
	// От кого письмо - не заходить в нее!!!!!!!! 
	$mail->setFrom('training2018new-temp@mail.ru', 'Андрей Петрович');
	$mail->addAddress('training2018new@mail.ru');     // ПОЧТА ЗАКАЗЧИКА mail, yandex и т.д. !!!!!!!!!!!!!!!!!!!!



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
		Телефон: ' . $phone . '';
	$mail->AltBody = 'Заявка от клиента';

	if(!$mail->send()) {
		//echo "Error";
		// или
		return false;
	} else {
		//echo "Ok";
		// или
		// header (location: '../thanks.html');
		// или
		return true;
	}

?>