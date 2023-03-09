$(document).ready(function() {
    //Change all "Something about me"-text:
    $("h3 + p").remove(),
    $("h3 + p").replaceWith("<p>I like to travel. South Africa is a favourite. I spent five weeks \
    camping and going on safaris. I've also lived in Sydney, Australia for six months. \
    In my free time I enjoy spending time with friends and family, and I enjoy the occational glass of wine.</p>"),

    //Change "student name" to your student name:
    $("#about span").text(function() {
        return $(this).text().replace("student name", "MK");
    });


    //Change colours of "Something about me"-content:
    $("h3 + p").on({
        click: function() {
            $(this).css("background-color", "powderblue"),
            $(this).css("color", "white");
        }
    });
});
