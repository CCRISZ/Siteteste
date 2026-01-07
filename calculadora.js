let display = document.getElementById("display");

function add(valor) {
  display.value += valor;
}

function clearDisplay() {
  display.value = "";
}
function apagarUltimo() {
  display.value = display.value.slice(0, -1);
}


function calcular() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";
  }
}
