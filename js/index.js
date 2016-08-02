$(document).ready(function(){
  $("div.header").mouseenter(function() {
    $(this).addClass("link-animation");
  });
  $("div.header").mouseleave(function() {
    $(this).removeClass("link-animation");
  });
});