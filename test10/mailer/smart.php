<?php
	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	$name = $_POST['user_name'];
	$phone = $_POST['user_phone'];
	//$mail->SMTPDebug = 3;                               // Enable verbose debug output
	$mail->isSMTP();                                      // Set mailer to use SMTP

	$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers

	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'master-temp@mail.ru';           // Наш логин - временная почта - не заходить в нее!!!!!!!!
	$mail->Password = 'root';                        // Наш пароль от ящика  - временная почта!!!!!!!!
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted

	$mail->Port = 465;                                    // TCP port to connect to mail, yandex, google
	 


	// БЛОК ДЛЯ ИЗМЕНЕНИЯ ПОЧТЫ ЗАКАЗЧИКА!!!!!!!!!!!!!
	$mail->setFrom('master-temp@mail.ru', 'Заявка от клиента');   // От кого письмо - не заходить в нее!!!!!!!! 
	$mail->addAddress('master@mail.ru');     // ПОЧТА ЗАКАЗЧИКА!!!!!!!!!!!!!!!!!!!!!!!!!!



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
		return false;
	} else {
		// header (location: "../thanks.html");
		return true;
	}

?>