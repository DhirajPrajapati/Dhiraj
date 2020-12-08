<?php

include('admin/Admin_Config/dbconfig.php');

if(isset($_POST['submit'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $query = "INSERT INTO `contact` (`name`, `email`, `subject`, `message`) VALUES ('$name', '$email', '$subject', '$message')";

    $run_query = mysqli_query($connection, $query);

    if($run_query){
        echo '<script type="text/javascript">alert ("Thank you for contacting us.");';
        echo 'window.location.href = "index.php";';
        echo '</script>';
    }else{
        echo '<script type="text/javascript">alert ("Something went wrong Please try again.");';
        echo 'window.location.href = "index.php";';
        echo '</script>';
    }

}


?>