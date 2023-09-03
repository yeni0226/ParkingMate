document.addEventListener("DOMContentLoaded", function() {

  const infoBxLi = document.querySelectorAll(".info-box li");

infoBxLi.forEach(function (li) {
  const span = li.querySelector("span");
  const a = li.querySelector("a");

  // a 태그의 클릭 이벤트 동작을 중지
  a.addEventListener("click", function (event) {
    event.preventDefault();
  });

  li.addEventListener("click", function (event) {
    // 클릭한 li 요소 안에 있는 span 요소에 "allocation" 클래스 추가
    span.classList.add("allocation");

    // 다른 li 요소 안에 있는 span 요소에서 "allocation" 클래스 제거
    infoBxLi.forEach(function (otherLi) {
      if (otherLi !== li) {
        const otherSpan = otherLi.querySelector("span");
        otherSpan.classList.remove("allocation");
      }
    });
  });
});




}) 