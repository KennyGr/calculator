let tempHolder = "0";
let lastFunction = "";
let tempTotal = "0";
let displayedNumber = "0";
let addIncrementer = 0;
let subIncrementer = 0;
let multIncrementer = 0;
let divIncrementer = 0;
let wasEqualsPush = false;

let clearButton = document.querySelector("#clear");
clear.addEventListener('click', () => {
    displayedNumber = "0"
    tempTotal = "0"
    addIncrementer = 0;
    subIncrementer = 0;
    multIncrementer = 0;
    divIncrementer = 0;
    wasEqualsPush = false;
    displayedNumberPara.textContent = displayedNumber
});

const displayedNumberPara = document.createElement("p");
displayedNumberPara.textContent = displayedNumber
displayedNumberPara.classList.add("screen")
let screenBorder = document.querySelector(".screenBorder");
screenBorder.appendChild(displayedNumberPara);

let one = document.querySelector("#one");
one.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "1"
        displayedNumberPara.textContent = displayedNumber
    }
});

let two = document.querySelector("#two");
two.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "2"
        displayedNumberPara.textContent = displayedNumber
    }
});


let three = document.querySelector("#three");
three.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "3"
        displayedNumberPara.textContent = displayedNumber
    }
});

let four = document.querySelector("#four");
four.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "4"
        displayedNumberPara.textContent = displayedNumber
    }
});

let five = document.querySelector("#five");
five.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "5"
        displayedNumberPara.textContent = displayedNumber
    }
});

let six = document.querySelector("#six");
six.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "6"
        displayedNumberPara.textContent = displayedNumber
    }
});

let seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "7"
        displayedNumberPara.textContent = displayedNumber
    }
});

let eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "8"
        displayedNumberPara.textContent = displayedNumber
    }
});

let nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "9"
        displayedNumberPara.textContent = displayedNumber
    }
});

let zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "";
            }
        displayedNumber += "0"
        displayedNumberPara.textContent = displayedNumber
    }
});

let dot = document.querySelector("#dot");
dot.addEventListener('click', () => {
    if (wasEqualsPush == true) {

    } else {
    if (displayedNumber == "0") {
            displayedNumber = "0.";
    } else if (displayedNumber == ".") {
        displayedNumber = "0."
    } else {
        displayedNumber += ".";
    }
        displayedNumberPara.textContent = displayedNumber
    }
});

let divide = document.querySelector("#divide");
divide.addEventListener('click', division);

let times = document.querySelector("#times");
times.addEventListener('click', multiplication);

let minus = document.querySelector("#minus");
minus.addEventListener('click', subtraction);

let plus = document.querySelector("#plus");
plus.addEventListener('click', addition);

let equals = document.querySelector("#equals");
equals.addEventListener('click', evaluate);





function addition() {
    if (addIncrementer == 0) {
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "+"
        addIncrementer++;
        wasEqualsPush = false;
    } else {
        displayedNumber = (tempTotal - 0) + (displayedNumber - 0)
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "+"
        addIncrementer++;
        wasEqualsPush = false;
    }
};

function subtraction() {
    if (addIncrementer == 0) {
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "-"
        addIncrementer++;
        wasEqualsPush = false;
    } else {
        displayedNumber = (tempTotal - 0) - (displayedNumber - 0)
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "-"
        addIncrementer++;
        wasEqualsPush = false;
    }
};

//after hitting equals, hitting a number brings up 0
function multiplication(a, b) {
    if (addIncrementer == 0) {
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "*"
        addIncrementer++
        wasEqualsPush = false;
    } else {
        displayedNumber = (tempTotal - 0) * (displayedNumber - 0)
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "*"
        addIncrementer++
        wasEqualsPush = false;
    }
};

function division(a, b) {
    if (addIncrementer == 0) {
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder;
        lastFunction = "/"
        addIncrementer++
        wasEqualsPush = false;
    } else {
        displayedNumber = (tempTotal - 0) / (displayedNumber - 0)
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "/"
        addIncrementer++
        wasEqualsPush = false;
    }
};

function evaluate(a, b) {
    a = displayedNumber;
    b = tempTotal;
    if (a == "0") {
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        wasEqualsPush = true;
    } else if (lastFunction == "+") {
        displayedNumber = (a - 0) + (b - 0);
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = "0";
        lastFunction = "+";
        wasEqualsPush = true;
        clearIncrementers();
    } else if (lastFunction == "-") {
        displayedNumber = (b - 0) - (a - 0);
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        lastFunction = "-";
        wasEqualsPush = true;
        clearIncrementers();
    } else if (lastFunction == "*") {
        displayedNumber = (a - 0) * (b - 0);
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        lastFunction = "*";
        multIncrementer++
        wasEqualsPush = true;
        clearIncrementers();
    } else if (lastFunction == "/") {
        displayedNumber = (b - 0) / (a - 0);
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        lastFunction = "/";
        multIncrementer++
        wasEqualsPush = true;
        clearIncrementers();
    }
};

function clearIncrementers() {
    subIncrementer = 0;
    multIncrementer = 0;
    divIncrementer = 0;
    addIncrementer = 0;
}

//function operate(a, c) {
//    a = //put input of button press here, might need to change "a" to some kind of tag attached to the button
//    if (a == "+") {
//        tempTotal = addition(tempTotal, c);
//    } else if (a == "-") {
//        tempTotal = subtraction(tempTotal, c);
//    } else if (a == "*") {
//        tempTotal = multiplication(tempTotal, c);
//    } else if (a == "/") {
//        tempTotal = division(tempTotal, c);
//    }
//};
