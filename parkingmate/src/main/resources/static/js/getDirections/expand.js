document.addEventListener("DOMContentLoaded", function() {

  const btn1 = document.getElementById("expand-btn1");

  const page1 = document.querySelector(".expand-bx-open");

  btn1.addEventListener("click", function() {
    var isVisible = page1.style.display !== "none";

    if (isVisible) {
      page1.style.display = "none"; // 감추기
      btn1.style.transform = "rotate(0deg)";
    } else {
      page1.style.display = "block"; // 보이기
      btn1.style.transform = "rotate(180deg)";
    }

  })

  const btn2 = document.getElementById("expand-btn2");

  const page2 = document.querySelector(".shipping-receiver-box");

  btn2.addEventListener("click", function() {
    var isVisible = page2.style.display !== "none";

    if (isVisible) {
      page2.style.display = "none"; // 감추기
      btn2.style.transform = "rotate(0deg)";
    } else {
      page2.style.display = "block"; // 보이기
      btn2.style.transform = "rotate(180deg)";
    }

  })

  const btn3 = document.getElementById("expand-btn3");

  const page3 = document.querySelector(".product-info");

  btn3.addEventListener("click", function() {
    var isVisible = page3.style.display !== "none";

    if (isVisible) {
      page3.style.display = "none"; // 감추기
      btn3.style.transform = "rotate(180deg)";
    } else {
      page3.style.display = "block"; // 보이기
      btn3.style.transform = "rotate(0deg)";
    }

})

})