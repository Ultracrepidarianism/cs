$(document).ready(function (){
$(".description").click(function (){
    let description = $(this);
    if(description.parent().is(":animated")) return;
    if(description.siblings("p.hidden").is(":visible"))
    {
        description.parent().stop().animate({height: "550px"},'slow');
        description.text("En savoir plus");
        description.siblings("p.hidden").slideUp('slow');
    }
    else{
        description.parent().stop().animate({height: "650px"},'slow');
        description.text("Réduire");
        description.siblings("p.hidden").slideDown('slow');
    }
});

    $(".PhotoGallery").jqxScrollView({width:"700 px",height:"700px",bounceEnabled: 'true',slideShow: true,theme:'darkblue'/*Custom*/,slideDuration: '5000',animationDuration: '100'});
});

$(document).on('change',"select#menu", function () {
    let select = $(this);
    $("div.ObjetAVendre").hide();
    if(select.val().toString() == "Tous")
    {
        $("div.ObjetAVendre").show();
        return;
    }
    $("div.ObjetAVendre").each(function () {
        let objet = $(this);
        if(objet.hasClass(select.val().toString())){
            objet.show();
        }
    })
});