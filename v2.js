let displayedTotal = "0";
let lastOperator = "";
let firstNumber = "";
let secondNumber = "";
let justPushedOperator = false;


let clearButton = document.querySelector("#clear");
clear.addEventListener('click', () => {
    displayedTotal = "0"
    lastOperator = "";
    firstNumber = "";
    secondNumber = "";
    justPushedOperator = false;
    displayedTotalPara.textContent = displayedTotal
});

const displayedTotalPara = document.createElement("p");
displayedTotalPara.textContent = displayedTotal
displayedTotalPara.classList.add("screen")
let screenBorder = document.querySelector(".screenBorder");
screenBorder.appendChild(displayedTotalPara);

let one = document.querySelector("#one");
one.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "1";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "1";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "1";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let two = document.querySelector("#two");
two.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "2";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "2";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "2";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});


let three = document.querySelector("#three");
three.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "3";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "3";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "3";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let four = document.querySelector("#four");
four.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "4";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "4";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "4";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let five = document.querySelector("#five");
five.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "5";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "5";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "5";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let six = document.querySelector("#six");
six.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "6";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "6";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "6";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "7";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "7";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "7";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "8";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "8";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "8";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "9";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "9";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "9";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    justPushedOperator = false;
    if (displayedTotal == "") {
        displayedTotal = "0";
        displayedTotalPara.textContent = displayedTotal;
    } else if (displayedTotal == "0") {
            displayedTotal = "";
            displayedTotal += "0";
            displayedTotalPara.textContent = displayedTotal;
    } else {
        if (displayedTotal.length <= 24) {
            displayedTotal += "0";
            displayedTotalPara.textContent = displayedTotal;
        }
    }
});

let dot = document.querySelector("#dot");
justPushedOperator = false;
dot.addEventListener('click', () => {
    if (displayedTotal.length <= 24) {
        if (displayedTotal == "0") {
                displayedTotal = "0.";
        } else if (displayedTotal == "0.") {
            displayedTotal = "0."
        } else if (justPushedOperator == true) {
            displayedTotal = "0.";
        } else if (!(displayedTotal.includes("."))) {
            displayedTotal += ".";
        }
        displayedTotalPara.textContent = displayedTotal
    }
});

let divideButton = document.querySelector("#divide");
divideButton.addEventListener('click', () => {
    if (lastOperator === "+" || lastOperator === "-" || lastOperator === "*" || lastOperator === "/") {
        secondNumber = displayedTotal;
        firstNumber = operate();
        displayedTotal = firstNumber;
        displayedTotalPara.textContent = displayedTotal;
        displayedTotal = "";
        lastOperator = "/";
        justPushedOperator = true;
    } else {
        firstNumber = displayedTotal;
        displayedTotalPara.textContent = displayedTotal;
        displayedTotal = "";
        lastOperator = "/";
        justPushedOperator = true;
    }
});

let timesButton = document.querySelector("#times");
timesButton.addEventListener('click', () => {
    if (lastOperator === "+" || lastOperator === "-" || lastOperator === "*" || lastOperator === "/") {
        secondNumber = displayedTotal;
        firstNumber = operate();
        displayedTotal = firstNumber;
        displayedTotalPara.textContent = displayedTotal;
        displayedTotal = "";
        lastOperator = "*";
        justPushedOperator = true;
    } else {
        firstNumber = displayedTotal;
        displayedTotalPara.textContent = displayedTotal;
        displayedTotal = "";
        lastOperator = "*";
        justPushedOperator = true;
    }
});

let minusButton = document.querySelector("#minus");
minusButton.addEventListener('click', () => {
    if (lastOperator === "+" || lastOperator === "-" || lastOperator === "*" || lastOperator === "/") {
        secondNumber = displayedTotal;
        firstNumber = operate();
        displayedTotal = firstNumber;
        displayedTotalPara.textContent = displayedTotal;
        displayedTotal = "";
        lastOperator = "-";
        justPushedOperator = true;
    } else {
        firstNumber = displayedTotal;
        displayedTotalPara.textContent = displayedTotal;
        displayedTotal = "";
        lastOperator = "-";
        justPushedOperator = true;
    }
});

let plusButton = document.querySelector("#plus");
plusButton.addEventListener('click', () => {
    if (lastOperator === "+" || lastOperator === "-" || lastOperator === "*" || lastOperator === "/") {
        secondNumber = displayedTotal;
        firstNumber = operate();
        displayedTotal = firstNumber;
        displayedTotalPara.textContent = displayedTotal;
        displayedTotal = "";
        lastOperator = "+";
        justPushedOperator = true;
    } else {
        firstNumber = displayedTotal;
        displayedTotalPara.textContent = displayedTotal;
        displayedTotal = "";
        lastOperator = "+";
        justPushedOperator = true;
    }
});

let equalsButton = document.querySelector("#equals");
equalsButton.addEventListener('click', () => {
    if (lastOperator == "=") {

    } else if (justPushedOperator == false) {
        secondNumber = displayedTotal;
        operate();
        lastOperator = "=";
    }
});





function operate() {
    if (lastOperator === "+") {
        displayedTotal = add();
        displayedTotalPara.textContent = displayedTotal;
        return displayedTotal;
    } else if (lastOperator === "-") {
        displayedTotal = subtract();
        displayedTotalPara.textContent = displayedTotal;
        return displayedTotal;
    } else if (lastOperator === "*") {
        displayedTotal = multiply();
        displayedTotalPara.textContent = displayedTotal;
        return displayedTotal;
    } else if (lastOperator === "/") {
        displayedTotal = divide();
        displayedTotalPara.textContent = displayedTotal;
        return displayedTotal;
    }
};

function add(a, b) {
    a = firstNumber;
    b = secondNumber;
    return (a - 0) + (b - 0);
}

function subtract(a, b) {
    a = firstNumber;
    b = secondNumber;
    return (a - 0) - (b - 0);
}

function multiply(a, b) {
    a = firstNumber;
    b = secondNumber;
    return (a - 0) * (b - 0);
}

function divide(a, b) {
    a = firstNumber;
    b = secondNumber;
    let divResult = (a - 0) / (b - 0);
    if (divResult == Infinity) {
        return "DIVIDE BY ZERO ERROR!";
    } else {
        return divResult;
    }
}