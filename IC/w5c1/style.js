/**
 * Created by conan113 on 9/21/15.
 */
$("#container").mouseenter(function ()
{
    $("#container").css("color", "red");
});

$("#container").mouseleave(function ()
{
    $("#container").css("color", "black");
});

$("#container").click(function ()
{
    $("#container").text("Translation: Hello there.");
});

$("#button").mouseenter(function ()
{
    $("#button").css("color","aqua");
});


$("#button").mouseleave(function ()
{
    $("#button").css("color","black");
});


$("#button").click(function ()
{
    $("#button").hide();
    $("#container").hide();
    $("#container").text("Jquery is cool.");
    $("#container").show();

});




