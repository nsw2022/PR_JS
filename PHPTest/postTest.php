<?php
    // 콘텐츠에 타입 : text이고 보여줄게 html의 문서구조를 따른다; 문자는 utf-8방식
    header('Content-Type:text/html; charset=utf-8;');

    $name=$_POST['name'];
    $password = $_POST['pw'];
    $gender = $_POST['gender'];
    $message = $_POST['msg'];
    $car = $_POST['car'];

    // textarea 는 줄바꿈을 \n 으로 만듦. 그렇기에 그대로 echo 하면 브라우저에서 줄바꿈 안됨.
    // \n--> <br>로 변환 해주는 기능함수가 php 언어에 이미 존재함.
    $message = nl2br($message);

    // 잘 받았는지 확인하기 위해 echo
    echo "<h4>$name</h4>";
    echo "$password <br>";
    echo "$gender <br>";
    echo "$message <br>";
    echo "$car <br>";

    // multiple choice 에 의해 다중 선택된 값들을 배열로 전달받기
    $fruits=$_POST['fruits'];
    // 배열의 개수를 얻어오기
    $len= count($fruits);
    
    for($i=0; $i<$len; $i++){
        echo $fruits[$i].",";
    }
    

?>