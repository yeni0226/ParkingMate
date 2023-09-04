let $button = $(".button-text");
let $modal = $(".modal-container");
let $body = $("body");
let $close = $(".modal-close")

// 이용약관 표시
$button.on("click", (e) =>{
  $modal.css("display","block");
  $body.css("overflow", "hidden");
});

// 이용약관 끄기
$close.on("click", (e) =>{
  $modal.css("display", "none");
  $body.css("overflow","auto");
})