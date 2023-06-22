<?php

    // 파일은 용량이 크기에 실제 데이터는 임시저장소에 저장되고 
    // 이 php문서에는 파일데이터 해더 정보만 전달됨.
    $file=$_FILES['aaa'];
    
    //파일정보를 가진 $file은 배열임. [길이가 5칸 짜리]
    $srcName=$file['name'];     //원본파일명
    $size=   $file['size'];     //파일크기
    $type=   $file['type'];     //파일 MIME 타입
    $error=  $file['error'];    //전송 중 에러정보
    $tmpName=$file['tmp_name']; //실제 파일데이터가 있는 임시저장소의 위치

    // 정보가 잘 왔는지 확인 echo
    echo "$srcName <br>";
    echo "$size <br>";
    echo "$type <br>";
    echo "$error <br>";
    echo "$tmpName <br>";

    // 임시저장소에 있는 파일데이터를 영구적으로 서버에 보관하기 위해 이동
    $dstName="./files/" . date('YmdHis') . $srcName;
    move_uploaded_file($tmpName , $dstName);

?>