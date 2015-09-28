/**
 * Created by AlfredChan on 9/26/2015.
 */
$(document).ready(function() {

    var question1=0;
    var question2=0;
    var question3=0;
    var question4=0;
    var question5=0;


    var a1 = $('#a1');
    var a2 = $('#a2');
    var a3 = $('#a3');
    var a4 = $('#a4');
    var a5 = $('#a5');
    $(a1).hide();
    $(a2).hide();
    $(a3).hide();
    $(a4).hide();
    $(a5).hide();


    $(".link").click(function () {
        if(question1==0)
        {
            $(".link").css({"color": "red"});
            question1++;
        }
        else
        {
            $(".link").css({"color": "blue"});
            question1=0;
        }

        $("#a1").toggle(function () {
                $("#a1").animate({}, "slow");
            }
        );
    });

    $(".link2").click(function () {
        if(question2==0)
        {
            $(".link2").css({"color": "red"});
            question2++;
        }
        else
        {
            $(".link2").css({"color": "blue"});
            question2=0;
        }
        $("#a2").toggle(function () {
                $("#a2").animate({}, "slow");
            }
        );
    });

    $(".link3").click(function () {
        if(question3==0)
        {
            $(".link3").css({"color": "red"});
            question3++;
        }
        else
        {
            $(".link3").css({"color": "blue"});
            question3=0;
        }
        $("#a3").toggle(function () {
                $("#a3").animate({}, "slow");
            }
        );
    });

    $(".link4").click(function () {
        if(question4==0)
        {
            $(".link4").css({"color": "red"});
            question4++;
        }
        else
        {
            $(".link4").css({"color": "blue"});
            question4=0;
        }
        $("#a4").toggle(function () {
                $("#a4").animate({}, "slow");
            }
        );
    });

    $(".link5").click(function () {
        if(question5==0)
        {
            $(".link5").css({"color": "red"});
            question5++;
        }
        else
        {
            $(".link5").css({"color": "blue"});
            question5=0;
        }
        $("#a5").toggle(function () {
                $("#a5").animate({}, "slow");
            }
        );
    });

    $("#sButton").click(function() {
        var url=window.location.href;
        var linkCounter=$("a").length;

        $("#url").text("Here is the url: "+ url);
        $("#Links").text("Links on page: "+ linkCounter);
    });
});