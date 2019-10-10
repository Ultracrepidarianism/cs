$(document).ready(function ()
{
    $("div.membre").click(function () {
        let membreCourant = $(this);
        if(membreCourant.hasClass("membreOuvert")){
            if(!membreCourant.is(":animated") && !membreCourant.children("img").is(":animated"))
            {
                membreCourant.children("p.hidden").stop().hide();
                membreCourant.children("img").stop().animate({width: "100px",height:"100px"},'slow',"swing",function () {
                    membreCourant.stop().animate({width: "100px",height:"100px"},'slow',"swing",function () {
                        membreCourant.removeClass("membreOuvert");
                    });
                });
            }

        }
        else{
            if(!membreCourant.is(":animated") && !membreCourant.children("img").is(":animated"))
            {
                membreCourant.addClass("membreOuvert");
                membreCourant.stop().animate({width: "250px",height:"400px"},'slow',"swing",function () {
                    membreCourant.children("img").stop().animate({width: "200px",height:"200px"},'slow','swing');
                    membreCourant.children("p.hidden").stop().show();
                })
            }
        }
    })
});