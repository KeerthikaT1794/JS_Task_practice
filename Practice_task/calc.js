let inputField = document.getElementById("input");
let historyField = document.getElementById("history");

function addToInput(value) {
  inputField.value += value;
}

function calculate() {
  let result;

  try {
    result = eval(inputField.value);
    historyField.value += inputField.value + " = " + result + "\n";
    inputField.value = result;
  } catch (error) {
    inputField.value = "Error";
  }
}

function clearInput() {
  inputField.value = "";
}

