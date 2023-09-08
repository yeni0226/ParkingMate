document.addEventListener("DOMContentLoaded", function () {
  const searchAll = document.querySelector(".search-all");
  const searchBx1 = document.querySelector(".search-bx");
  const searchBx2 = document.querySelector(".search-bx.sb-2");
  const searchInput1 = searchBx1.querySelector("input");
  const searchInput2 = searchBx2.querySelector("input");

  // 초기화
  let isOpen1 = false;
  let isOpen2 = false;

  // 검색 버튼 클릭 이벤트
  document.querySelector(".search-button").addEventListener("click", function (event) {
    event.stopPropagation(); // 다른 클릭 이벤트 전파 방지
  
    if (!isOpen1 && !isOpen2) {
      isOpen1 = true;
      isOpen2 = true;
      searchAll.style.top = "60px";
    } else {
      isOpen1 = false;
      isOpen2 = false;
      searchAll.style.top = "-120px";
    }
  });

  // 첫 번째 .search-bx 포커스 이벤트
  searchInput1.addEventListener("focus", function () {
    searchBx1.style.borderColor = "#00c4c4";
  });

  searchInput1.addEventListener("blur", function () {
    searchBx1.style.borderColor = "";
  });

  // 두 번째 .search-bx 포커스 이벤트
  searchInput2.addEventListener("focus", function () {
    searchBx2.style.borderColor = "#00c4c4";
  });

  searchInput2.addEventListener("blur", function () {
    searchBx2.style.borderColor = "";
  });

  // 다른 곳을 클릭했을 때 .search-all의 위치 초기화
  document.addEventListener("click", function (event) {
    if (
      !searchAll.contains(event.target) &&
      !event.target.classList.contains("search-button") &&
      !event.target.classList.contains("search-bx") &&
      !event.target.closest(".search-button") &&
      !event.target.closest(".search-bx")
    ) {
      isOpen1 = false;
      isOpen2 = false;
      searchAll.style.top = "-120px";
    }
  });

  const selectOptionBx = document.querySelector(".select-option-bx");
  const selectOptionUl = document.querySelector(".select-option-ul");
  const selectOptionBtns = document.querySelectorAll(".select-option-btn");
  const selectOptionLis = document.querySelectorAll(".select-option-li");

  // 옵션 선택 상태 변수
  let selectedOption = null;

  // select-option-bx를 클릭하면 select-option-ul을 나타내거나 숨김
  selectOptionBx.addEventListener("click", function () {
    selectOptionUl.classList.toggle("show");
  });

  // 각 옵션 버튼에 클릭 이벤트 추가
  selectOptionBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      // 현재 선택된 li
      const currentLi = selectOptionLis[index];
      
      // 다른 li에서 selected-li 클래스 제거
      selectOptionLis.forEach(function (li) {
        if (li !== currentLi) {
          li.classList.remove("selected-li");
        }
      });

      // 현재 li에 selected-li 클래스 추가
      currentLi.classList.toggle("selected-li");

      // 선택한 li의 before 요소의 border-left 스타일을 설정
      const beforeElement = currentLi.querySelector("span.select-img-ibx");
      if (currentLi.classList.contains("selected-li")) {
        beforeElement.style.borderLeft = "none";
      } else {
        beforeElement.style.borderLeft = "0px solid #00c4c4";
      }

      // 선택된 옵션 업데이트
      selectedOption = currentLi.querySelector("span").textContent;

      // 선택된 옵션을 사용하여 원하는 작업 수행
      // 예: 선택된 옵션을 콘솔에 출력
      console.log("선택된 옵션:", selectedOption);

      // select-option-ul 숨김
      selectOptionUl.classList.remove("show");
    });
  });
  
  
  
});
