const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-agenda');
    const inputNumeroContato = document.getElementById('numero-agenda');

    nomes.push(inputNomeContato.value);
    telefones.push(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${nomes.length}</td>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha +='</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaAgenda(){
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}

