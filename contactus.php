<?php
$name = Trim(stripslashes($_POST['name']));
$email = Trim(stripslashes($_POST['email']));
$message = Trim(stripslashes($_POST['message']));

$to = 'gkmohit@gmail.com';//your email address
$subject = 'Contact Us from FORTAX.ca'; //subject email
$message = 'FROM: '.$name.' Email: '.$email.' Message: '.$message;
$headers = 'From: '.$email. "\r\n";

if (!empty($_POST['name'])  && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) && !empty($_POST['message']) ) {

  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

  //send email
  mail($to, $subject, $message, $headers);
   echo "<p  class='bg-success'>Thank you, your message was sent!</p>";
} else {
  echo "<p  class='bg-danger'>Upppss, you need to fill in all required fields or check invalid email format</p>";
}

?>
