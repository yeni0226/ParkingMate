document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelector('.slide-bx');
  let slideImg = document.querySelectorAll('.slide-bx li');
  let currentIdx = 0;
  const slideCount = slideImg.length;
  const prev = document.querySelector('.lbtn'); // 이전 버튼
  const next = document.querySelector('.rbtn'); // 다음 버튼
  const slideWidth = 410; // 슬라이드 이미지 넓이
  let isTransitioning = false; // 슬라이드가 이동 중인지 여부

  // 슬라이드 복사 및 초기화 함수
  function makeClone() {
    let cloneSlide_first = slideImg[0].cloneNode(true);
    let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_first);
    slides.insertBefore(cloneSlide_last, slides.firstElementChild);
  }

  function initfunction() {
    slides.style.width = (slideWidth) * (slideCount + 2) + 'px';
    slides.style.left = -(slideWidth) + 'px';
  }

  // Next 버튼 클릭 이벤트 처리
  next.addEventListener('click', function () {
    if (!isTransitioning) {
      isTransitioning = true;
      if (currentIdx <= slideCount - 1) {
        slides.style.left = -(currentIdx + 2) * (slideWidth) + 'px';
        slides.style.transition = `${0.5}s ease-out`;
      }
      if (currentIdx === slideCount - 1) {
        setTimeout(function () {
          slides.style.left = -(slideWidth) + 'px';
          slides.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = -1;
      }
      currentIdx += 1;
      setTimeout(function () {
        isTransitioning = false;
      }, 500);
    }
  });

  // Prev 버튼 클릭 이벤트 처리
  prev.addEventListener('click', function () {
    if (!isTransitioning) {
      isTransitioning = true;
      if (currentIdx >= 0) {
        slides.style.left = -currentIdx * (slideWidth) + 'px';
        slides.style.transition = `${0.5}s ease-out`;
      }
      if (currentIdx === 0) {
        setTimeout(function () {
          slides.style.left = -slideCount * (slideWidth) + 'px';
          slides.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = slideCount;
      }
      currentIdx -= 1;
      setTimeout(function () {
        isTransitioning = false;
      }, 500);
    }
  });

  // 초기화 함수 호출
  makeClone();
  initfunction();
});
