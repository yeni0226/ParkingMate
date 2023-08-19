let mapContainer = document.getElementById('parkingmate-map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption); 

// 지도에 로드뷰 정보가 있는 도로를 표시하도록 지도타입을 추가합니다
map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);     

// 아래 코드는 위에서 추가한 로드뷰 도로 정보 지도타입을 제거합니다
// map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADV

// 내위치로 이동시키기
function setCenter() {            
  // 이동할 위도 경도 위치를 생성합니다 
  let moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
  
  // 지도 중심을 이동 시킵니다
  map.setCenter(moveLatLon);
}

// 마커가 표시될 위치입니다 
let markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);  

console.log("머임")

