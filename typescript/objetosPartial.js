var produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "Azul",
};
var produto2 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true,
};
var servico1 = {
    nome: "Instalação",
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1);
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade)
        console.log(produto.quantidade + 20);
}
mostrarQuantidadePartial(produto1);
mostrarQuantidadePartial(produto2);
mostrarQuantidadePartial(servico1);
var artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["HTML", "Front End"],
    autor: "Daniel San",
};
if (typeof artigo.autor === "string") {
    artigo.autor.toUpperCase();
}
function mostrarTitulo(obj) {
    if (obj && typeof obj === "object" && "titulo" in obj) {
        console.log(obj.titulo);
    }
}
// mostrarTitulo(200); SÓ PODE OBJETO LITERAL
mostrarTitulo({
    titulo: "HTML e CSS",
});
