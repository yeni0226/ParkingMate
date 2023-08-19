var mapContainer = document.getElementById('parkingmate-map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 내위치로 이동시키기
function setCenter() {            
  // 이동할 위도 경도 위치를 생성합니다 
  var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
  
  // 지도 중심을 이동 시킵니다
  map.setCenter(moveLatLon);
}