$(document).ready(function () {
    $(".Validation").hide();
   $("#Inscription").submit(function (e) {
       e.preventDefault();
       $(this).slideUp();
       $(".Validation").show();
   })
});