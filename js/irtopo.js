
const backTop = document.getElementById('irtopo');

// backTop.addEventListener("click", window.top);

window.onscroll = () => {
    scroll();
}
function scroll() {
    if (window.documentElement.scrollTop > 50) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
};

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
