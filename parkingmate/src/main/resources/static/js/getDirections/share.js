document.addEventListener("DOMContentLoaded", function() {
  const shareBx = document.querySelector(".share-bx");
  const shareBtn = document.querySelector(".parking-share-p");

  shareBx.style.bottom = "-100px";
  shareBx.style.display = "none";

  shareBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // 클릭 이벤트 전파 방지
    shareBx.style.display = "block";

    // 다음 프레임에서 bottom 속성 변경
    requestAnimationFrame(function() {
      shareBx.style.bottom = "120px";
    });
  });
  
  shareBx.addEventListener("click", function(event) {
    event.stopPropagation(); // 클릭 이벤트 전파 방지
  });
  
  document.addEventListener("click", function () {
    if (shareBx.style.bottom === "120px") {
      shareBx.style.bottom = "-100px";
      
      setTimeout(() => {
        shareBx.style.display = "none";
      }, 400);
      
      // 다음 프레임에서 display 속성 변경
      // requestAnimationFrame(function() {
      // });
    }
  });

});
