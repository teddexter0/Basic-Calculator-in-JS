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
    // Used Function constructor instead of eval for safer evaluation
    const result = new Function(`return ${display.value}`)();
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
