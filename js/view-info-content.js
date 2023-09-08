document.addEventListener("DOMContentLoaded", function () {
  const infoBxLi = document.querySelectorAll(".info-box li");
  const storyContent = document.querySelector(".story_container");
  const satisfactionContent = document.querySelector(".satisfaction-box");
  const policyContent = document.querySelector(".policy-container");

  infoBxLi.forEach(function (li, index) {
    const span = li.querySelector("span");
    const a = li.querySelector("a");

    // a 태그의 클릭 이벤트 동작을 중지
    a.addEventListener("click", function (event) {
      event.preventDefault();
    });

    li.addEventListener("click", function () {
      // 모든 컨텐츠 숨기기
      storyContent.style.display = "none";
      satisfactionContent.style.display = "none";
      policyContent.style.display = "none";

      // 클릭한 li에 따라 해당 컨텐츠 보이기
      if (index === 0) {
        storyContent.style.display = "block";
      } else if (index === 1) {
        satisfactionContent.style.display = "block";
      } else if (index === 2) {
        policyContent.style.display = "block";
      }

      // 클릭한 li에 "allocation" 클래스 추가
      infoBxLi.forEach(function (otherLi) {
        const otherSpan = otherLi.querySelector("span");
        otherSpan.classList.remove("allocation");
      });
      span.classList.add("allocation");
    });
  });
});
