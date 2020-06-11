<?php
	// здесь менять почту куда отправлять !!!!!!!!!!
	$address = "test@mail.ru";
  // $address = "ev@toysa.ru, apsitnik@mail.ru";

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];

	$mes = "Пользователь оставил свои данные" . "<br>";
	// $mes = "Пользователь оставил свои данные" . "\n";
	// $mes .= "Место блока заявки (идентификатор): $user_data\n";
	
	if (!empty($name)) {
	 $mes .= "Имя: $name" . "<br>";
	 // $mes .= "Имя: $name" . "\n";
	}

	if (!empty($phone)) {
	 $mes .= "Телефон: $phone" . "<br>";
	 // $mes .= "Телефон: $phone" . "\n";
	}

	if (!empty($email)) {
 		$mes .= "Почта: $email" . "<br>";
 		// $mes .= "Почта: $email" . "\n";
	}

	$sub = 'Заявка с сайта '.$_SERVER['HTTP_HOST']; // заголовок письма

	$email2 = "<zakaz@{$_SERVER['HTTP_HOST']}>";

	$send = mail ($address,$sub,$mes,"Content-type:text/html; charset=utf-8\r\nFrom:$email2");

	if(!$send) {
		// echo "Error";
		// или
		return false;
	} else {
		// echo "Ok";
		// или
		header ('location: thanks.html');
		// или
		return true;
	}
?>