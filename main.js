const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="reprovado.png" alta="emoji decepcionado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const Nota Minima = parseFloat(prompt("Digite a nota minima: "));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('Nota-atividade');

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value}já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parse\Float(inputnotaAtividade.value));
    }

    let linha = '<tr>'
    linha += `<td> ${inputNomeAtividade.value}</td > `;
    linha += `<td> ${inputNotaAtividade.value}</td > `;
    linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}
linha += '</tr>'

linhas += linha;

inputNomeAtividade.value = ' ';
inputnotaAtividade.value = ' ';

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;
    inputnomeAtividade.value = ' ';
    inputNotaAtividade.value = ' ';
}
function atualizaMediaFinal() {
    const MediaFinal = calculaMediafinal();

    document.getElementById('media-final-valor).innerHTML=mediaFinal;
    document.getElementById('media=final-resultado).innerHTML=mediaFinal>notaMinima ? spanAprovado:spanReprovado;
    
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas, lenght; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.lenght;
}