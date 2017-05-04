$(document).ready(function(){

// Initialize overlay plugin
$('#my_popup').popup();
$('#my_popup').load("test2.html");
//$('#my_popup2').popup();
//$('#my_popup2').load("slide.html");


// Check user input for 'toverwoorden'
$("#invoer").on("change keyup paste", function(){
  var toverwoord = $('#invoer').val();

  switch(toverwoord) {
  	case "test":
  		$('#p1').appendTo("#mvtest");
  		$('#testimage01').css({"filter":"grayscale(0%)"});
  		break;
  	case "test2":
  		$('#p2').appendTo("#mvtest");
  		$('#testimage02').css({"filter":"grayscale(0%)"});
  		break;
  }
 })
});