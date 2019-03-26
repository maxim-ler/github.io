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

if ($phone == '') {

echo "<span style='font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px; color:white;'><b>Номер телефона обязателен!</b></span>";

}

elseif ($name == '') {

echo "<span style='font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px; color:white;'>Ваше имя (название организации) обязательно!</span>";

}

if ($phone <> '' && $name <> '') {

?>

<script>

$("#content_form1").html('<div style=\"text-align:center;padding:20px 30px 10px 30px;\"><span style=\"font-size:28px;font-weight:bold;font-family:Tahoma;\">Наш менеджер свяжется с вами в течении 15 минут</span><br /><span style=\"font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px;\">В рабочее время компании:<br />Будние дни с 7:00 до 16:00 по московскому времени</span></div><div style=\"text-align:center;padding-bottom:20px;\"><center><a href=\"javascript:close_pop_up(\'#pop-up\');\"><input class=\"form_button"\ type=\"submit\" value=\"Закрыть окно\"></a></center></div>');
$("#form_view1").html('<div style=\"text-align:center;padding:20px 30px 10px 30px; width:600px;margin:auto;\"><span style=\"font-size:28px;font-weight:bold;font-family:Tahoma; color:white;\">Наш менеджер свяжется с вами в течении 15 минут</span><br /><span style=\"font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px;color:white;\">В рабочее время компании:<br />Будние дни с 7:00 до 16:00 по московскому времени</span></div>');
$("#form_view2").html('<div style=\"text-align:center;padding:20px 30px 10px 30px;width:600px;margin:auto;\"><span style=\"font-size:28px;font-weight:bold;font-family:Tahoma;color:white;\">Наш менеджер свяжется с вами в течении 15 минут</span><br /><span style=\"font-size:12px;font-weight:bold;font-family:Tahoma;margin-top:20px;color:white;\">В рабочее время компании:<br />Будние дни с 7:00 до 16:00 по московскому времени</span></div>');
$("#name2").val('');
$("#number2").val('');
$("#name3").val('');
$("#number3").val('');
open_pop_up('#pop-up');
</script>



<?php

	require_once("../transport.php");
	$api = new Transport();

	$textsms = "JCB.Заказ звонка.Тел:".$phone;
	$params = array("text" => $textsms, "source" => "TESLA-PROM");
	$phones = array();
	$phones[] = '+79049827418';
	//$phones[] = '+79122645100';
	$send = $api->send($params,$phones);

	mysql_query("INSERT INTO click_zayavka (ip, site_name, city, keyword, full_key, ip_addr, client_phone, client_name, type) VALUE ('".$ip."', 'JCB', '".$city."', '".$keyword."', '".$full_key."', '".$addr."', '".$phone."', '".$name."', 1) ") or die (mysql_error());

}

?>