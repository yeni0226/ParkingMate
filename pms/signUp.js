let $button = $(".button-text");
let $modal = $(".modal-container");
let $body = $("body");
let $close = $(".modal-close")
let $overlay = $(".modal-overlay");
let $content = $(".modal-content");
let $header = $(".confirmModal-header")
let $before = $(".confirmModal-header::before")
// 이용약관 표시
// $button.on("click", (e) =>{
//   $modal.css("display","block");
//   $body.css("overflow", "hidden");
// });

$button.on("click", (e) =>{
  $modal.animate({height : '100%'});
  $close.animate({height : '200px',top :'0%'});
  $overlay.animate({height : '100%',top:'0'});
  $content.animate({height : '100%',top:'20vh'});
  // $header.animate({height : '100%'});
  // $before.animate({height : '100%'});
  $body.css("overflow", "hidden");
});


// 이용약관 끄기
// $close.on("click", (e) =>{
//   $modal.css("display", "none");
//   $body.css("overflow","auto");
// })
$close.on("click", (e) =>{
  $modal.animate({height : '0%'});
  $close.animate({height : '0%',top :'100%'});
  $overlay.animate({height : '0%',top:'100%'});
  $content.animate({height : '0%',top:'100%'});
  $header.animate({height : '0%'});
  $before.animate({height : '0%'});
  $body.css("overflow","auto");
})

let $checkbox = $(".Checkbox_icon");
let $checked = $(".Check")
let $allCheckLabel = $(".all-check-label");
let $outsideAllCheckLabel = $(".outside-all-check-label");
let $allCheck = $(".all-check");
let $checkChild = $(".check-child");
let $checkChildLabel = $(".check-child-label");
let $input = $("input[name=chk]");

$allCheckLabel.on("click",(e) =>{
  //변수에 라벨 클릭 시 checked 여부 저장 (true / false)
  let isChecked = $(e.target).prop("checked");
  
  //기존에 두 체크박스 checked 값이 다른 경우가 있었음 => 두 체크박스 속성 무조건 같도록 isChecked변수로 박아버림(true / false)
   $(".fullAgreement").prop("checked", isChecked);

  //위랑 같은 이유, 한쪽은 true인데 한쪽은 false라 애가 한쪽이 체크되서 true인 상태에서 다른 쪽 누를라하면 걔는 false 라 동작안됨
  //위에서 두 체크박스 값 같도록 박아버리고 isChecked변수로 css 제어
  if (isChecked) {
    $allCheck.addClass('checked');
    $checkChild.addClass('checked');
  } else {
    $allCheck.removeClass('checked');
    $checkChild.removeClass('checked');
  }
});

$input.on("click", (e) =>{
  console.log($(e.target).prop("checked"))
  if($(e.target).is(':checked')){
    $(e.target).next(".check-child").addClass('checked');
  }else{
    $(e.target).next(".check-child").removeClass('checked');
    $(e.target).prop("checked", false);
  }

  var total = $input.length;
  var checks = $("input[name=chk]:checked").length;

  if(total != checks){
    $(".fullAgreement").prop("checked", false);
    $allCheck.removeClass('checked');
  }else {
    $(".fullAgreement").prop("checked", true);
    $allCheck.addClass('checked');
  } 
})
// $checkChildLabel.on("click", (e) =>{
//   console.log($(e.target).find("input[name=chk]").prop("checked"))
//   if($(e.target).find("input[name=chk]").prop("checked", true)){
//     $(e.target).find(".check-child").addClass('checked');
//   }else if($(e.target).find("input[name=chk]").prop("checked", false)){
//     $(e.target).find(".check-child").removeClass('checked');
//   }
// })

// $input.click(function() {
//   var total = $input.length;
//   var checks = $("input[name=chk]:checked").length;

//   if(total != checks){
//     $(".fullAgreement").prop("checked", false);
//     $allCheck.removeClass('checked');
//   }else {
//     $(".fullAgreement").prop("checked", true);
//     $allCheck.addClass('checked');
//   }  
// });