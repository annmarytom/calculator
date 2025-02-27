
document.getElementById("darkMode-toggle-1").addEventListener('click', function () {
    var element = document.getElementsByClassName("main-div")[0];
    var subDivElement = document.getElementsByClassName("sub-div")[0];
    // var buttonElement = document.getElementsByClassName("btn-operator ");
    var buttonElement = document.getElementsByTagName("button");
    
    
    if (element.style.backgroundColor == "black" ){// || subDivElement.style.backgroundColor == "black"||buttonElement[0].style.backgroundColor  == "F9F6EE") {

        element.style.backgroundColor = "white";
        subDivElement.style.backgroundColor = "#F9F6EE";
        for(let i=0;i< buttonElement.length;i++)
{
    buttonElement[i].style.backgroundColor = "#F9F6EE";
    buttonElement[i].style.color = "black";
}        
    
        
    } else {
        element.style.backgroundColor = "black";
        subDivElement.style.backgroundColor = "rgb(34, 33, 33)";
        for(let i=0;i< buttonElement.length;i++)
            {
                buttonElement[i].style.backgroundColor = "rgb(34, 33, 33)";
                buttonElement[i].style.color = "rgb(241, 241, 241)";
                // buttonElement[i].style.backgroundColor = "#F9F6EE";
            }       
    }
});

function posNegConversion() {
    if (resultArea.value > 0 || resultArea.value < 0 ? resultArea.value = resultArea.value * -1 : "") {
    }
}

