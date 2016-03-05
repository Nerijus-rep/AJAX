$.get("data.txt", function (response) {
    console.log(response);
    $("p").load("data.txt");
});

$(document).ready(function () {
    $.getJSON("http://www.colourlovers.com/api/palette/1930?jsonCallback=?",
        function (colorPalettes) {
            printColors(colorPalettes);
        });
    function printColors(colorPalettes) {
        for (var palette in colorPalettes) {

            console.log(colorPalettes[palette].colors[0]);
            console.log(colorPalettes[palette].colors[1]);
            console.log(colorPalettes[palette].colors[2]);
            console.log(colorPalettes[palette].colors[3]);
            console.log(colorPalettes[palette].colors[4]);

            $(document).ready(function () {

                var colors = "#" + colorPalettes[palette].colors[0];
                var colors1 = "#" + colorPalettes[palette].colors[1];
                var colors2 = "#" + colorPalettes[palette].colors[2];
                var colors3 = "#" + colorPalettes[palette].colors[3];
                var colors4 = "#" + colorPalettes[palette].colors[4];
                
                var array = [colors, colors1, colors2, colors3, colors4,];
                var counter = 0;
                var nextColor;
                var timer;

                $("#startb").on("click", function () {
                    function colorchange() {
                        counter = (counter + 1) % array.length;
                        nextColor = array[counter];
                        $("p").css("color", nextColor);
                    };

                    timer = setInterval(colorchange, 1000);

                    $("#stopb").on("click", function () {
                        clearInterval(timer);
                        counter = 0;


                    });
                });
            });
        };
    };
});
                