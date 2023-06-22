// 'use strict'; 를 맨위에 선언하게 되면 평소에는 느슨한모드인데
// 마치 java처럼 엄격한 모드로 바뀌게 된다 use strict를 주석해보고 안해보고 a=6만 썻을때 콘솔을 확인해보자
'use strict';

console.log('Hello World')

//a=6;

// hoisting 호이스팅 (영단어뜻 : 끌어올림)
// 어디에 선언했는지 상관없이 항상 제일위로 선언을 끌어 올림 이라는말
// var 은 블럭을 무시함
{
    let name = "승우"
    console.log(name)
    age = 4
    var age
}
console.log(name)//에러안남 자바스크립트가 원래그럼
console.log(age)

