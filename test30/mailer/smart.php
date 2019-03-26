<?php
	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	// все данные со всех видов форм
	// popup
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];

	// description + phone + email + file
	$description = $_POST['description'];
	$service = $_POST['service'];

	// expertiza-form
	$form2_emailtel = $_POST['form2-emailtel'];
	$form2_price = $_POST['form2-price'];
	$form2_count = $_POST['form2-count'];

	// expertiza-form2
	$form3_question = $_POST['form3-question'];
	$form3_email = $_POST['form3-email'];



	//$mail->SMTPDebug = 3;                               // Enable verbose debug output
	$mail->isSMTP();                                      // Set mailer to use SMTP

	// для temp mail
	// $mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
	$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
	// $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers

	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'projectexp2018-temp@yandex.ru';           // Наш логин - временная почта - не заходить в нее!!!!!!!!
	$mail->Password = 'K$?q$BzK0F';                        // Наш СЛОЖНЫЙ пароль от ящика  - временная почта!!!!!!!!
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	// 587 порт для gmail﻿
	$mail->Port = 465;                                    // TCP port to connect to mail, yandex, google
	 


	// БЛОК ДЛЯ ИЗМЕНЕНИЯ ПОЧТЫ ЗАКАЗЧИКА!!!!!!!!!!!!!
	// От кого письмо - не заходить в нее!!!!!!!! 
	$mail->setFrom('projectexp2018-temp@yandex.ru', 'Олег Иванович');
	$mail->addAddress('projectexp2018@yandex.ru');     // ПОЧТА ЗАКАЗЧИКА mail, yandex и т.д. !!!!!!!!!!!!!!!!!!!!



	//$mail->addAddress('ellen@example.com');               // Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	$mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name

	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Пользователь оставил заявку:';
	$mail->Body    = '
		Пользователь оставил свои данные с одной из форм <br> 
		Описание: ' . $description . ' <br>
		Сервис: ' . $service . ' <br>
		Количество: ' . $form2_count . ' <br>
		Вопрос: ' . $form3_question . ' <br>
		Цена: ' . $form2_price . ' <br>
		Имя: ' . $name . ' <br>
		Телефон: ' . $phone . ' <br>
		Почта и телефон: ' . $form2_emailtel . ' <br>
		Email: ' . $form3_email . ' <br>
		Почта: ' . $email . '';
	$mail->AltBody = 'Заявка от клиента';



	if(!$mail->send()) {
		echo "Error";
		// или
		// return false;
	} else {
		//echo "Ok";
		// или
		header ('location: thanks.html');
		// или
		// return true;
	}

?>