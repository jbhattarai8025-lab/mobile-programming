$(document).ready(function () {

    $("#start").click(function () {

        $("#box")
            .animate({ top: "250px" }, 1000, function () {
                $(this).css("background", "#000000");
            })

            .animate({ left: "400px" }, 1000, function () {
                $(this).css("background", "#d4af37");
            })

            .animate({ top: "0px" }, 1000, function () {
                $(this).css("background", "#4b0000");
            })

            .animate({ left: "0px" }, 1000, function () {
                $(this).css("background", "#8b0000");
            });

    });

});