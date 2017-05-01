$(document).ready(function(){
$("#test").on("change keyup paste", function(){
  var toverwoord = $('#test').val();

  switch(toverwoord) {
  	case "test":
  		$("#p1").appendTo("#mvtest");
  		break;
  	case "test2":
  		$("#p2").appendTo("#mvtest");
  		break;
  }
 })
});