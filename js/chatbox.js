$(document).ready(function () {
    $("#envoyermessage").click(function () {
        VerifieEtEnvoieMessage();
    })
});

$(".EnvoieMessage").find("input").keypress(function (event) {
    if(event.which == '13' || event.keyCode == '13')
    {
        VerifieEtEnvoieMessage();
    }
});
function VerifieEtEnvoieMessage(){
    $("#erreur").html("");

    if(!$("#pseudo").val().match("[a-zA-Z0-9]{3,13}") || $("#message").val().length == 0){

        if(!$("#pseudo").val().match("[a-zA-Z0-9]{3,13}")) {

            if ($("#erreur").find("p#erreurPseudo").length == 0) {
                $("#erreur").prepend(
                    "<p class='erreur' id='erreurPseudo'>" + "Merci de bien vouloir choisir un pseudonyme entre 3 et 13 caractères non spéciaux" + "</p>"
                );
            }
        }
        if($("#message").val().length == 0) {

            if($("#erreur").find("p#erreurMessage").length == 0)
            {
                $("#erreur").prepend(
                    "<p class='erreur' id='erreurMessage'>" + "Votre message est vide!" + "</p>"
                );
            }
        }
    }
    else{
        let message = $("input#message");
        $("#ChatBox").append( "<p style='word-break: break-all'>" + "<span style='color:red'>" + $("input#pseudo").val() + "</span>" + ": " + message.val() + "</p>");
        message.val("");
        $("#ChatBox").scrollTop($("#ChatBox")[0].scrollHeight);
    }
}