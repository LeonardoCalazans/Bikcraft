document.addEventListener("DOMContentLoaded", function () {
    const backTop = document.getElementById('#irtopo');
    document.getElementById(backTop).addEventListener("click", window.top);
});

// $(document).ready(function () {
//     console.log("ready");
//     backTop.style.display = "none";

//     $("body").scroll(function () {
//         if ($(this).scrollTop() == 0) {
//             backTop.style.display = "none";
//         } else {
//             backTop.style.display = "block";
//         }
//     });

//     $(document).ready(function () {
//         $(backTop).click(function () {
//             $('html, body').animate({ scrollTop: 0 }, 800);
//             return false;
//         });
//     })
// })
