// Bloco de verificação de preenchimento de campos

function Verifica(){

    let novaListaInput = document.getElementById('novaLista').value;

    let novaLista = document.getAnimations('loginsenha').value;

     if(!loginEmail || !loginSenha) {

        alert("favor preencha os campos!");

     }else {

        window.location.href ="lista-de-compras.html";

     }
}

/*FUNÇÃO PARA CRIAR A LISTA DE USUÁRIOS */

/*

--->Cria o Array para armazenar os usuários

*/
var dadosLista = [];

function salvarUser() {
    let novaLista = document.getElementById("novaLista").value;

    if (novaLista) {
        dadosLista.push({ nome: novaLista, quantidade: 1 });
        criaLista();
        document.getElementById("novaLista").value = '';
    } else {
        alert("Digite um nome");
        document.getElementById("novaLista").focus();
    }
}

function criaLista() {
    let tabela = "<tr><th>Nome do Produto</th><th>Quantidade</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLista.length; i++) {
        tabela += `<tr>
            <td>${dadosLista[i].nome}</td>
            <td><input type="number" value="${dadosLista[i].quantidade}" min="1" onchange="atualizarQuantidade(${i}, this.value)"></td>
            <td>
                <button onclick="editar(${i})">Editar</button>
                <button onclick="excluir(${i})">Excluir</button>
            </td>
        </tr>`;
    }

    document.getElementById('tabela').innerHTML = tabela;
}

function atualizarQuantidade(index, novaQuantidade) {
    dadosLista[index].quantidade = parseInt(novaQuantidade);
}

function editar(i) {
    document.getElementById("novaLista").value = dadosLista[i].nome;
    dadosLista.splice(i, 1);
    criaLista();
}

function excluir(i) {
    dadosLista.splice(i, 1);
    criaLista();
}
