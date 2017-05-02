$(document).ready(function(){
$("#invoer").on("change keyup paste", function(){
  var toverwoord = $('#invoer').val();

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