function buscarCEP() {
  const cep = document.getElementById("cep").value.replace(/\D/g, "");
  const resultado = document.getElementById("resultado");

  if (cep.length !== 8) {
    resultado.innerHTML = "<p class='text-danger'>CEP inválido.</p>";
    return;
  }

  resultado.innerHTML = "<p>Buscando...</p>";

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        resultado.innerHTML = "<p class='text-danger'>CEP não encontrado.</p>";
        return;
      }

      resultado.innerHTML = `
        <p><strong>Rua:</strong> ${dados.logradouro}</p>
        <p><strong>Bairro:</strong> ${dados.bairro}</p>
        <p><strong>Cidade:</strong> ${dados.localidade}</p>
        <p><strong>Estado:</strong> ${dados.uf}</p>
      `;
    })
    .catch(() => {
      resultado.innerHTML = "<p class='text-danger'>Erro ao buscar CEP.</p>";
    });
}
