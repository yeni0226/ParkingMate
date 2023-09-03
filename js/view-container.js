document.addEventListener("DOMContentLoaded", function() {

  const containerLiElements = document.querySelectorAll(".sbp-container-li");

containerLiElements.forEach(function (li) {
  li.addEventListener("click", function (event) {
    // 다른 li 요소 안에 있는 sel 클래스 제거
    containerLiElements.forEach(function (otherLi) {
      if (otherLi !== li) {
        otherLi.classList.remove("sel");
        const otherDiv = otherLi.querySelector("div");
        if (otherDiv) {
          otherDiv.classList.remove("sbp-all");
        }
      }
    });

    // 클릭한 li 요소에 sel 클래스 추가
    li.classList.add("sel");

    // 클릭한 li 요소 안에 있는 div 요소에 sbp-all 클래스 추가
    const div = li.querySelector("div");
    if (div) {
      div.classList.add("sbp-all");
    }
  });
});

});