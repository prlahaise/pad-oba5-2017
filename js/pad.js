$(document).ready(function(){

// Initialize overlay plugin
$('#my_popup').popup();
$('#my_popup2').popup();

// Load Phaser games
$('#my_popup').popup({
  onopen: function() {
    $(this).load("test2.html");
  }
});

$('#my_popup2').popup({
  onopen: function() {
    $(this).load("slide.html");
  }
});

// Empty Phaser games from popup
$('.popup').popup({
  onclose: function() {
  	game.destroy();
  	$(this).empty();
  }
});

// Check user input for 'toverwoorden'
$('#invoer').on("change keyup paste", function(){
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