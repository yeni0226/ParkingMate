let $button = $('.parkingmate-downloadItem-more');

$button.on("click", (e) =>{
  let $open = $(e.target).find("svg").first();
  let $close = $(e.target).find("svg").last();
  let $target = $(e.target).next();
  $target.toggleClass("hidden");
  if($open.css("display") == "inline"){
    $open.css('display' , 'none');
    $close.css('display' , 'inline');
  }else if ($open.css("display") == "none"){
    $open.css('display' , 'inline');
    $close.css('display' , 'none');
  }
}).toggleClass();