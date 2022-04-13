let displayedTotal = "0";
let lastOperator = "";
let firstNumber = "";
let secondNumber = "";
let justPushedOperator = false;

let deleteButton = document.querySelector("#back");
deleteButton.addEventListener('click', pressDelete);

let clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', pressClear);

const displayedTotalPara = document.createElement("p");
displayedTotalPara.textContent = displayedTotal
displayedTotalPara.classList.add("screen")
let screenBorder = document.querySelector(".screenBorder");
screenBorder.appendChild(displayedTotalPara);

let one = document.querySelector("#one");
one.addEventListener('click', appendOne);

let two = document.querySelector("#two");
two.addEventListener('click', appendTwo);

let three = document.querySelector("#three");
three.addEventListener('click', appendThree);

let four = document.querySelector("#four");
four.addEventListener('click', appendFour);
    
let five = document.querySelector("#five");
five.addEventListener('click', appendFive);

let six = document.querySelector("#six");
six.addEventListener('click', appendSix);

let seven = document.querySelector("#seven");
seven.addEventListener('click', appendSeven);

let eight = document.querySelector("#eight");
eight.addEventListener('click', appendEight);

let nine = document.querySelector("#nine");
nine.addEventListener('click', appendNine);

let zero = document.querySelector("#zero");
zero.addEventListener('click', appendZero);

let dot = document.querySelector("#dot");
justPushedOperator = false;
dot.addEventListener('click', appendDot);

let divideButton = document.querySelector("#divide");
divideButton.addEventListener('click', pressDivide);

let timesButton = document.querySelector("#times");
timesButton.addEventListener('click', pressMultiply);

let minusButton = document.querySelector("#minus");
minusButton.addEventListener('click', pressSubtract);

let plusButton = document.querySelector("#plus");
plusButton.addEventListener('click', pressAdd);

let equalsButton = document.querySelector("#equals");
equalsButton.addEventListener('click', pressEquals);


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

function appendOne() {
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
}

function appendTwo() {
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
}

function appendThree() {
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
}

function appendFour() {
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
}

function appendFive() {
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
}

function appendSix() {
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
}

function appendSeven() {
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
}

function appendEight() {
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
}

function appendNine() {
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
}

function appendZero() {
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
}

function appendDot() {
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
}

function pressAdd() {
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
}

function pressSubtract() {
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
}

function pressMultiply() {
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
}

function pressDivide() {
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
}

function pressEquals() {
    if (lastOperator == "=") {

    } else if (justPushedOperator == false) {
        secondNumber = displayedTotal;
        operate();
        lastOperator = "=";
    }
}

function pressClear() {
    displayedTotal = "0"
    lastOperator = "";
    firstNumber = "";
    secondNumber = "";
    justPushedOperator = false;
    displayedTotalPara.textContent = displayedTotal
}

function pressDelete() {
    let newTotal = displayedTotal.slice(0, -1);
    if (newTotal.length === 0) {
        newTotal = 0;
        displayedTotalPara.textContent = newTotal;
        displayedTotal = newTotal;
    } else {
        displayedTotalPara.textContent = newTotal;
        displayedTotal = newTotal;
    }
}


window.addEventListener('keydown', (event) => {
    if (event.key === "1") {
        appendOne();
    } else if (event.key === "2") {
        appendTwo();
    } else if (event.key === "3") {
        appendThree();
    } else if (event.key === "4") {
        appendFour();
    } else if (event.key === "5") {
        appendFive();
    } else if (event.key === "6") {
        appendSix();
    } else if (event.key === "7") {
        appendSeven();
    } else if (event.key === "8") {
        appendEight();
    } else if (event.key === "9") {
        appendNine();
    } else if (event.key === "0") {
        appendZero();
    } else if (event.key === ".") {
        appendDot();
    } else if (event.key === "=" || event.key === "Enter") {
        pressEquals();
    } else if (event.key === "*") {
        pressMultiply();
    } else if (event.key === "/") {
        pressDivide();
    } else if (event.key === "+") {
        pressAdd();
    } else if (event.key === "-") {
        pressSubtract();
    } else if (event.key === "Backspace") {
        pressDelete();
    } else if (event.key === "Escape") {
        pressClear();
    }
});