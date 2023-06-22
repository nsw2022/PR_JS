<?php

    $files= $_FILES['bbb'];

    // 전달된 파일의 개수 얻어오기
    $fileNum= count($files['name']);

    for($i=0; $i<$fileNum; $i++){
        //파일 1개의 정보들
        $srcName=  $files['name'][$i];
        $size   =  $files['size'][$i];
        $type   =  $files['type'][$i];
        $tmpName=  $files['tmp_name'][$i];

        echo "<h3>$srcName</h3>";
        echo "$size<br>";
        echo "$type<br>";
        echo "$tmpName<br>";
        //echo "<hr>";

        //업로드된 파일을 임시지정소에서 원하는 위치로 이동
        $dstName= "./files/" . date("YmdHis") . $srcName;
        move_uploaded_file($tmpName, $dstName);

        echo "<img src='$dstName' alt='대체글씨' width='40%'>";
        echo "<hr>";
    }

?>