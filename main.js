$(function() {

  console.log("yyooo!")

 // ---- event handler ---- //
  $("#btn-click").click(function(e) {
    // grab the values from the input boxes, then append them to the DOM
    $(".noun").empty().append($("input.noun").val());
    $(".plural noun").empty().append($("input.plural noun").val());
    $(".noun2").empty().append($("input.noun2").val());
    $(".place").empty().append($("input.place").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun3").empty().append($("noun3").val());
  });

});
