$.get( "data.txt", function( response ) {
  console.log( response );
    $("p").load("data.txt");
});

$(document).ready(function(){
      $.getJSON("http://www.colourlovers.com/api/palette/1930?jsonCallback=?",      
function(colorPalettes) { 
      
var textColor = colorPalettes[0].colors[2];
var textColor2 = colorPalettes[0].colors[4];
var textColor3 = colorPalettes[0].colors[2];

var backgroundColor = colorPalettes[0].colors[0];
var backgroundColor2 = colorPalettes[0].colors[2];
var backgroundColor3 = colorPalettes[0].colors[4];
      
    $("button").on('click',function() {
        $("p").css("color", "#" + textColor);
            $("body").css({ backgroundColor:"#" + backgroundColor });

    $("button").on('click',function() {
       $("p").css("color", "#" + textColor2);
           $("body").css({ backgroundColor:"#" + backgroundColor2 });

     $("button").on('click',function() {
        $("p").css("color", "#" + textColor3);
            $("body").css({ backgroundColor:"#" + backgroundColor3 });
            
     $("button").on('click',function() {
            location.reload();
                   
});
});
});
});
});
});
      

   
       
     

   
  
