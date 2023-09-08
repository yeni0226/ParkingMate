document.addEventListener("DOMContentLoaded", function() {

  const btn1 = document.querySelector(".delivery-notes-input");

  const btnImg = document.querySelector(".delivery-notes-expand-container-ibx");

  const moreBx = document.querySelector(".more-menu");

  const inputBx = document.querySelector(".select-menu-bx");

  const menuOption = document.querySelectorAll(".select-menu-option");

  const inputBx2 = document.querySelector(".select-menu-text");

  const selfInput = document.getElementById("deliveryRequest");

  btn1.addEventListener("click", function() {
    var isVisible = moreBx.style.display !== "none";

    if (isVisible) {
      moreBx.style.display = "none"; // 감추기
      btnImg.style.transform = "rotate(0deg)";
      inputBx.style.border = "1px solid #dde2e6"
    } else {
      moreBx.style.display = "block"; // 보이기
      btnImg.style.transform = "rotate(180deg)";
      inputBx.style.border = "1px solid #00c4c4"
    }
  })

  menuOption.forEach(function(e) {
    e.addEventListener("click", function() {
        inputBx2.textContent = e.textContent;
        
        if(inputBx2.textContent === "직접 입력") {
            // selfInput.style.display = "block";
            console.log("ddd");
        }
    }); 
  });




})