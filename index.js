// CALCULATOR PROGRAM

const display = document.getElementById("display");

// 3 functions, 1(append to display), 2(clear display), 3(calculate)

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
