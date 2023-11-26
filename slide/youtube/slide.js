
// window.onload = function() {
//     let slides = document.querySelector('.slides');
//     let slide = document.querySelectorAll('.slides li');
//     let currentIdx = 0;
//     let slideCount = slide.length;
//     let preBtn = document.querySelector('.prev');
//     let slideWidth = 300; /* 사진 길이 */
//     let slideMargin = 30;
//     let nextBtn = document.querySelector('.next');
  
//     slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';
  
//     /**
//      *  숫자가 들어오면 왼쪽 값을 바꿈 바로 위의 스타일임
//      * */
//     function moveSlide(num) {
//       slides.style.left = -num * (slideWidth + slideMargin) + 'px';
//       currentIdx = num;
//     }
  
//     /* 클릭하면 할 일을 듣는 친구 : 리스너 */
//     nextBtn.addEventListener('click', function() {
//       if (currentIdx < slideCount - 3) {
//         moveSlide(currentIdx + 1);
//       } else {
//         moveSlide(0);
//       }
//     });
  
//     preBtn.addEventListener('click', function() {
//       if (currentIdx > 0) {
//         moveSlide(currentIdx - 1);
//       } else {
//         moveSlide(slideCount - 3);
//       }
//     });
//   };
  
window.onload = function () {
    let slides = document.querySelector('.slides');
    let slide = document.querySelectorAll('.slides li');
    let currentIdx = 0;
    let slideCount = slide.length;
    let preBtn = document.querySelector('.prev');
    let slideWidth = 300; /* 사진 길이 */
    let slideMargin = 30;
    let nextBtn = document.querySelector('.next');
    let intervalId; // 타이머 ID
  
    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';
  
    /**
     *  숫자가 들어오면 왼쪽 값을 바꿈 바로 위의 스타일임
     * */
    function moveSlide(num) {
      slides.style.left = -num * (slideWidth + slideMargin) + 'px';
      currentIdx = num;
    }
  
    function startAutoSlide() {
      intervalId = setInterval(function () {
        if (currentIdx < slideCount - 3) {
          moveSlide(currentIdx + 1);
        } else {
          moveSlide(0);
        }
      }, 2000); // 2초마다 슬라이드를 넘깁니다.
    }
  
    function stopAutoSlide() {
      clearInterval(intervalId); // 타이머를 멈춥니다.
    }
  
    // 자동 슬라이딩 시작
    startAutoSlide();
  
    // 클릭하면 할 일을 듣는 친구 : 리스너
    nextBtn.addEventListener('click', function () {
      stopAutoSlide(); // 사용자가 수동으로 슬라이드를 조작하면 자동 슬라이딩을 멈춥니다.
  
      if (currentIdx < slideCount - 3) {
        moveSlide(currentIdx + 1);
      } else {
        moveSlide(0);
      }
  
      // 클릭 후 자동 슬라이딩 재시작
      startAutoSlide();
    });
  
    preBtn.addEventListener('click', function () {
      stopAutoSlide(); // 사용자가 수동으로 슬라이드를 조작하면 자동 슬라이딩을 멈춥니다.
  
      if (currentIdx > 0) {
        moveSlide(currentIdx - 1);
      } else {
        moveSlide(slideCount - 3);
      }
  
      // 클릭 후 자동 슬라이딩 재시작
      startAutoSlide();
    });
  };
  