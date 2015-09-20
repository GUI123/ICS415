/**
 * Created by AlfredChan on 9/19/2015.
 */
function getClasses(elem)
{
    var className= elem.class;
    var doc=document.createTextNode(className);
    document.body.appendChild(doc);
}

function addClass(elem, className)
{
    if(elem.hasClass(""))
    {
        elem.className=className;
    }

    




}

function validateForm()
{

}