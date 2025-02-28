let control_variable = "replace";
function handleClearButton() {
    resultArea.value = '';
    expressionArea.value = '';
}

function handleNumberButtonClick(number_value) {
    if (control_variable == "replace") {
        resultArea.value = '';
        resultArea.value = number_value;
        control_variable = 'append';
    }
    else {
        resultArea.value += number_value;
    }
}

function handleExpressionMode(operator) {
    if (expressionArea.value == "") {
        expressionArea.value = resultArea.value;
        expressionArea.value = expressionArea.value + ' ' + operator;
        control_variable = "replace";
    }
    else {
        expressionArea.value = expressionArea.value + ' ' + resultArea.value;
        expressionArea.value = eval(expressionArea.value);
        resultArea.value = expressionArea.value;
        expressionArea.value = expressionArea.value + operator;
        control_variable = "replace";
    }
}

document.getElementById("darkMode-toggle-1").addEventListener('click', function () {
    var element = document.getElementsByClassName("main-div")[0];
    var subDivElement = document.getElementsByClassName("sub-div")[0];
    var buttonElement = document.getElementsByTagName("button");
    var RedButtonElement = document.getElementsByClassName("red-btn-operator");
    var blueButtonElement = document.getElementsByClassName("blue-btn-operator ");
    var outputDisplayArea = document.getElementsByClassName("output-display");


    if (element.style.backgroundColor == "black") {
        element.style.backgroundColor = "white";
        subDivElement.style.backgroundColor = "#F9F6EE";


        for (let i = 0; i < buttonElement.length; i++) {
            buttonElement[i].style.backgroundColor = "#F9F6EE";
            buttonElement[i].style.color = "black";

        }
        for (let i = 0; i < RedButtonElement.length; i++) {
            RedButtonElement[i].style.color = "red";
        }
        for (let i = 0; i < blueButtonElement.length; i++) {
            blueButtonElement[i].style.color = "hsl(180, 84%, 58%)";
        }
        for (let i = 0; i < outputDisplayArea.length; i++) {
            outputDisplayArea[i].style.backgroundColor = "white";
            outputDisplayArea[i].style.color = "black";
        }

    }
    else {
        element.style.backgroundColor = "black";
        subDivElement.style.backgroundColor = "rgb(34, 33, 33)";

        for (let i = 0; i < buttonElement.length; i++) {
            buttonElement[i].style.backgroundColor = "rgb(34, 33, 33)";
            buttonElement[i].style.color = "rgb(241, 241, 241)";

        }
        for (let i = 0; i < RedButtonElement.length; i++) {
            RedButtonElement[i].style.color = "red";
        }
        for (let i = 0; i < blueButtonElement.length; i++) {
            blueButtonElement[i].style.color = "hsl(180, 84%, 58%)";
        }
        for (let i = 0; i < outputDisplayArea.length; i++) {
            outputDisplayArea[i].style.backgroundColor = "black";
            outputDisplayArea[i].style.color = "white";

        }
    }
});

function posNegConversion() {
    if (expressionArea.value > 0 || expressionArea.value < 0 ? expressionArea.value = expressionArea.value * -1 : "") {
    }
}

function handleEquals() {
    resultArea.value = eval(expressionArea.value).toLocaleString('en-US');
}

document.addEventListener('keydown', function (event) {
    const numb = document.getElementsByTagName("button");
    const key = event.key;
    if (!isNaN(key)) {
        expressionArea.value += key;
    }
    else if (['+', '-', '*', '/'].includes(key)) {
        expressionArea.value += key;
    }
    //  else if (key === 'Enter') {
    //     handleEquals();
    // }

    else if (key === 'Backspace') {
        expressionArea.value = expressionArea.value.slice(0, -1);
    }
});