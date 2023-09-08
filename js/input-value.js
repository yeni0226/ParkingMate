document.addEventListener("DOMContentLoaded", function() {

  // 배송 요청 사항 선택 옵션들을 가져옵니다.
const options = document.querySelectorAll('.select-menu-option');

// readonly input 요소를 가져옵니다.
const inputElement = document.querySelector('.select-menu-hidden-input-box input');

// 각 옵션에 클릭 이벤트 리스너를 추가합니다.
options.forEach(option => {
  option.addEventListener('click', function() {
    // 클릭한 옵션의 텍스트를 읽어와서 input 요소의 값으로 설정합니다.
    inputElement.value = this.textContent;
  });
});


})