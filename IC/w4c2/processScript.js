/**
 * Created by conan113 on 9/16/15.
 */
function getName()
{
    var url=window.location.search.substring(1);
    var split=query.split("?");
    for(var i=0; i<split.length;i++)
    {
        if(decodeURIComponent(split[i])=="name")
        {
            return split[i+2];
        }
    }
}

function getAddress()
{
    var url=window.location.search.substring(1);
    var split=query.split("&");
    for(var i=0; i<split.length;i++)
    {
        if(decodeURIComponent(split[i])=="address")
        {
            return split[i+2];
        }
    }
}

function getPhone()
{
    var url=window.location.search.substring(1);
    var split=query.split("?");
    for(var i=0; i<split.length;i++)
    {
        if(decodeURIComponent(split[i])=="phone")
        {
            return split[i+2];
        }
    }
}

function tableMaker()
{
    var name = getName();

}

