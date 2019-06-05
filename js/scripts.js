$(document).ready(function() {

  $(".clickable").click(function() {
    $(".walrus-showing").toggle(300);
    $(".walrus-hidden").toggle();
  });
});
$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
  $("button#default").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
$(document).ready(function(){

  $(".most").click(function(){
    $("p").css ("color","blue");
    $("p").css ("borderRadius","borderBox")
  })
})
