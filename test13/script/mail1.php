<?
        $to = 'sosnov.r2@yandex.ru, 79122645100@mail.ru, info@teslaprom.ru';
        $subject = 'Заказ с сайта optimaltyre96.ru';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Почта: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>Город: '.$_POST['city'].'</p> 
                        <p>Размер: '.$_POST['size'].'</p> 
                        <p>Количество: '.$_POST['sum'].'</p>                        
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);

?>