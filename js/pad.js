$(document).ready(function(){
$("#test").on("change keyup paste", function(){
  var toverwoord = $('#test').val();

  switch(toverwoord) {
  	case "test":
  		$("#p1").appendTo("#mvtest");
  		$('#testimage01').css({"filter":"grayscale(0%)"});
  		break;
  	case "test2":
  		$("#p2").appendTo("#mvtest");
  		$('#testimage02').css({"filter":"grayscale(0%)"});
  		break;
  }
 })
});