$(document).ready(function () {
    $("#irtopo").css("display", "none");

    $("body").scroll(function () {
        if ($(this).scrollTop() == 0) {
            $("#irtopo").css("display", "none");
        } else {
            $("#irtopo").css("display", "block");
        }
    });

    $(document).ready(function () {
        $('#irtopo').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    })
});