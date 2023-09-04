let mapContainer = document.getElementById('parkingmate-map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.56646, 126.98121), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption); 

// 지도에 로드뷰 정보가 있는 도로를 표시하도록 지도타입을 추가합니다
// map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);     

// 아래 코드는 위에서 추가한 로드뷰 도로 정보 지도타입을 제거합니다
// map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADV

// 내위치로 이동시키기
function setCenter() {            
  // 이동할 위도 경도 위치를 생성합니다 
  let moveLatLon = new kakao.maps.LatLng(37.56646, 126.98121);
  
  // 지도 중심을 이동 시킵니다
  map.setCenter(moveLatLon);
}

// 마커가 표시될 위치입니다 
let markerPosition  = new kakao.maps.LatLng(37.56646, 126.98121); 

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);  
var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            더존을지타워' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">서울 중구 을지로 29</div>' + 
            '                <div class="jibun ellipsis">(우) 04523 (지번) 을지로1가 87</div>' + 
            '                <div><a href="" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
var overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition()       
});

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
kakao.maps.event.addListener(marker, 'click', function() {
    overlay.setMap(map);
});

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
function closeOverlay() {
    overlay.setMap(null);     
}

function locationLoadSuccess(pos){
// 현재 위치 받아오기
var currentPos = new kakao.maps.LatLng(pos.coords.latitude,pos.coords.longitude);

// 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
map.panTo(currentPos);

// 마커 생성
var marker = new kakao.maps.Marker({
position: currentPos
});

// 기존에 마커가 있다면 제거
marker.setMap(null);
marker.setMap(map);
};

function locationLoadError(pos){
    alert('위치 정보를 가져오는데 실패했습니다.');
};

// 위치 가져오기 버튼 클릭시

function getCurrentPosBtn(){
    navigator.geolocation.getCurrentPosition(locationLoadSuccess,locationLoadError);
};

// 모달창
let popup = document.querySelector('.parkingmate-modal-container');
let modal = document.querySelector('.parkingmate-close-button');
let body = document.querySelector('body');

modal.addEventListener('click',() =>{
    popup.style.display = 'none';
    body.style.overflow = 'auto';
})