// functions
function eventListeners() {
  const buttons = document.querySelectorAll(".button");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const currentClass = this.classList[1];
      buttonAnimation(currentClass);

      // test function
      let display = document.querySelector(".screen");
      let pressedValue = document.querySelector("." + currentClass).innerHTML;
      display.value += pressedValue;
      let expression = display.value;
      let stringNums = [];
      let stringNum = "";
      let intNums = [];
      let operation = [];

      for (i = 0; i < expression.length; i++) {
        if (isSymbol(expression[i])) {
          operation.push(expression[i]);
          stringNums.push(stringNum);
          stringNum = "";
        } else {
          stringNum += expression[i];
        }
      }

      for (i = 0; i < stringNums.length; i++) {
        num = stringNums[i];
        intNums[i] = parseInt(num);
      }

      let results = 0;
      for (i = 0; i < operation.length; i++) {
        if (operation.length == 1) {
          results = intNums[i] + intNums[i + 1];
        } else {
          num1 = results;
          num2 = intNums[i];
          results = num1 + num2;
        }
      }

      display.value = results;
    });
  }

  document.addEventListener("keydown", function (event) {
    const currentKey = event.key;
    currentClass = classMapper(currentKey);
    buttonAnimation(currentClass);
  });
}

function isSymbol(pressedValue) {
  if (
    pressedValue == "+" ||
    pressedValue == "-" ||
    pressedValue == "*" ||
    pressedValue == "/" ||
    pressedValue == "="
  )
    return true;
  else {
    return false;
  }
}
function isNotEquals(symbol) {
  if ((symbol = !"=")) return true;
}
function classMapper(currentKey) {
  let currentClass = "";
  switch (currentKey) {
    case "0":
      currentClass = "zero";
      break;
    case "1":
      currentClass = "one";
      break;
    case "2":
      currentClass = "two";
      break;
    case "3":
      currentClass = "three";
      break;
    case "4":
      currentClass = "four";
      break;
    case "5":
      currentClass = "five";
      break;
    case "6":
      currentClass = "six";
      break;
    case "7":
      currentClass = "seven";
      break;
    case "8":
      currentClass = "eight";
      break;
    case "9":
      currentClass = "nine";
      break;
    case "+":
      currentClass = "add";
      break;
    case "-":
      currentClass = "subtract";
      break;
    case "*":
      currentClass = "multiply";
      break;
    case "/":
      currentClass = "divide";
      break;
    case ".":
      currentClass = "decimal";
      break;
    case "=":
    case "Enter":
      currentClass = "equals";
      break;
    case "Backspace":
    case "Delete":
      currentClass = "del";
      break;
    case "reset":
      currentClass = "reset";
      break;
  }
  return currentClass;
}

function buttonAnimation(currentClass) {
  const activeButton = document.querySelector("." + currentClass);
  switch (currentClass) {
    case "equals":
      activeButton.classList.add("pressed-red");
      setTimeout(function () {
        activeButton.classList.remove("pressed-red");
      }, 100);
      break;
    case "del":
    case "reset":
      activeButton.classList.add("pressed-blue");
      setTimeout(function () {
        activeButton.classList.remove("pressed-blue");
      }, 100);
      break;
    default:
      activeButton.classList.add("pressed-white");
      setTimeout(function () {
        activeButton.classList.remove("pressed-white");
      }, 100);
  }
}

// main function

function main() {
  eventListeners();
}

main();
