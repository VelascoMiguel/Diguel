<?php
use PHPMailer\PHPMailer\PHPMailer;

require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $presupuesto = $_POST['presupuesto'];
    $nombreCompañia = $_POST['nombreCompañia'];
    $mensaje = $_POST['message'];

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'velascomiguell610@gmail.com';
    $mail->Password = 'Diealeroanmi2003!';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    $mail->setFrom($email, $nombre);
    $mail->addAddress('velascomiguell610@gmail.com');
    $mail->Subject = ("$email ($asunto) ($nombreCompañia)");
    $mail->Body = "Nombre: $nombre<br>";
    $mail->Body .= "Email: $email<br>";
    $mail->Body .= "Presupuesto: $presupuesto<br>";
    $mail->Body .= "Nombre de la Compañía: $nombreCompañia<br>";
    $mail->Body .= "Mensaje: $mensaje";
    $mail->send();

}

