<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "esbernsnareband@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo '

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>

  <meta charset="utf-8">
  <title>Esbern Snare</title>
  <link rel="icon" href="/public/images/esbernsnare.ico">

  <!-- Bootstrap & CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="/public/css/styles.css">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet">

  <!-- Font Awesome -->
  <script src="https://kit.fontawesome.com/d6c1f9627b.js" crossorigin="anonymous"></script>

</head>

<body>

  <section class="contact-section">

    <div id="contact" class="modal fade">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen">
        <div class="modal-content">

          <!-- Modal Header -->

          <div class="modal-header">
            <h1 class="modal-title text-center">Contact</h1>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="close"></button>
          </div>

          <div class="modal-body">

              <!--Section heading-->
              <h2 class="h1-responsive font-weight-bold text-center my-4">Thank you for your message!</h2>
              <!--Section description-->
              <p class="text-center w-responsive mx-auto mb-5">We will get back to you as soon as possible!</p>

          </div>

          <!-- Contact Modal Footer -->

          <div class="modal-footer">
            <button type="button-close" data-bs-dismiss="modal" class="btn btn-lg btn-outline-light"
              aria-label="close">Back to Home</button>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- JavaScript Link -->
  <script type="text/javascript" src="main.js"></script>

  <!-- Bootstrap JacaScript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
</body>

</html>

';

?>