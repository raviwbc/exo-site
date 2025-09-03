<?php
    use PHPMailer\PHPMailer\PHPMailer;
 
 require_once "vendor/autoload.php";
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $secret = "6LfXibwrAAAAAHmtYBc4AUfcwHrn_88NlTjS2Upi"; 
    $recaptcha_response = $_POST['g-recaptcha-response'] ?? '';
    $remoteip = $_SERVER['REMOTE_ADDR'];

    $verify = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha_response&remoteip=$remoteip"
    );
    $captcha_success = json_decode($verify);

    if (!$captcha_success->success) {
        $response = [
            'status' => 'error',
            'message' => 'Please verify you are not a robot.'
        ];
        header('Content-Type: application/json');
        echo json_encode($response);
        exit; 
    }

  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);


   $mail = new PHPMailer(true);
     $mail->SMTPDebug = 0;

     try {
     $mail->isSMTP();
     $mail->Host = 'smtp.titan.email';
     $mail->Port = 587;
     $mail->SMTPSecure = 'tls';
     $mail->SMTPAuth = true;
     $mail->Username = "noreplyT@wbc.co.in";
     $mail->Password = "Wbcuser_1";
     $mail->setFrom('noreplyT@wbc.co.in', "EXO OFFICE");
     $mail->addAddress("mraja@wbcsoftwarelab.com", "EXO OFFICE");
     $mail->isHTML(true);
     $mail->Subject = "Enquiry from EXO OFFICE";
 
     $message1 = '<html><body><div style="background: #ededed; padding-bottom: 15px; padding-top: 15px;">
 <center>

 <div>
        <p style="margin: 0;font-size: 28px;font-weight: 500;color: #eb6a00;letter-spacing: 1px;">EXO OFFICE</p>
      </div>
     
     <div style="background-color: #fff; width: 550px; border-top: 6px solid #eb6a00; font-size: 20px; margin-top: 20px; border-radius: 10px;">
            <!-- <tr style="border-bottom: 1pt solid #cbcbcb;"> -->
              <div style="padding-left: 15px;border-bottom: 1pt solid #cbcbcb;">
              <p style="font-size: 19px; text-align:left;font-weight: 600;">Name</p>
              <p style="font-size: 19px; text-align:left;">' . $name . '</p>
             </div>
             <div style="padding-left: 15px;border-bottom: 1pt solid #cbcbcb;">
               <p style="font-size: 19px; text-align:left;font-weight: 600;">Email</p>
               <p style="font-size: 19px; text-align:left;">' . $email . '</p>
              </div>
              <div style="padding-left: 15px;border-bottom: 1pt solid #cbcbcb;">
               <p style="font-size: 19px; text-align:left;font-weight: 600;">Phone</p>
               <p style="font-size: 19px; text-align:left;">' . $phone . '</p>
              </div>
              <div style="padding-left: 15px;border-bottom: 1pt solid #ffffff">
               <p style="font-size: 19px; text-align:left;font-weight: 600;">Message</p>
               <p style="font-size: 19px; text-align:left;">' . $message . '</p>
              </div>
         </div>
 </center>
 </div></body></html>';
 $mail->Body = $message1;

        if ($mail->send()) {
            $response['status'] = 'send';
            $response['message'] = 'Your message has been sent successfully!';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Unable to send your message. Please try again later.';
        }
    } catch (Exception $e) {
        $response['status'] = 'error';
        $response['message'] = 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }

header('Content-Type: application/json');
echo json_encode($response);
}
?>






 
 