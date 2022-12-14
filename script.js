window.onload = function()
{
    var b1 = document.getElementById("btn");
    b1.addEventListener('click', teste);
}   

function teste()
{
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var out = input.value;
    output.innerHTML = out;
}
