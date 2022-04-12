let tempHolder = "0";

let lastFunction = "";

let tempTotal = "0";

let displayedNumber = "0";

let subIncrementer = 0;

let multIncrementer = 0;

let divIncrementer = 0;

let clearButton = document.querySelector("#clear");
clear.addEventListener('click', () => {
    displayedNumber = "0"
    tempTotal = "0"
    subIncrementer = 0;
    multIncrementer = 0;
    divIncrementer = 0;
    displayedNumberPara.textContent = displayedNumber
  });

const displayedNumberPara = document.createElement("p");
displayedNumberPara.textContent = displayedNumber
displayedNumberPara.classList.add("screen")
let screenBorder = document.querySelector(".screenBorder");
screenBorder.appendChild(displayedNumberPara);

let one = document.querySelector("#one");
one.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "1"
    displayedNumberPara.textContent = displayedNumber
  });

let two = document.querySelector("#two");
two.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "2"
    displayedNumberPara.textContent = displayedNumber
  });


let three = document.querySelector("#three");
three.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "3"
    displayedNumberPara.textContent = displayedNumber
  });

let four = document.querySelector("#four");
four.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "4"
    displayedNumberPara.textContent = displayedNumber
  });

let five = document.querySelector("#five");
five.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "5"
    displayedNumberPara.textContent = displayedNumber
  });

let six = document.querySelector("#six");
six.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "6"
    displayedNumberPara.textContent = displayedNumber
  });

let seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "7"
    displayedNumberPara.textContent = displayedNumber
  });

let eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "8"
    displayedNumberPara.textContent = displayedNumber
  });

let nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "9"
    displayedNumberPara.textContent = displayedNumber
  });

let zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    if (displayedNumber == "0") {
        displayedNumber = "";
    }
    displayedNumber += "0"
    displayedNumberPara.textContent = displayedNumber
  });

let dot = document.querySelector("#dot");
dot.addEventListener('click', () => {
    displayedNumber += "."
    displayedNumberPara.textContent = displayedNumber
  });

let divide = document.querySelector("#divide");

let times = document.querySelector("#times");
times.addEventListener('click', multiplication);

let minus = document.querySelector("#minus");
minus.addEventListener('click', subtraction);

let plus = document.querySelector("#plus");
plus.addEventListener('click', addition);

let equals = document.querySelector("#equals");
equals.addEventListener('click', evaluate);





function addition() {
    displayedNumber = (tempTotal - 0) + (displayedNumber - 0)
    displayedNumberPara.textContent = displayedNumber;
    tempTotal = displayedNumber;
    displayedNumber = tempHolder
    lastFunction = "+"
};

function subtraction() {
    if (subIncrementer == 0) {
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "-"
        subIncrementer++;
    } else {
        displayedNumber = (tempTotal - 0) - (displayedNumber - 0)
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "-"
        subIncrementer++;
    }
};

function multiplication(a, b) {
    if (multIncrementer == 0) {
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "*"
        multIncrementer++
    } else {
        displayedNumber = (tempTotal - 0) * (displayedNumber - 0)
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = displayedNumber;
        displayedNumber = tempHolder
        lastFunction = "*"
        multIncrementer++
    }
};

function division(a, b) {
    return a / b;
};

function evaluate(a, b) {
    a = displayedNumber;
    b = tempTotal;
    if (lastFunction == "+") {
        displayedNumber = parseInt(a) + parseInt(b);
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = "0";
        lastFunction = "+";
    } else if (lastFunction == "-") {
        displayedNumber = parseInt(b) - parseInt(a);
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = "0";
        lastFunction = "-";
        subIncrementer = 0;
    } else if (lastFunction == "*") {
        displayedNumber = parseInt(a) * parseInt(b);
        displayedNumberPara.textContent = displayedNumber;
        tempTotal = 1;
        lastFunction = "*";
        multIncrementer++
    }
};

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
