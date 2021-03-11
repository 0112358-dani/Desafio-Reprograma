var spanHora = document.querySelector("#resposta");

var inputGanhoPorMes = document.querySelector("#ganho-mes");

var inputHorasPorDia = document.querySelector("#horas-dia");

function calcularValorHora() {

  var qtdTotalDeHoras = inputHorasPorDia.valueAsNumber * 22;

  var valorDeHora = (inputGanhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2);

 spanHora.textContent = "R$ " + valorDeHora
} 