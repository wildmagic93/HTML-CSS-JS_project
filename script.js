
var element = document.querySelector("img");

function Changecolor()
{
    document.getElementById("now").style.color = "red";
}

element.addEventListener('click', Changecolor);

/*document.getElementById("mouse").addEventListener("click", function()
{
    element.style.color = "red";
});*/

//element.onclick = Changecolor(element);