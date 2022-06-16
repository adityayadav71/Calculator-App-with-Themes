const numbers = document.getElementsByClassName("number");
const screen = document.getElementById("screen");
const deleteBtn = document.getElementById("delete");
const resetBtn = document.getElementById("reset");
const equalBtn = document.getElementById("equal");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const dotBtn = document.getElementById("decimal");
const themeSwitchBtns = document.getElementsByClassName("theme-switch-btn");
const themeSwitchControl = document.getElementById("theme-switcher");
let expression = "";

active(0);

function active(k) {
  for (let i = k; i < themeSwitchBtns.length; i++) {
    themeSwitchBtns[i].addEventListener("click", function () {
      themeSwitchBtns[i].classList.add("active");
      for (let j = 0; j < themeSwitchBtns.length; j++) {
        if (j != i) {
          themeSwitchBtns[j].classList.remove("active");
        }
      }
      themeSwitchControl.classList.add(`theme-${i + 1}`);
      for (let j = 1; j <= 3; j++) {
        if (j != i + 1) {
          themeSwitchControl.classList.remove(`theme-${j}`);
        }
      }
    });
  }
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    screen.textContent += numbers[i].textContent;
    expression = screen.textContent;
    console.log(expression);
  });
}

deleteBtn.addEventListener("click", function () {
  screen.textContent = screen.textContent.slice(0, -1);
  expression = screen.textContent;
});
resetBtn.addEventListener("click", function () {
  screen.textContent = "";
  expression = screen.textContent;
});
equalBtn.addEventListener("click", function () {
  let result = eval(expression);
  screen.textContent = `${result}`;
});
dotBtn.addEventListener("click", function () {
  screen.textContent += ".";
  expression = screen.textContent;
});
plusBtn.addEventListener("click", function () {
  screen.textContent += "+";
  expression = screen.textContent;
  console.log(expression);
});
minusBtn.addEventListener("click", function () {
  screen.textContent += "-";
  expression = screen.textContent;
  console.log(expression);
});
divideBtn.addEventListener("click", function () {
  screen.textContent += "/";
  expression = screen.textContent;
  console.log(expression);
});
multiplyBtn.addEventListener("click", function () {
  screen.textContent += "*";
  expression = screen.textContent;
  console.log(expression);
});
