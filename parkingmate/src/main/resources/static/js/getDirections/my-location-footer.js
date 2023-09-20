// html이 모두 로딩되면 js가 실행되라
document.addEventListener("DOMContentLoaded", function() {

  // 하단 배너 a태그 선택
  const a = document.querySelectorAll(".gnb-link");

  // a태그 이동 멈춤
  a.forEach(e => {
    e.addEventListener("click", function(event) {
      event.preventDefault(); // 기본 동작 중지
    });
  });

  // 홈 로고

  // 홈 li 선택
  const homeLi = document.getElementById("home-li");

  /////////////////////////////////////////////////////////////////////

  // 예약하기 로고

  // 예약하기 li 선택
  const reservationLi = document.getElementById("reservation-li");

  // 예약하기 로고 svg 선택
  const reservationLogo = document.getElementById("reservation-logo");

  // 예약하기 로고 svg 안 path 선택
  const reservationPath = document.getElementById("reservation-path");

  // 예약하기 로고 svg 안 path 할당시 들어갈 값
  const reservationPathAfter = "M21 5.5a4.502 4.502 0 0 1-2.979 4.236l1.343 6.267a3.5 3.5 0 1 1-3.345 3.127l-4.537-1.297a5.5 5.5 0 1 1-1.878-6.874l3.192-2.903A4.5 4.5 0 1 1 21 5.5zm-2.81 10.753a3.513 3.513 0 0 0-1.841 1.723l-4.48-1.28a5.517 5.517 0 0 0-1.349-4.95l3.084-2.802a4.482 4.482 0 0 0 3.244 1.043l1.343 6.266z";

  // 예약하기 로고 svg 안 path 비할당시 들어갈 값
  const reservationPathBefore = "M21 5.5a4.502 4.502 0 0 1-2.979 4.236l1.343 6.267a3.5 3.5 0 1 1-3.345 3.127l-4.537-1.297a5.5 5.5 0 1 1-1.878-6.874l3.192-2.903A4.5 4.5 0 1 1 21 5.5zm-3.233 3.048a3.301 3.301 0 1 0-2.536-6.096 3.301 3.301 0 0 0 2.536 6.096zM16.5 10a4.482 4.482 0 0 1-2.896-1.056l-3.084 2.803a5.517 5.517 0 0 1 1.35 4.95l4.479 1.279a3.513 3.513 0 0 1 1.842-1.723l-1.343-6.266c-.115.009-.231.013-.348.013zm-10 1.2a4.28 4.28 0 0 1 3.132 1.354 4.285 4.285 0 0 1 1.08 3.811c-.081.401-.219.781-.403 1.133a4.317 4.317 0 0 1-2.067 1.934A4.3 4.3 0 1 1 6.5 11.2zm13.895 10.42a2.3 2.3 0 1 0-.895.18c.317 0 .62-.064.895-.18z"

  /////////////////////////////////////////////////////////////////////

  // 찜하기 로고

  // 찜하기 li 선택
  const selectLi = document.getElementById("select-li");

  // 찜하기 로고 svg 선택
  const selectLogo = document.getElementById("select-logo");

  // 찜하기 로고 svg 안 path 선택
  const selectPath = document.getElementById("select-path");

  // 찜하기 로고 svg 안 path 할당시 들어갈 값
  const selectPathAfter = "M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085z"

  // 찜하기 로고 svg 안 path 비할당시 들어갈 값
  const selectPathBefore = "M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085zm-5.28 21.84l-.88.8-.88-.8h-.08C8.4 19.76 4 15.84 4 11.44l-.001-.082A5.76 5.76 0 0 1 9.928 5.6a6.542 6.542 0 0 1 4.865 2.232l.486.567h1.52l.48-.56a6.548 6.548 0 0 1 4.877-2.24l.084-.001a5.76 5.76 0 0 1 5.76 5.76l-.001.085c0 4.396-4.4 8.316-11.12 14.396z";

  /////////////////////////////////////////////////////////////////////

  // 마이파킹메이트 로고

  // 마이파킹메이트 li 선택
  const parkingMateLi = document.getElementById("parkingMate-li");

  // 마이파킹메이트 svg 선택
  const parkingMateLogo = document.getElementById("parkingMate-logo");

  // 마이파킹메이트 svg 안 path 선택
  const parkingMatePath = document.getElementById("parkingMate-path");

  // 마이파킹메이트 로고 svg 안 path 할당시 들어갈 값
  const parkingMateAfter = "M20.27 3.46a9.42 9.42 0 1 0 0 18.84 9.42 9.42 0 1 0 0-18.84zm0 22.13c-6.52 0-15.19 1.09-15.19 10.57h30.38c0-9.48-8.67-10.57-15.19-10.57z";
  
  // 마이파킹메이트 로고 svg 안 path 비할당시 들어갈 값
  const parkingMateBefore = "M20.27 22.3a9.43 9.43 0 1 0-9.42-9.42 9.43 9.43 0 0 0 9.42 9.42zm0-16.76a7.34 7.34 0 1 1-7.34 7.34 7.34 7.34 0 0 1 7.34-7.34zm0 20.05c-6.52 0-15.19 1.09-15.19 10.57h2.08c0-5.95 3.92-8.49 13.11-8.49s13.11 2.54 13.11 8.49h2.08c0-9.48-8.67-10.57-15.19-10.57z";

  /////////////////////////////////////////////////////////////////////

  // 홈 li 클릭 이벤트
  function homeClickEvent() {

    // 예약하기 로고 svg에 class 제거
    reservationLogo.classList.remove("GNBMobile_active__3WNf8", "GNBIcon_feed__1AjUB");

    // 예약하기 로고 svg 안 path 값 변경
    reservationPath.setAttribute("d", reservationPathBefore);

    /////////////////////////////////////////////////////////////////////

    // 찜하기 로고 svg에 class 제거
    selectLogo.classList.remove("GNBMobile_active__3WNf8");

    // 찜하기 로고 svg 안 path 값 변경
    selectPath.setAttribute("d", selectPathBefore);

    /////////////////////////////////////////////////////////////////////

    // 마이파킹메이트 로고 svg에 class 제거
    parkingMateLogo.classList.remove("GNBMobile_active__3WNf8");

    // 마이파킹메이트 로고 svg 안 path 값 변경
    parkingMatePath.setAttribute("d", parkingMateBefore);
  }

  /////////////////////////////////////////////////////////////////////

  // 예약하기 li 클릭 이벤트
  function reservationClickEvent() {

    // 예약하기 로고 svg에 class 추가
    reservationLogo.classList.add("GNBMobile_active__3WNf8", "GNBIcon_feed__1AjUB");

    // 예약하기 로고 svg 안 path 값 변경
    reservationPath.setAttribute("d", reservationPathAfter);

    /////////////////////////////////////////////////////////////////////

    // 찜하기 로고 svg에 class 제거
    selectLogo.classList.remove("GNBMobile_active__3WNf8");

    // 찜하기 로고 svg 안 path 값 변경
    selectPath.setAttribute("d", selectPathBefore);

    /////////////////////////////////////////////////////////////////////

    // 마이파킹메이트 로고 svg에 class 제거
    parkingMateLogo.classList.remove("GNBMobile_active__3WNf8");

    // 마이파킹메이트 로고 svg 안 path 값 변경
    parkingMatePath.setAttribute("d", parkingMateBefore);
  }

  // 찜하기 li 클릭 이벤트
  function selectClickEvent() {

    // 찜하기 로고 svg에 class 추가
    selectLogo.classList.add("GNBMobile_active__3WNf8");

    // 찜하기 로고 svg 안 path 값 변경
    selectPath.setAttribute("d", selectPathAfter);

    /////////////////////////////////////////////////////////////////////

    // 예약하기 로고 svg에 class 제거
    reservationLogo.classList.remove("GNBMobile_active__3WNf8", "GNBIcon_feed__1AjUB");

    // 예약하기 로고 svg 안 path 값 변경
    reservationPath.setAttribute("d", reservationPathBefore);

    /////////////////////////////////////////////////////////////////////

    // 마이파킹메이트 로고 svg에 class 제거
    parkingMateLogo.classList.remove("GNBMobile_active__3WNf8");

    // 마이파킹메이트 로고 svg 안 path 값 변경
    parkingMatePath.setAttribute("d", parkingMateBefore);
  }

  // 마이파킹이벤트 li 클릭 이벤트
  function parkingMateClickEvent() {

    // 마이파킹메이트 로고 svg에 class 추가
    parkingMateLogo.classList.add("GNBMobile_active__3WNf8");

    // 마이파킹메이트 로고 svg 안 path 값 변경
    parkingMatePath.setAttribute("d", parkingMateAfter);

    /////////////////////////////////////////////////////////////////////

    // 예약하기 로고 svg에 class 제거
    reservationLogo.classList.remove("GNBMobile_active__3WNf8", "GNBIcon_feed__1AjUB");

    // 예약하기 로고 svg 안 path 값 변경
    reservationPath.setAttribute("d", reservationPathBefore);

    /////////////////////////////////////////////////////////////////////

    // 찜하기 로고 svg에 class 제거
    selectLogo.classList.remove("GNBMobile_active__3WNf8");

    // 찜하기 로고 svg 안 path 값 변경
    selectPath.setAttribute("d", selectPathBefore);
  }

  // 홈 이벤트 실행
  homeLi.addEventListener("click", homeClickEvent);

  // 예약하기 이벤트 실행
  reservationLi.addEventListener("click", reservationClickEvent);

  // 찜하기 이벤트 실행
  selectLi.addEventListener("click", selectClickEvent);

  // 마이파킹메이트 이벤트 실행
  parkingMateLi.addEventListener("click", parkingMateClickEvent);
})