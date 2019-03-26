<?php
	// здесь менять почту куда отправлять !!!!!!!!!!
	$address = "test@mail.ru";

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$count = $_POST['count'];
	$area = $_POST['area'];
	$address = $_POST['address'];

	$mes = "Пользователь оставил свои данные" . "<br>";
	
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
	if (!empty($count)) {
 		$mes .= "Количество комнат: $count" . "<br>";
	}
	if (!empty($area)) {
 		$mes .= "Площадь м2: $area" . "<br>";
	}
	if (!empty($address)) {
 		$mes .= "Адрес: $address" . "<br>";
	}



	$sub = 'Заявка с сайта '.$_SERVER['HTTP_HOST']; // заголовок письма
	// $sub='Заявка от клиента';

	$email2 = "<zakaz@{$_SERVER['HTTP_HOST']}>";


	$send = mail ($address,$sub,$mes,"Content-type:text/html; charset=utf-8\r\nFrom:$email2");

	if(!$send) {
		// echo "Error";
		// или
		return false;
	} else {
		// echo "Ok";
		// или
		// header ('location: thanks.html');
		// header ('location: mailer/thanks.html');
		// или
		return true;
	}
?>