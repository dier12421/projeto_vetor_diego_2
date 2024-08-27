var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  adicionarValor();
  mostrarPares();
});

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function inverterVetor() {
    vetor.reverse();

    const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar os valores invertidos

    for (let i = 0; i < vetor.length; i++) {
      const valor = vetor[i];
      const novalinha = tabela.insertRow();
      const celula = novalinha.insertCell();
      celula.textContent = valor;
    }
  }

  inverterVetor();