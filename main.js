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

            var currentcolor = 0;
            var colors = colorPalettes[palette].colors[0];

            $("button").on("click", function () {
                $("p").css("color", "#" + colors[currentcolor]);
                currentcolor++;

                if (currentcolor > colors.length - 1) {
                    currentcolor = 0;
                };
            });
        };
    };
});
     