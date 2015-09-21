/*******************************************************************************
 *
 * Name: Alfred Chan
 *
 * Homework: A07
 *
 * Class; ICS 415
 *
 * Instructor: Cam Moore
 *
 * Date: 9/20/15
 *
 * File: myScript.js
 *
 * Description: Contains the functions getClasses, addClass, validateForm
 *******************************************************************************/


/*****************************************************************
 *
 *  Function name: getClasses
 *
 *  DESCRIPTION:  Checks the name of the classes and PRINTS them out in an array format.
 *
 *  Parameters:   elem
 *
 *  Return values:  none
 *
 *
 *****************************************************************/
function getClasses(elem)
{
    var tagName=elem.className;     //Gets class Name
    var output=document.getElementById("output");   //Grabs the id of where to print the output
    var splitter=tagName.split(" ");  //Splits the class name if there is a space
    var arrayOutput="[\"";  //Creates the output

    if(splitter.length==1) //Creates the output if there is ONLY ONE name in tagName
    {
        arrayOutput = arrayOutput + tagName;
        arrayOutput=arrayOutput+"\"]";
    }
    else    //Creates an array output if there is MORE THAN ONE name in tagName
    {
        for(i=0;i<splitter.length;i++)
        {
            arrayOutput=arrayOutput+splitter[i];

            if(i!=splitter.length-1)  //Checks if at the end of splitter and decides whether to add a " and ,
            {
                arrayOutput=arrayOutput+"\",\"";
            }
        }
        arrayOutput=arrayOutput+"\"]";
    }

    output.innerHTML=(arrayOutput);     //Prints arrayOutput

}//End of getClasses function


/*****************************************************************
 *
 *  Function name: addClass
 *
 *  DESCRIPTION:  Adds ClassName to the already existing class list in elem
 *
 *  Parameters:   elem , className
 *
 *  Return values:  none
 *
 *
 *****************************************************************/
function addClass(elem, className)
{
    var eleClassName=elem.className;
    var splitter=eleClassName.split(" ");

    eleClassName=eleClassName+" "+className;
    elem.className=eleClassName;
}

function validateForm()
{
    var username=document.forms["myForm"]["name"].value;
    var email=document.forms["myForm"]["email"].value;
    var originalPassword=document.forms["myForm"]["password"].value;
    var confirmPassword=document.forms["myForm"]["confirm"].value;
    var errorMessage=" ";
    var boolean=true;

    //Checks for errors
    if(username=="")
    {
        document.getElementById("username").style.backgroundColor="red";
        errorMessage=errorMessage+"No userName<br>";
        boolean=false;
    }
    else
    {
        document.getElementById("username").style.backgroundColor="white";
    }

    if(email=="")
    {
        document.getElementById("email").style.backgroundColor="red";
        errorMessage=errorMessage+"No email<br>";
        boolean=false;
    }
    else
    {
        document.getElementById("email").style.backgroundColor="white";
    }


    if(originalPassword!=confirmPassword)
    {
        document.getElementById("password").style.backgroundColor="red";
        document.getElementById("confirm").style.backgroundrColor="red";
        errorMessage=errorMessage+"Passwords do not match<br>";
        boolean=false;
    }
    else
    {
        document.getElementById("password").style.backgroundColor="white";
        document.getElementById("confirm").style.backgroundrColor="white";
    }


    if(originalPassword==""||confirmPassword=="")
    {
        document.getElementById("password").style.backgroundColor="red";
        document.getElementById("confirm").style.backgroundColor="red";
        errorMessage=errorMessage+"Enter a password";
        boolean=false;
    }
    else if(orginalPassword!=""&&confirmPassword!=""&&originalPassword==""&&confirmPassword=="")
    {
        document.getElementById("password").style.backgroundColor="white";
        document.getElementById("confirm").style.backgroundrColor="white";
    }


    document.getElementById("formTester").innerHTML=errorMessage;

    return boolean;

}