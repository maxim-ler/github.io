<?php
	define("HTTPS_LOGIN", "angelskymer"); //Ваш логин для HTTPS-протокола
	define("HTTPS_PASSWORD", "x18boys79"); //Ваш пароль для HTTPS-протокола
	define("HTTPS_ADDRESS", "https://lcab.sms-uslugi.ru/"); //HTTPS-Адрес, к которому будут обращаться скрипты. Со слэшем на конце.
	define("HTTP_ADDRESS", "http://lcab.sms-uslugi.ru/"); //HTTP-Адрес, к которому будут обращаться скрипты. Со слэшем на конце.
	define("HTTPS_METHOD", "curl"); //метод, которым отправляется запрос (curl)
	define("USE_HTTPS", 0); //1 - использовать HTTPS-адрес, 0 - HTTP
	
	//Класс попытается автоматически определить кодировку ваших скриптов. 
	//Если вы хотите задать ее сами в параметре HTTPS_CHARSET, то укажите HTTPS_CHARSET_AUTO_DETECT значение FALSE
	define("HTTPS_CHARSET_AUTO_DETECT", TRUE);
	  
	define("HTTPS_CHARSET", "utf-8"); //кодировка ваших скриптов. cp1251 - для Windows-1251, либо же utf-8 для, сообственно - utf-8 :)