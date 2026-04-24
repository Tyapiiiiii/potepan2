$(document).ready(function(){
        $(".buttonA").click(function() {
            $("#display").val($("#display").val() + $(this).data("value"));
        });
        $("#equals").click(function() {
            $("#display").val(eval($("#display").val()));
        });
        $("#clear").click(function() {
            $("#display").val("");
        });
    });