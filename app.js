// ==========================================
// BLOCO 1 - ARRAYS E METODOS
// ==========================================

console.log("===== BLOCO 1 - ARRAYS E METODOS =====");

const nomes = ["Ana", "Carlos", "Mariana"];

nomes.forEach((nome) => {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter((preco) => {
    return preco > 20;
});

const somaPrecos = precos.reduce((total, preco) => {
    return total + preco;
}, 0);

console.log("Preços acima de 20:", precosAcimaDe20);
console.log("Soma de todos os preços:", somaPrecos);

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Estojo", preco: 25 }
];

const nomesProdutos = produtos.map((produto) => {
    return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter((produto) => {
    return produto.preco < 50;
});

console.log("Produtos com preço menor que R$ 50:", produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => {
    return total + produto.preco;
}, 0);

console.log("Valor total dos produtos:", totalProdutos);

produtos.forEach((produto) => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});


// ==========================================
// BLOCO 2 - MANIPULAÇÃO DO DOM
// ==========================================

console.log("===== BLOCO 2 - MANIPULAÇÃO DO DOM =====");

const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Seu Nome";

const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach((paragrafo) => {
    console.log(paragrafo.textContent);
});

const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;

const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);

terceiroItem.classList.add("destaque");

console.log(
    "O terceiro item tem a classe destaque?",
    terceiroItem.classList.contains("destaque")
);

const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

tarefas.forEach((tarefa) => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.append(item);
});

const primeiroItem = lista.querySelector("li");
primeiroItem.classList.add("feito");

console.log(
    "Quantidade total de itens na lista:",
    lista.querySelectorAll("li").length
);


// ==========================================
// BLOCO 3 - EVENTOS E EVENT DELEGATION
// ==========================================

console.log("===== BLOCO 3 - EVENTOS =====");

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log(campoNome.value);
});

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado via JavaScript";
lista.append(itemDinamico);

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === "") {
        return;
    }

    const novoItem = document.createElement("li");
    novoItem.textContent = textoTarefa;

    lista.append(novoItem);

    campoTarefa.value = "";
});

console.log("Projeto carregado com sucesso!");