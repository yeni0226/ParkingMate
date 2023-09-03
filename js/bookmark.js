document.addEventListener("DOMContentLoaded", function(){

  // 즐겨찾기 박스 선택
  const favoriteBtn = document.querySelector(".favorite-bx");

  // 즐겨찾기 path 선택
  const favoriteLogo = document.getElementById("favorite-path");

  // 즐겨찾기 비할당값
  const favoriteBefore = "M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085zm-5.28 21.84l-.88.8-.88-.8h-.08C8.4 19.76 4 15.84 4 11.44l-.001-.082A5.76 5.76 0 0 1 9.928 5.6a6.542 6.542 0 0 1 4.865 2.232l.486.567h1.52l.48-.56a6.548 6.548 0 0 1 4.877-2.24l.084-.001a5.76 5.76 0 0 1 5.76 5.76l-.001.085c0 4.396-4.4 8.316-11.12 14.396z";

  // 즐겨찾기 할당값
  const favoriteAfter = "M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085z";
  
  // 즐겨찾기 박스 클릭시
  favoriteBtn.addEventListener("click", function() {

    // 즐겨찾기 path d 값
    const currentD = favoriteLogo.getAttribute("d");

    // 할당으로 바꾸기
    if(currentD === favoriteBefore){
      favoriteLogo.setAttribute("d", favoriteAfter)
      favoriteLogo.classList.add("favorite-select");
    } 
    
    if(currentD === favoriteAfter) {
      favoriteLogo.setAttribute("d", favoriteBefore)
      favoriteLogo.classList.remove("favorite-select");
    }

  })
})