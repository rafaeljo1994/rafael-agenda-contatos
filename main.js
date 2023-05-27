const form = document.getElementById('form-agenda');

let linhas = ''; /* Formulário inicia com uma linha em branco */

const contatos = []; /* Inicia array em branco dos contatos */
const telefones = []; /* Inicia array em branco dos telefones */

form.addEventListener('submit', function (e) {
  e.preventDefault();
  /* a função function (e) é p/ que ao submeter o form, a página não atualize sozinha */

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  /* função que add uma linha nova na variavel global linhas */
  const input_nome_contato = document.getElementById('nome-contato');
  const input_telefone_contato = document.getElementById('telefone-contato');
  const telefone = input_telefone_contato.value;
  const telefoneString = telefone.toString();

  if (contatos.includes(input_nome_contato.value)) {
    alert(`O contato: ${input_nome_contato.value} já consta na agenda!`);
  } else if (telefoneString.length < 11) {
    alert(`O número digitado não está completo!`);
  } else {
    contatos.push(input_nome_contato.value);
    telefones.push(input_telefone_contato.value);

    /* o if verifica se o contato já foi adicionado */

    let linha = `<tr>`;
    linha += `<td>${input_nome_contato.value}</td>`;
    linha += `<td>${input_telefone_contato.value}</td>`;
    linha += `</tr>`;

    /* O bloco acima é como uma cópia do HTML, é o preenchimento das colunas através do JS
    tanto é que as <tr> do HTML foram excluídas */

    linhas += linha;
    /* Aqui pega a linha inicial que estava em branco e grava os dados digitados nela */
  }

  input_nome_contato.value = '';
  input_telefone_contato.value = '';
  /* Acima limpa o campo após add o conteúdo */
}

function atualizaTabela() {
  /* Função que atualiza a tabela com os dados da função adiciona Linha */

  const corpo_tabela = document.querySelector('tbody');
  /* Para inserir um conteúdo dentro de uma tag utilizamos InnerHTML */

  corpo_tabela.innerHTML = linhas;
}
