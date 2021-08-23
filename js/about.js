const parallax = document.querySelector(".story");

       window.addEventListener("scroll", function() {
        let offset = window.pageYOffset / 10;
    //console.log("offset:" + offset);
        parallax.style.backgroundPositionY = offset * -0.5 + "px";
});

const counter = document.querySelector("#counter");

window.addEventListener("scroll", function() {
    let offset2 = window.pageYOffset / 1.2;
    counter.style.backgroundPositionX = offset2 * -0.5 + "px";
})





//COUNTER
if($("#counter").is(":visible")) {
$(function() {
    let start = 0;
    let end1 = $(".num1").html();

    setInterval(function() {
        if(start < end1) {
            start+=5;
        }
        $(".num1").html(start);
    }, 10);
});}

$(function() {
    let start = 0;
    let end2 = $(".num2").html();
    
    setInterval(function() {
        if(start < end2) {
            start+=20;
        }
        $(".num2").html(start);
    }, 0.1);
});

$(function() {
    let start = 1;
    let end3 = $(".num3").html();
    
    setInterval(function() {
        if(start < end3) {
            start+=2;
        }
        $(".num3").html(start);
    }, 100);
});

$(function() {
    let start = 0;
    let end4 = $(".num4").html();
    
    setInterval(function() {
        if(start < end4) {
            start++;
        }
        $(".num4").html(start);
    }, 100);
});

$(document).ready(function() {
    $("#scrollBtn").click(function() {
        $(window).scrollTop(0);
    })
})
    
