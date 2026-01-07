function adicionarHabito() {
  const input = document.getElementById("novoHabito");
  const lista = document.getElementById("listaHabitos");

  const texto = input.value.trim();
  if (texto === "") return;

  // item da lista
  const item = document.createElement("li");
  item.className =
    "list-group-item d-flex justify-content-between align-items-center";

  // texto do hábito
  const spanTexto = document.createElement("span");
  spanTexto.textContent = texto;

  // contador
  let contador = 0;
  const spanContador = document.createElement("span");
  spanContador.textContent = `${contador}x`;
  spanContador.className = "badge bg-primary rounded-pill me-2";

  // botão +
  const botaoMais = document.createElement("button");
  botaoMais.className = "btn btn-sm btn-success";
  botaoMais.textContent = "+";

  botaoMais.onclick = () => {
    contador++;
    spanContador.textContent = `${contador}x`;
  };

  // grupo direito (contador + botão)
  const grupoDireito = document.createElement("div");
  grupoDireito.appendChild(spanContador);
  grupoDireito.appendChild(botaoMais);

  // monta o item
  item.appendChild(spanTexto);
  item.appendChild(grupoDireito);

  lista.appendChild(item);
  input.value = "";
}
