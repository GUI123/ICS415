/**
 * Created by conan113 on 9/14/15.
 */

function door1()
{
    var animal1="Cow";
    document.getElementById("button1").innerHTML=animal1;
}

function door2()
{
    var animal2="Lamborghini";
    document.getElementById("button2").innerHTML=animal2;
}


function door3()
{
    var animal3="Chicken";
    document.getElementById("button3").innerHTML=animal3;
}

function door1Hover()
{
    document.getElementById("door1").style.backgroundColor="red";
}

function door1Leave()
{
    document.getElementById("door1").style.backgroundColor="#ffffff";
}

function door2Hover()
{
    document.getElementById("door2").style.backgroundColor="#008B8B";
}

function door2Leave()
{
    document.getElementById("door2").style.backgroundColor="#ffffff";
}

function door3Hover()
{
    document.getElementById("door3").style.backgroundColor="#ff00ff";
}

function door3Leave()
{
    document.getElementById("door3").style.backgroundColor="#ffffff";
}


/*never finished*/
function hideTextforCopy()
{
    document.getElementById("mine").style.visibility="hidden";
}

function showTextforCopy()
{
    document.getElementsById("mine").style.visibility=""
}
