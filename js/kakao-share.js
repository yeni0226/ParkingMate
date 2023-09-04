document.addEventListener("DOMContentLoaded", function() {

  try {
    function sendLinkDefault() {
      Kakao.init('2ae38faa102a6f6c2867b0e8cbd5df73')
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '주차장 정보 공유',
          description: '#주차 #주차장 #예약',
          imageUrl:
            'https://mediahub.seoul.go.kr/uploads/mediahub/2022/02/uZmjEIGLXJCxhjAVQoPvTClPSIkOCIyN.png',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      })
    }
  ; window.kakaoDemoCallback && window.kakaoDemoCallback() }
  catch(e) { window.kakaoDemoException && window.kakaoDemoException(e) }

})