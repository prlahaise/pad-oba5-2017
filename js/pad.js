$(document).ready(function(){

var puzzleID;

// Initialize overlay plugin
$('#my_popup').popup();
$('#my_popup2').popup();
$('#my_popup3').popup();

// Set puzzle to done
function puzzleDone() {
    $('#' + puzzleID).appendTo("#mvtest");
    $('#puzzleimage_' + puzzleID).css({"filter":"grayscale(0%)"});
};

// Check session cookies
for (i =0; i < 11; i++) {
   if (Cookies.get('p' + i) === "1") {
    puzzleID = 'p' + i;
    puzzleDone();
   }
}

// Load Phaser games into popup
$('#my_popup').popup({
  onopen: function() {
    $(this).load("geheugen.html");
  }
});

$('#my_popup2').popup({
  onopen: function() {
    $(this).load("schuifpuzzel.html");
  }
});

$('#my_popup3').popup({
  onopen: function() {
    $(this).load("hetmuizenhuis1.html");
  }
});

$('#my_popup4').popup({
  onopen: function() {
    $(this).load("hetmuizenhuis2.html");
  }
});

// Empty Phaser games from popup
$('.popup').popup({
  onclose: function() {
    game.AudioContext = null;
    game.webkitAudioContext = null;
    game.SoundManager = null;
  	game.destroy();
  	$(this).empty();
  }
});

// Check user input for 'toverwoorden'
$('#invoer').on("change keyup paste", function(){
  var toverwoord = $('#invoer').val();

  switch(toverwoord) {
  	case "test":
      puzzleID = "p1";
      puzzleDone();
      Cookies.set('p1', '1');
  		break;
  	case "test2":
  		puzzleID = "p2";
      puzzleDone();
      Cookies.set('p2', '1');
  		break;
    case "test3":
      puzzleID = "p3";
      puzzleDone();
      Cookies.set('p3', '1');
      break;
    case "test4":
      puzzleID = "p4";
      puzzleDone();
      Cookies.set('p4', '1');
      break;
  }
 })
});