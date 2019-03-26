<?php

	include("../cfg/connect.inc.php");

	mysql_connect(DB_HOST,DB_USER,DB_PASS) or die (db_error());
	mysql_select_db(DB_NAME) or die (db_error());
	mysql_query("SET NAMES utf8");

	session_start();

function occurrence($ip='', $to = 'windows-1251'){
 $ip = ($ip) ? $ip : $_SERVER['REMOTE_ADDR'] ;
 $xml = simplexml_load_file('http://ipgeobase.ru:7020/geo?ip='.$ip);
 if($xml->ip->message){
    if($to == 'utf-8') {return $xml->ip->message;} 
    else {
       if(function_exists( 'iconv' )) return iconv( "UTF-8", $to . "//IGNORE",$xml->ip->message);
       else return "The library iconv is not supported by your server";
    }
 }
 elseif($xml->ip->city){
    if( $to == 'utf-8' ) {return $xml->ip->city;} 
    else {
       if( function_exists( 'iconv' )) return iconv("UTF-8", $to . "//IGNORE",$xml->ip->city);
       else return "The library iconv is not supported by your server";
    }
 }
 elseif($xml->ip->country){
    if( $to == 'utf-8' ) {return $xml->ip->country;} 
    else {
       if(function_exists( 'iconv' )) return iconv( "UTF-8", $to . "//IGNORE",$xml->ip->country);
       else return "The library iconv is not supported by your server";
    }
 }
}

	$str = parse_url($_SERVER['HTTP_REFERER']);
	$t = parse_str($str['query']);
		
	$ip = $_SERVER['REMOTE_ADDR'];
	$city = occurrence($_SERVER['REMOTE_ADDR'],'utf-8');
	$keyword = $text;
	$full_key = urldecode($_SERVER['HTTP_REFERER']);
	$addr = gethostbyaddr($_SERVER['REMOTE_ADDR']);


$arr = array('(', ')', '-', ' ');
$phone = str_replace($arr, '', $_POST['phone']);
$name = mysql_real_escape_string(strip_tags(trim($_POST['name'])));

$gorod = mysql_real_escape_string(strip_tags(trim($_POST['gorod'])));
$razmer = mysql_real_escape_string(strip_tags(trim($_POST['razmer'])));
$kolvo = mysql_real_escape_string(strip_tags(trim($_POST['kolvo'])));
$mail = mysql_real_escape_string(strip_tags(trim($_POST['mail'])));

if ($name == '') {
echo "<span style='font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px; color:red;'>Ваше имя (название организации) обязательно!</span>";
}

elseif ($mail == '') {
echo "<span style='font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px; color:red;'>E-mail обязателен!<br /></span>";
}

elseif ($phone == '') {
echo "<span style='font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px; color:red;'>Номер телефона обязателен!</span>";
}


if ($phone <> '' && $name <> '' && $mail <> '') {

?>

<script>
$("#content_form4").html('<div style=\"text-align:center;padding:20px 30px 10px 30px;\"><span style=\"font-size:28px;font-weight:bold;font-family:Tahoma;\">Наш менеджер свяжется с вами в течении 15 минут</span><br /><span style=\"font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px;\">В рабочее время компании:<br />Будние дни с 7:00 до 16:00 по московскому времени</span></div><div style=\"text-align:center;padding-bottom:20px;\"><center><a href=\"javascript:close_pop_up(\'#pop-up2\');\"><input class=\"form_button"\ type=\"submit\" value=\"Закрыть окно\"></a></center></div>');
</script>



<?php

	require_once("../transport.php");
	$api = new Transport();

	$textsms = "JCB.Заказ расчета. Тел:".$phone;
	$params = array("text" => $textsms, "source" => "TESLA-PROM");
	$phones = array();
	$phones[] = '+79049827418';
	//$phones[] = '+79122645100';
	$send = $api->send($params,$phones);

	mysql_query("INSERT INTO click_zayavka (ip, site_name, city, keyword, full_key, ip_addr, client_phone, client_name, type, client_gorod, client_razmer, client_mail, client_kolvo) VALUE ('".$ip."', 'JCB', '".$city."', '".$keyword."', '".$full_key."', '".$addr."', '".$phone."', '".$name."', 2, '".$gorod."', '".$razmer."', '".$mail."', '".$kolvo."') ") or die (mysql_error());

}

?>