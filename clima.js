const apiKey = "d";

function buscarClima() {
  const cidade = document.getElementById("cidade").value;
  const resultado = document.getElementById("resultado");

  if (cidade === "") {
    resultado.innerHTML = "Digite uma cidade.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(dados => {
      resultado.innerHTML = `
        <p><strong>${dados.name}</strong></p>
        <p>${dados.weather[0].description}</p>
        <p> ${dados.main.temp} °C</p>
      `;
    })
    .catch(() => {
      resultado.innerHTML = "Erro ao buscar dados.";
    });
}
