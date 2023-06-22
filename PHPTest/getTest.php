<?php

    //form요소를 이용하여 GET 방식으로 전달된 데이터들을 받기
    $title=$_GET['title'];
    $message=$_GET['msg'];
    

    //실무에서는 위 데이터들을 Database에 저장하는 등의 작업을 수행.
    //지금은 그냥 잘 받았는지 확인하기 위해 echo
    //이 php에서 echo한 글씨가 웹 브라우저에 보여지는 것
    echo "$title : $message";

?>