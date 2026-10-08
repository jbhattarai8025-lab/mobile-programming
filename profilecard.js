$(document).ready(function () {

    // GET & SET

    $("#showName").click(function () {
        let name = $("#studentName").text();
        $("#output").text(name);
    });

    $("#changeName").click(function () {
        $("#studentName").text("John Bhattarai");
        $("#output").text("Name set to John Bhattarai");
    });

    $("#showBio").click(function () {
        let bio = $("#studentBio").text();
        $("#output").text(bio);
    });

    $("#getInput").click(function () {
        let nickname = $("#nicknameInput").val();
        $("#output").text(nickname);
    });

    $("#setInput").click(function () {
        $("#nicknameInput").val("John B.");
    });


    // CSS CLASSES

    $("#highlightCard").click(function () {
        $("#profileCard").addClass("highlighted");
    });

    $("#removeHighlight").click(function () {
        $("#profileCard").removeClass("highlighted");
    });

    $("#toggleDark").click(function () {
        $("#profileCard").toggleClass("dark-mode");
    });

    $("#toggleRounded").click(function () {
        $("#profilePhoto").toggleClass("rounded");
    });

    $("#toggleShadow").click(function () {
        $("#profileCard").toggleClass("shadow");
    });


    // CSS METHOD

    $("#redBackground").click(function () {
        $("#profileCard").css("background-color", "#8b0000");
    });

    $("#resetBackground").click(function () {
        $("#profileCard").css("background-color", "#151515");
    });


    // HIDE & SHOW

    $("#hidePhoto").click(function () {
        $("#profilePhoto").hide("slow");
    });

    $("#showPhoto").click(function () {
        $("#profilePhoto").show("slow");
    });

    $("#toggleBio").click(function () {
        $("#studentBio").toggle();
    });


    // FADE

    $("#fadeOut").click(function () {
        $("#profileCard").fadeOut();
    });

    $("#fadeIn").click(function () {
        $("#profileCard").fadeIn();
    });

    $("#fade50").click(function () {
        $("#profileCard").fadeTo("slow", 0.5);
    });


    // SLIDE

    $("#slideUp").click(function () {
        $("#skillsList").slideUp();
    });

    $("#slideDown").click(function () {
        $("#skillsList").slideDown();
    });

    $("#slideToggle").click(function () {
        $("#skillsList").slideToggle();
    });


    // ANIMATE

    $("#animateCard").click(function () {
        $("#profileCard")
            .animate({
                marginLeft: "200px",
                opacity: 0.7
            }, 1000)
            .animate({
                marginLeft: "auto",
                opacity: 1
            }, 1000);
    });

    $("#resetCard").click(function () {
        $("#profileCard").stop(true, true).css({
            "margin-left": "auto",
            "margin-right": "auto",
            "opacity": "1"
        });
    });


    // SHOW QR CODE

    $("#showQR").click(function () {
        $("#qrSection").slideDown();

        $("#profileCard").css(
            "background-color", "#2b0000"
        );

        $("body").addClass("qr-open");
    });


    // CLOSE QR CODE

    $("#closeQR").click(function () {
        $("#qrSection").slideUp();

        $("#profileCard").css(
            "background-color", "#151515"
        );

        $("body").removeClass("qr-open");
    });

});