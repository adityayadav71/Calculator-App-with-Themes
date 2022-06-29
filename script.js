const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const screen = document.getElementById("screen");
const deleteBtn = document.getElementById("delete");
const resetBtn = document.getElementById("reset");
const equalBtn = document.getElementById("equal");
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

const updateExpression = function (content) {
  expression = content;
};

// Event Listeners
numbers.forEach((num) => {
  num.addEventListener("click", function () {
    screen.textContent += num.textContent;
    expression = screen.textContent;
  });
});

operator.forEach((op) => {
  op.addEventListener("click", function () {
    screen.textContent += `${op.dataset.value}`;
    updateExpression(screen.textContent);
  });
});

deleteBtn.addEventListener("click", function () {
  screen.textContent = screen.textContent.slice(0, -1);
  updateExpression(screen.textContent);
});

resetBtn.addEventListener("click", function () {
  screen.textContent = "";
  updateExpression(screen.textContent);
});

equalBtn.addEventListener("click", function () {
  try {
    screen.textContent = `${eval(expression)}`;
  } catch (e) {
    if (e instanceof SyntaxError) {
      alert("Invalid operation🙁. Check your operators!");
    }
  }
});
