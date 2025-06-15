// functions
function eventListeners() {
  const buttons = document.querySelectorAll(".button");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const currentClass = this.classList[1];
      buttonAnimation(currentClass);
    });
  }

  document.addEventListener("keydown", function (event) {
    const currentKey = event.key;
    currentClass = classMapper(currentKey);
    buttonAnimation(currentClass);
  });
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
