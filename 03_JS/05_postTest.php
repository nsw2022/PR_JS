<?php
    header('Content-Type:text/plain; charset=utf-8');

    $id= $_POST['id'];
    $password= $_POST['pw'];

    echo "$id - $password";
?>