let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

const form = document.getElementById("form-produto");
const tabela = document.getElementById("tabela-produto");
const busca = document.getElementById("busca");

function salvarDados(){
    localStorage.setItem("produtos", JSON.stringify(produto));
}

function atualizarTabela(){
    tabela.innerHTML = "";
    const filtro = busca.value.toLocaleLowerCase();

    produtos.forEach((produto,index) => {
        if(produto.nome.toLowerCase().includes(filtro)){
            consttr = document.createElement("tr");

            tr.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.unidade}</td>
                <td>${produto.categoria}</td>
                <td>
                    <buttoon class = "acao adicionar" onclick = "alterarQuantidade(${index}, 1">+</button>
                    <buttoon class = "acao remover" onclick = "alterarQuantidade(${index}, -1">-</button>
                    <buttoon class = "acao remover" onclick = "removerProduto(${index}">Excluir</button>
                </td>
            `;
            tabala.appendChild(tr);
        }
    });
}

form.addEventListener("submit",function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const quantidade = parseInt(document.getEllemntById("quantidade").value);
    const unidade = document.getElementById("unidade").value;
    const categoria = document.getElementById("categoria").value;

    const novoProduto = {
        nome,
        quantidade,
        unidade,
        categoria
    };

    produtos.push(novoProduto);

    salvarDados();
    atualizarTabela();

    form.reset();

});