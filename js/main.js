function EtendreMenuUtilisateur(){
    let menu = $(".usermenu");
    if(menu.hasClass("userloginopen")){
        $("form.hidden").fadeOut('fast');
        menu.animate({height: ""},1000,"swing",function(){
                menu.removeClass("userloginopen");
        });
    }
    else{
        menu.addClass("userloginopen")
            .animate({height: "260px"},1000,"swing",function () {
                $("form.hidden").show();
            });
    }
}
$(document).ready(function () {
    // Set the date we're counting down to
    var countDownDate = new Date("Jun 6, 2066 06:06:06").getTime();

// Update the count down every 1 second
    setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and
        var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
        var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        $(".Doom").html( "Il reste " + years + "a " + days + "j " + hours + "h "
            + minutes + "m " + seconds + "s avant la fin du monde");
    });
});
