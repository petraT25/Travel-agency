
$(document).ready(function() {
    $("#scrollBtn").click(function() {
        $(window).scrollTop(0);
    })
})


//FILTER GALLERY

$(document).ready(function() {
    $(".btn-small").click(function() {
        const select = $(this).attr("data-filter");

        if (select == "all") {
            $(".img").show("1500");
        } else {
            $(".img").not("." + select).hide("1500");
            $(".img").filter("." + select).show("1500");

        }
    });

    $(".btn-small").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    })
    })
    



