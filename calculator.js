

document.getElementById("darkMode-toggle-1").addEventListener('click', function () {
    var element = document.getElementsByClassName("main-div")[0];

    if (element.style.backgroundColor == "black") {

        element.style.backgroundColor = "white";

    } else {
        element.style.backgroundColor = "black";

    }
});
function posNegConversion() {
    if (resultArea.value > 0 || resultArea.value < 0 ? resultArea.value = resultArea.value * -1 : "") {
    }
}