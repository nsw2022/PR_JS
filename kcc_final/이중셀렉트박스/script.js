// 테스트 데이터 객체 선언
const objTest = {
  fruits: ["apple", "banana", "peach", "mango", "kiwi"], // 과일 목록
  vehicles: ["Airplain", "Scooter", "Bus", "Train", "Van"], // 차량 목록
  brands: ["Apple", "Google", "Microsoft", "Amazon", "Tesla"], // 브랜드 목록
  footballPlayers: ["Pele", "Maradona", "Messi", "Ronaldo", "Ronaldinho"], // 축구 선수 목록
};

$(function () {
  init(); // 초기 설정 함수 호출

  // select 요소의 값이 변경될 때 이벤트 핸들러 설정
  $(document).on("change", "select[name=sbx_class]", function () {
    const classVal = $(this).val(); // 선택된 카테고리 값을 변수에 저장
    updateItemOptions(classVal); // 카테고리에 따른 아이템 옵션을 업데이트하는 함수 호출
  });
});

// 페이지 로드 시 초기 설정을 수행하는 함수
function init() {
  let sClassHtml = '<option value="">선택하세요.</option>'; // 클래스 선택 초기 옵션
  let sItemHtml = '<option value="">선택하세요.</option>'; // 아이템 선택 초기 옵션

  // objTest의 각 키에 대해 옵션 요소를 생성
  for (const key in objTest) {
    sClassHtml += `<option value="${key}">${key}</option>`;
  }

  // 클래스 선택 드롭다운과 아이템 선택 드롭다운에 HTML 내용 적용
  $("select[name=sbx_class]").html(sClassHtml);
  $("select[name=sbx_item]").html(sItemHtml); // 초기에는 선택 옵션만 표시
}

// 선택된 클래스에 따라 아이템 옵션을 업데이트하는 함수
// 모바일 브라우저에서는 <select> 요소의 option을 숨기는 것(hide())이 제대로 작동하지 않는 경우가 많다
function updateItemOptions(classVal) {
  let sItemHtml = '<option value="">선택하세요.</option>'; // 아이템 선택 초기 옵션

  // 선택된 클래스가 유효하고, objTest 객체에 해당 클래스가 존재하는 경우
  if (classVal && objTest[classVal]) {
    const list = objTest[classVal];
    // 해당 클래스의 각 아이템에 대해 옵션 요소를 생성
    for (const item of list) {
      sItemHtml += `<option value="${item}">${item}</option>`;
    }
  }

  // 아이템 선택 드롭다운에 새로운 옵션들을 적용
  $("select[name=sbx_item]").html(sItemHtml);
}
