/*const parallax = document.querySelector("#parallax");
const parallax2 = document.querySelector("#parallax2");

//add event listener for window object
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    //console.log("offset:" + offset);
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});


window.addEventListener("scroll", function() {
    let offset2 = window.pageYOffset;
    parallax2.style.backgroundPositionX = offset2 * -0.7 + "px";
})*/

$(document).ready(function() {
    $(".list").click(function() {
        const value = $(this).attr("data-filter");

        if (value === "all") {
            $(".itemBox").show("1000");
        } else {
            $(".itemBox").not("." + value).hide("1000");
            $(".itemBox").filter("." + value).show("1000");

        }
    })

    $(".list").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    })
})